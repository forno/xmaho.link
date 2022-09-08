<script lang="ts" setup>
import {
  Mesh,
  PerspectiveCamera,
  PlaneGeometry,
  Scene,
  ShaderLib,
  ShaderMaterial,
  Uniform,
  Vector2,
  WebGLRenderer,
} from 'three';

const scene = new Scene();
const camera = new PerspectiveCamera(
  75,
  globalThis.innerWidth / globalThis.innerHeight,
  0.1,
  1000
);
const bgMaterial = new ShaderMaterial({
  vertexShader: ShaderLib.background.vertexShader,
  fragmentShader: /* glsl */ `
uniform vec2 iResolution; // viewport resolution (in pixels)
uniform float iTime; // shader playback time (in seconds)

varying vec2 vUv;

void main () {
  gl_FragColor = vec4(0., 0., 0., 1.);

  //Resolution for scaling
  vec2 R = iResolution.xy;
  //Loop through 30 orbs
  for(float i=0.; i<30.; ++i) {
    //Color (simple sine palette)
    gl_FragColor += (sin(i+vec4(0,1,2,0)) + 1.)/.3
      / length(R*(2.*vUv-1.+cos(i*R+iTime))); //Brightness attenuation
  }
}
`,
  uniforms: {
    ...ShaderLib.background.uniforms,
    iTime: { value: 0 },
    iResolution: new Uniform(
      new Vector2(globalThis.innerWidth, globalThis.innerHeight)
    ),
  },
});
const bgMesh = new Mesh(new PlaneGeometry(2, 2), bgMaterial);
scene.add(bgMesh);
let animationId = $ref(null);

onMounted(() => {
  if (animationId == null) {
    const renderer = new WebGLRenderer({
      canvas: globalThis.document.getElementById('background-canvas'),
      alpha: true,
    });
    renderer.setPixelRatio(globalThis.devicePixelRatio);
    renderer.setSize(globalThis.innerWidth, globalThis.innerHeight);

    const animate = (elapsedTime: number) => {
      animationId = globalThis.requestAnimationFrame(animate);
      bgMaterial.uniforms.iTime.value = elapsedTime / 1000;
      renderer.render(scene, camera);
    };

    animationId = globalThis.requestAnimationFrame(animate);
  }
});
onUnmounted(() => {
  globalThis.cancelAnimationFrame(animationId);
});
</script>

<template lang="pug">
div#top
  canvas#background-canvas
  div#on-canvas neko
</template>

<style lang="postcss">
body {
  margin: 0;
}
#background-canvas {
  position: absolute;
  top: 0;
  left: 0;
}
#on-canvas {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  color: white;
}
</style>
