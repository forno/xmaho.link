<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
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
} from 'three'

const animationId = ref<number | null>(null)
const canvasElement = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
  // All WebGL and window-dependent code must run on client only.
  const scene = new Scene()
  const camera = new PerspectiveCamera(
    75,
    globalThis.innerWidth / globalThis.innerHeight,
    0.1,
    1000
  )
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
  })
  const bgMesh = new Mesh(new PlaneGeometry(2, 2), bgMaterial)
  scene.add(bgMesh)

  if (animationId.value == null) {
    const renderer = new WebGLRenderer({
      canvas: canvasElement.value as HTMLCanvasElement,
      alpha: true,
    })
    renderer.setPixelRatio(globalThis.devicePixelRatio)
    renderer.setSize(globalThis.innerWidth, globalThis.innerHeight)

    const animate = (elapsedTime: number) => {
      animationId.value = globalThis.requestAnimationFrame(animate)
      bgMaterial.uniforms.iTime!.value = elapsedTime / 1000
      renderer.render(scene, camera)
    }

    animationId.value = globalThis.requestAnimationFrame(animate)
  }
})
onUnmounted(() => {
  if (animationId.value != null) {
    globalThis.cancelAnimationFrame(animationId.value)
  }
})
</script>

<template>
  <div>
    <div id="top">
      <canvas id="background-canvas" ref="canvasElement"></canvas>
    </div>
    <header>
      <div class="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
        <NuxtLink class="pure-menu-heading" to="/">FORNO Portfolio</NuxtLink>
        <ul class="pure-menu-list">
          <li class="pure-menu-item">
            <NuxtLink class="pure-menu-link" to="/">Home</NuxtLink>
          </li>
          <li class="pure-menu-item pure-menu-selected">
            <NuxtLink class="pure-menu-link" to="/webgl">Webgl Test</NuxtLink>
          </li>
        </ul>
      </div>
    </header>
  </div>
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
