<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import HeroSection from '@/components/HeroSection.vue'
</script>

<template>
  <main>
    <AppHeader />
    <HeroSection />

    <div style="height: 100svh; background-color: blue"></div>
    <div style="height: 200svh; background-color: pink"></div>
  </main>
</template>

<style lang="scss" scoped>
.h1 {
  color: var(--color-text-base);
}
</style>
