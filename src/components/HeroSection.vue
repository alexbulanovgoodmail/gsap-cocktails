<script setup lang="ts">
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import { ref, onMounted } from 'vue'

const videoRef = ref<HTMLVideoElement | null>(null)

onMounted(() => {
  const titleSplit = new SplitText('.hero-section h1', {
    type: 'chars, words',
  })

  const textSplit = new SplitText(['.recipe h2', '.details p'], {
    type: 'lines',
  })

  titleSplit.chars.forEach((char) => char.classList.add('text-gradient'))

  gsap.from(titleSplit.chars, {
    opacity: 0,
    yPercent: 100,
    duration: 1.8,
    ease: 'expo.out',
    stagger: 0.06,
  })

  gsap.from(textSplit.lines, {
    opacity: 0,
    yPercent: 100,
    duration: 1.8,
    ease: 'expo.out',
    stagger: 0.06,
    delay: 1,
  })

  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })
    .to('.leaf-right', { y: 200 }, 0)
    .to('.leaf-left', { y: -200 }, 0)
    .to('.arrow', { y: 100 }, 0)
})
</script>

<template>
  <section id="hero" class="hero-section">
    <div class="noisy"></div>
    <h1 className="hero-section__title">MOJITO</h1>

    <img class="leaf-left" src="@/assets/images/left-leaf.png" alt="" />
    <img class="leaf-right" src="@/assets/images/right-leaf.png" alt="" />
    <img class="arrow" src="@/assets/images/arrow.png" alt="" />

    <div class="content">
      <div class="container">
        <div class="content__wrapper">
          <div class="content__recipe">
            <div class="recipe">
              <p class="recipe__text">Cool. Crisp. Classic.</p>
              <h2 class="recipe__title">
                Sip the Spirit <br />
                of Summer
              </h2>
            </div>
          </div>
          <div class="content__details">
            <div class="details">
              <p class="details__text">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes — designed to delight your
                senses.
              </p>
              <a class="details__link" href="#cocktails">View cocktails</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="video">
    <video
      ref="videoRef"
      muted
      playsInline
      preload="auto"
      src="@/assets/videos/output.mp4"
    />
  </div>
</template>

<style lang="scss" scoped>
.hero-section {
  position: relative;
  z-index: 5;
  width: 100%;
  min-height: 100svh;
  overflow: hidden;

  &__title {
    margin-top: 160px;
    font-size: 96px;
    list-style: 1;
    font-weight: normal;
    text-align: center;

    @include font-heading;

    @media screen and (min-width: $md) {
      margin-top: 128px;
      font-size: 20vw;
    }
  }
}

.content {
  position: absolute;
  z-index: 2;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);

  @media screen and (min-width: $lg) {
    bottom: 80px;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: $lg) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }

  &__recipe {
    display: none;

    @media screen and (min-width: $md) {
      margin-bottom: 40px;
      display: block;
    }

    @media screen and (min-width: $lg) {
      margin-bottom: 0;
    }
  }
}

.leaf-left {
  position: absolute;
  z-index: 2;
  left: 0;
  bottom: -80px;
  width: 120px;

  @media screen and (min-width: $md) {
    top: 80px;
    bottom: 0;
    width: auto;
  }

  @media screen and (min-width: $xl) {
    top: 144px;
  }

  @media screen and (min-width: $xxl) {
    top: 208px;
  }
}

.leaf-right {
  position: absolute;
  z-index: 2;
  top: 50%;
  right: 0;
  width: 90px;

  @media screen and (min-width: $md) {
    bottom: 0;
    width: auto;
  }

  @media screen and (min-width: $xl) {
    top: 0;
  }

  @media screen and (min-width: $xxl) {
    top: 48px;
  }
}

.arrow {
  display: none;

  @media screen and (min-width: $lg) {
    position: absolute;
    top: 50%;
    right: 80px;
    display: block;
    transform: translateY(-50%);
  }
}

.recipe {
  font-size: 16px;
  line-height: 140%;
  font-weight: 500;
  text-align: center;

  @media screen and (min-width: $lg) {
    text-align: left;
  }

  &__text {
    margin-bottom: 20px;
  }

  &__title {
    font-size: 60px;
    line-height: 1;
    color: var(--color-accent);

    @include font-heading;

    @media screen and (min-width: $lg) {
      text-align: left;
    }
  }
}

.details {
  max-width: 380px;
  font-size: 18px;
  line-height: 140%;
  font-weight: 500;
  text-align: center;

  @media screen and (min-width: $lg) {
    text-align: left;
  }

  &__text {
    margin-bottom: 20px;
  }

  &__link {
    font-weight: 600;
    color: inherit;
    text-decoration: none;

    @include hover;
  }
}

.video {
  position: absolute;
  inset: 0;
  z-index: -1;
  width: 100%;
  height: 100%;

  video {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    object-position: center bottom;
  }
}
</style>
