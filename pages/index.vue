<script setup lang="ts"></script>

<template lang="pug">
div
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
        img.pure-img-responsive(src="@/assets/FORNO_avatar.png", alt="FORNO avatar", width="300")
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
          img.pure-img-responsive(src="@/assets/vnos_logo.svg", alt="VNOS Logo", width="200")
</template>
