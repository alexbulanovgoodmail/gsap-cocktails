<script setup lang="ts">
import { navLinks } from '@/constants/index'
</script>

<template>
  <nav class="nav-bar">
    <div class="nav-bar__wrapper">
      <a class="nav-bar__logo" href="#hero">
        <img src="@/assets/images/logo.png" alt="logo" />
        <p>Velvet Pour</p>
      </a>

      <ul class="nav-bar__items">
        <li v-for="link in navLinks" :key="link.id" class="nav-bar__item">
          <a class="nav-bar__link" :href="`#${link.id}`">{{ link.title }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.nav-bar {
  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;

    @media screen and (min-width: $md) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  &__logo {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 30px;
    line-height: 1;
    color: inherit;
    text-decoration: none;

    p {
      margin-bottom: -8px;
    }

    @include font-heading;
  }

  &__items {
    margin: -12px -8px;
    display: flex;
    list-style: none;

    @media screen and (min-width: $xxs) {
      margin: -12px -14px;
    }
  }

  &__item {
    margin: 12px 8px;

    @media screen and (min-width: $xxs) {
      margin: 12px 14px;
    }
  }

  &__link {
    display: flex;
    font-size: 14px;
    color: var(--color-light);
    text-decoration: none;
    white-space: nowrap;
    transition: color $transition-duration $transition-function;

    @media (hover: hover) {
      &:hover,
      &:focus-visible {
        color: var(--color-accent);
      }
    }
  }
}
</style>
