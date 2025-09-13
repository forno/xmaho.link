<script setup lang="ts"></script>

<template>
  <div>
    <header>
      <div class="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
        <NuxtLink class="pure-menu-heading" to="/">FORNO Portfolio</NuxtLink>
        <ul class="pure-menu-list">
          <li class="pure-menu-item pure-menu-selected">
            <NuxtLink class="pure-menu-link" to="/">Home</NuxtLink>
          </li>
          <li class="pure-menu-item">
            <NuxtLink class="pure-menu-link" to="/webgl">Webgl Test</NuxtLink>
          </li>
        </ul>
      </div>
    </header>

    <div class="splash-container">
      <div class="splash">
        <h1 class="splash-head">
          <div>
            <span class="inlineblock">FORNO</span>
            <span class="inlineblock">こと</span>
            <span class="inlineblock">"フォルノ"</span>
          </div>
        </h1>
        <div class="splash-subhead">
          <div class="pure-g">
            <div class="pure-u-1-3">
              <div class="splash-target-point"><span>Web</span></div>
            </div>
            <div class="pure-u-1-3">
              <div class="splash-target-point"><span>VR</span></div>
            </div>
            <div class="pure-u-1-3">
              <div class="splash-target-point"><span>Robot</span></div>
            </div>
          </div>
          <span style="font-size: 200%">X</span>
          <div class="pure-g">
            <div class="pure-u-1-2 pure-u-lg-1-4">
              <div class="splash-technique-point"><span>設計</span></div>
            </div>
            <div class="pure-u-1-2 pure-u-lg-1-4">
              <div class="splash-technique-point"><span>開発</span></div>
            </div>
            <div class="pure-u-1-2 pure-u-lg-1-4">
              <div class="splash-technique-point"><span>運用</span></div>
            </div>
            <div class="pure-u-1-2 pure-u-lg-1-4">
              <div class="splash-technique-point"><span>管理</span></div>
            </div>
          </div>
          マルチ フルスタック エンジニア
        </div>
        <p>
          <a class="pure-button pure-button-primary" href="#content-top">詳細を知る</a>
        </p>
      </div>
    </div>

    <div id="content-top" class="content-wrapper">
      <div class="content">
        <h2 class="content-head is-center">Services</h2>
        <div class="pure-g">
          <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
            <h3 class="content-subhead">
              <i class="fas fa-mobile-button"></i>
              Webフロント
            </h3>
            <p>Webのフロント部分をVue, React, PureJSのどれでも開発</p>
            <p>引き渡し後のお客様の継続的な開発を見据えた選択可能</p>
          </div>
          <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
            <h3 class="content-subhead">
              <i class="fas fa-server"></i>
              Webサーバーサイド
            </h3>
            <p>Nodejs, Rust, Go, PHP, PHP, Ruby, Python等の幅広い言語をサポート</p>
            <p>幅広い選択肢から問題解決に最も適した方法を提供します</p>
          </div>
          <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
            <h3 class="content-subhead">
              <i class="fas fa-vr-cardboard"></i>
              VRコンテンツ
            </h3>
            <p>VR空間向けの機能やコンテンツ制作を行っています</p>
            <p>特にVRChat向けのシステムに強いです</p>
          </div>
          <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
            <h3 class="content-subhead">
              <i class="fas fa-comments"></i>
              課題解決
            </h3>
            <p>あらゆる知識を活かして、お客様の実現したいことを形にします</p>
            <p>まずはお気軽にお問い合わせください</p>
          </div>
        </div>
        <div class="is-center">
          <a class="pure-button" href="mailto:forno@xmaho.link">
            <i class="fas fa-envelope"></i>
            メールでお問い合わせ
          </a>
        </div>
      </div>
      <div class="ribbon l-box-lrg pure-g">
        <div class="l-box-lrg is-center pure-u-1 pure-u-md-1-2 pure-u-lg-2-5">
          <img class="pure-img-responsive" src="@/assets/FORNO_avatar.png" alt="FORNO avatar" width="300" />
        </div>
        <div class="pure-u-1 pure-u-md-1-2 pure-u-lg-3-5">
          <h2 class="content-head content-head-ribbon">x.maho Laboratory</h2>
          <p>FORNOが自信を持って提供するブランド</p>
          <h3 class="content-subhead">先進技術を惜しみなく活用</h3>
          <h3 class="content-subhead">理論に基づく体験</h3>
          <h3 class="content-subhead">x.maho(エクマホ)の名を冠する</h3>
          <h2 class="content-head">
            <a class="text-white" href="https://forno.booth.pm">Boothにて商品販売中</a>
          </h2>
        </div>
      </div>
      <div class="content">
        <h2 class="content-head is-center">Contents</h2>
        <div class="pure-g">
          <div class="l-box pure-u-1 pure-u-md-1-2">
            <h3 class="content-subhead">
              <i class="fas fa-vr-cardboard"></i>
              <i class="fas fa-video"></i>
              Record VRC with GeForce Experience
            </h3>
            <p>VR空間内からワンタッチで録画</p>
            <iframe src="https://www.youtube.com/embed/X1NDChUcO9s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div class="l-box pure-u-1 pure-u-md-1-2">
            <h3 class="content-subhead">
              <i class="fas fa-vr-cardboard"></i>
              <i class="fas fa-dove"></i>
              Drone Movement with Dynamic Bone
            </h3>
            <p>VRChat向けの追従機能</p>
            <iframe src="https://www.youtube.com/embed/tUbzazgr8p8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
        <div class="is-center">
          <a class="pure-button" href="https://forno.booth.pm">
            <i class="fas fa-shop"></i>
            販売ページはこちら
          </a>
        </div>
      </div>
      <div class="ribbon l-box-lrg pure-g">
        <div class="l-box-lrg is-center pure-u-1">
          <h2 class="content-head content-head-ribbon">Links</h2>
          <a href="https://vnos.info">
            <img class="pure-img-responsive" src="@/assets/vnos_logo.svg" alt="VNOS Logo" width="200" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
