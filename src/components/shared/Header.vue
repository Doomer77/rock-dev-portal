<template>
  <header class="header">
    <div class="header__logo-box">
      <router-link :to="{ path: '/' }">
        <img
          src="../../assets/images/logo.svg"
          alt="rock portal dev"
          class="header__logo-box__logo"
        />
      </router-link>
    </div>
    <nav><router-link :to="{ path: 'register' }">Зарегится</router-link></nav>
  </header>
</template>

<script setup></script>

<style></style>
