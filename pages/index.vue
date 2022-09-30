<script setup lang="ts"></script>

<template lang="pug">
header
  .home-menu.pure-menu.pure-menu-horizontal.pure-menu-fixed
    NuxtLink.pure-menu-heading(to="/") FORNO Portfolio
    ul.pure-menu-list
      li.pure-menu-item.pure-menu-selected
        NuxtLink.pure-menu-link(to="/") Home
      li.pure-menu-item
        NuxtLink.pure-menu-link(to="/webgl") Webgl Test
//-      li.pure-menu-item
//-        NuxtLink.pure-menu-link(to="/contents") Contents
//-      li.pure-menu-item
//-        NuxtLink.pure-menu-link(to="/contact") Contact
.splash-container
  .splash
    h1.splash-head
      div
        span.inlineblock FORNO
        span.inlineblock こと
        span.inlineblock "フォルノ"
    .splash-subhead
      .pure-g
        .pure-u-1-3
          .splash-target-point
            span Web
        .pure-u-1-3
          .splash-target-point
            span VR
        .pure-u-1-3
          .splash-target-point
            span Robot
      span(style="font-size: 200%;") X
      .pure-g
        .pure-u-1-2.pure-u-lg-1-4
          .splash-technique-point
            span 設計
        .pure-u-1-2.pure-u-lg-1-4
          .splash-technique-point
            span 開発
        .pure-u-1-2.pure-u-lg-1-4
          .splash-technique-point
            span 運用
        .pure-u-1-2.pure-u-lg-1-4
          .splash-technique-point
            span 管理
      | マルチ フルスタック エンジニア
    p
      a.pure-button.pure-button-primary(href="#content-top") 詳細を知る
