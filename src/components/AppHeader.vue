<script setup lang="ts">
import gsap from 'gsap'
import { onMounted } from 'vue'
import NavBar from '@/components/NavBar.vue'

onMounted(() => {
  const headerTween = gsap.timeline({
    scrollTrigger: {
      trigger: '.app-header',
      start: 'bottom top',
      scrub: 1,
    },
  })

  headerTween.fromTo(
    '.app-header',
    {
      backgroundColor: 'transparent',
    },
    {
      backgroundColor: '#00000050',
      backdropFilter: 'blur(10px)',
      ease: 'power1.inOut',
    },
  )
})
</script>

<template>
  <header class="app-header">
    <div class="container">
      <NavBar />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  padding: 24px 0;
}
</style>
