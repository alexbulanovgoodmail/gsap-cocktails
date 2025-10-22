import '@/assets/css/main.css'
import '@/assets/scss/main.scss'
import { createApp } from 'vue'
import App from './App.vue'
import gsap from 'gsap'
import { SplitText, ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(SplitText, ScrollTrigger)

createApp(App).mount('#app')