#content-top.content-wrapper
  .content
    h2.content-head.is-center Services
    .pure-g
      .l-box.pure-u-1.pure-u-md-1-2.pure-u-lg-1-4
        h3.content-subhead
          i.fas.fa-mobile-button
          | Webフロント
        p Webのフロント部分をVue, React, PureJSのどれでも開発
        p 引き渡し後のお客様の継続的な開発を見据えた選択可能
      .l-box.pure-u-1.pure-u-md-1-2.pure-u-lg-1-4
        h3.content-subhead
          i.fas.fa-server
          | Webサーバーサイド
        p Nodejs, Rust, Go, PHP, PHP, Ruby, Python等の幅広い言語をサポート
        p 幅広い選択肢から問題解決に最も適した方法を提供します
      .l-box.pure-u-1.pure-u-md-1-2.pure-u-lg-1-4
        h3.content-subhead
          i.fas.fa-vr-cardboard
          | VRコンテンツ
        p VR空間向けの機能やコンテンツ制作を行っています
        p 特にVRChat向けのシステムに強いです
      .l-box.pure-u-1.pure-u-md-1-2.pure-u-lg-1-4
        h3.content-subhead
          i.fas.fa-comments
          | 課題解決
        p あらゆる知識を活かして、お客様の実現したいことを形にします
        p まずはお気軽にお問い合わせください
    .is-center
      a.pure-button(href="mailto:forno@xmaho.link")
        i.fas.fa-envelope
        | メールでお問い合わせ
  .ribbon.l-box-lrg.pure-g
    .l-box-lrg.is-center.pure-u-1.pure-u-md-1-2.pure-u-lg-2-5
      img.pure-img-responsive(src="@/public/FORNO_avatar.png", alt="FORNO avatar", width="300")
    .pure-u-1.pure-u-md-1-2.pure-u-lg-3-5
      h2.content-head.content-head-ribbon x.maho Laboratory
      p FORNOが自信を持って提供するブランド
      h3.content-subhead 先進技術を惜しみなく活用
      h3.content-subhead 理論に基づく体験
      h3.content-subhead x.maho(エクマホ)の名を冠する
      h2.content-head
        a(href="https://forno.booth.pm").text-white Boothにて商品販売中
  .content
    h2.content-head.is-center Contents
    .pure-g
      .l-box.pure-u-1.pure-u-md-1-2
        h3.content-subhead
          i.fas.fa-vr-cardboard
          i.fas.fa-video
          | Record VRC with GeForce Experience
        p VR空間内からワンタッチで録画
        iframe(src="https://www.youtube.com/embed/X1NDChUcO9s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .l-box.pure-u-1.pure-u-md-1-2
        h3.content-subhead
          i.fas.fa-vr-cardboard
          i.fas.fa-dove
          | Drone Movement with Dynamic Bone
        p VRChat向けの追従機能
        iframe(src="https://www.youtube.com/embed/tUbzazgr8p8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .is-center
      a.pure-button(href="https://forno.booth.pm")
        i.fas.fa-shop
        | 販売ページはこちら
  .ribbon.l-box-lrg.pure-g
    .l-box-lrg.is-center.pure-u-1
      h2.content-head.content-head-ribbon Links
      a(href="https://vnos.info")
        img.pure-img-responsive(src="@/public/vnos_logo.svg", alt="VNOS Logo", width="200")
</template>

<style scoped>
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

/*
 * -- BASE STYLES --
 * Most of these are inherited from Base, but I want to change a few.
 */
body {
  line-height: 1.7em;
  color: #7f8c8d;
  font-size: 13px;
}

h1,
h2,
h3,
h4,
h5,
h6,
label {
  color: #34495e;
}

.pure-img-responsive {
  max-width: 100%;
  height: auto;
}

/*
 * -- LAYOUT STYLES --
 * These are some useful classes which I will need
 */
.l-box {
  padding: 1em;
}

.l-box-lrg {
  padding: 2em;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.is-center {
  text-align: center;
}

.inlineblock {
  display: inline-block;
}

/*
 * -- PURE FORM STYLES --
 * Style the form inputs and labels
 */
.pure-form label {
  margin: 1em 0 0;
  font-weight: bold;
  font-size: 100%;
}

.pure-form input[type] {
  border: 2px solid #ddd;
  box-shadow: none;
  font-size: 100%;
  width: 100%;
  margin-bottom: 1em;
}

/*
 * -- PURE BUTTON STYLES --
 * I want my pure-button elements to look a little different
 */
.pure-button {
  background-color: #1f8dd6;
  color: white;
  padding: 0.5em 2em;
  border-radius: 5px;
}

a.pure-button-primary {
  background: white;
  color: #1f8dd6;
  border-radius: 5px;
  font-size: 120%;
}

/*
 * -- MENU STYLES --
 * I want to customize how my .pure-menu looks at the top of the page
 */

.home-menu {
  padding: 0.5em;
  text-align: center;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.home-menu {
  background: #2d3e50;
}
.pure-menu.pure-menu-fixed {
  /* Fixed menus normally have a border at the bottom. */
  border-bottom: none;
  /* I need a higher z-index here because of the scroll-over effect. */
  z-index: 4;
}

.home-menu .pure-menu-heading {
  color: white;
  font-weight: 400;
  font-size: 120%;
}

.home-menu .pure-menu-selected a {
  color: white;
}

.home-menu a {
  color: #6fbef3;
}
.home-menu li a:hover,
.home-menu li a:focus {
  background: none;
  border: none;
  color: #aecfe5;
}

/*
 * -- SPLASH STYLES --
 * This is the blue top section that appears on the page.
 */

.splash-container {
  background: linear-gradient(rgba(0, 0, 130, 0.8), rgba(0, 130, 0, 0.8)),
    center / cover no-repeat url('@/public/FORNO_avatar.png'), #1f8dd6;
  z-index: 1;
  overflow: hidden;
  /* The following styles are required for the "scroll-over" effect */
  width: 100%;
  height: 88%;
  top: 0;
  left: 0;
  position: fixed !important;
}

.splash {
  /* absolute center .splash within .splash-container */
  width: 80%;
  height: 90%;
  margin: auto;
  position: absolute;
  top: 100px;
  left: 0;
  bottom: 0;
  right: 0;
  text-align: center;
}

/* This is the main heading that appears on the blue section */
.splash-head {
  margin-left: 0.5em;
  margin-right: 0.5em;
  font-size: 20px;
  font-weight: bold;
  color: white;
  border: 3px solid white;
  padding: 1em 1.6em;
  font-weight: 100;
  border-radius: 5px;
  line-height: 1em;
}

/* This is the subheading that appears on the blue section */
.splash-subhead {
  color: white;
  letter-spacing: 0.05em;
  opacity: 0.8;
}

.splash-target-point {
  margin: 0.2em;
  height: 2.5em;
  background: white;
  border-radius: 10px;
  color: darkgreen;
  font-size: 120%;
  font-weight: bold;
  position: relative;
}

.splash-target-point span {
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.splash-technique-point {
  margin: 0.2em;
  height: 2.5em;
  background: white;
  border-radius: 10px;
  color: darkgreen;
  font-size: 120%;
  font-weight: bold;
  position: relative;
}

.splash-technique-point span {
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

/*
 * -- CONTENT STYLES --
 * This represents the content area (everything below the blue section)
 */
.content-wrapper {
  /* These styles are required for the "scroll-over" effect */
  position: absolute;
  top: 87%;
  width: 100%;
  min-height: 12%;
  z-index: 2;
  background: white;
}

/* We want to give the content area some more padding */
.content {
  margin: auto;
  max-width: 1024px;
  padding: 1em 1em 3em;
}

/* This is the class used for the main content headers (<h2>) */
.content-head {
  font-weight: 400;
  letter-spacing: 0.1em;
  margin: 2em 0 1em;
}

/* This is a modifier class used when the content-head is inside a ribbon */
.content-head-ribbon {
  color: white;
}

/* This is the class used for the content sub-headers (<h3>) */
.content-subhead {
  color: #1f8dd6;
}
.content-subhead i {
  margin-right: 7px;
}

/* This is the class used for the dark-background areas. */
.ribbon {
  background: #2d3e50;
  color: #aaa;
}

/* This is the class used for the footer */
.footer {
  background: #111;
  position: fixed;
  bottom: 0;
  width: 100%;
}

.text-white {
  color: white;
}

/*
 * -- TABLET (AND UP) MEDIA QUERIES --
 * On tablets and other medium-sized devices, we want to customize some
 * of the mobile styles.
 */
@media (min-width: 48em) {
  /* We increase the body font size */
  body {
    font-size: 16px;
  }

  /* We can align the menu header to the left, but float the
  menu items to the right. */
  .home-menu {
    text-align: left;
  }
  .home-menu ul {
    float: right;
  }

  /* We increase the height of the splash-container */
  /*  .splash-container {
    height: 500px;
  }*/

  /* We decrease the width of the .splash, since we have more width
  to work with */
  .splash {
    width: 50%;
  }

  .splash-head {
    font-size: 250%;
  }

  /* We remove the border-separator assigned to .l-box-lrg */
  .l-box-lrg {
    border: none;
  }
}
</style>
