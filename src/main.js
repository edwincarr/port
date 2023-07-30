import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import router from './plugins/router'

import { createPlausible } from 'v-plausible/vue'

const plausible = createPlausible({
  init: {
    domain: "edwinc.tech",
    hashMode: true,
  },
  settings: {
    enableAutoPageViews: true
  }
})

import { OhVueIcon, addIcons } from "oh-vue-icons"
import { CoGithub, CoLinkedinIn, FaBars, MdLightmode, MdNightlight } from "oh-vue-icons/icons"

addIcons(CoGithub, CoLinkedinIn, FaBars, MdLightmode, MdNightlight)

const app = createApp(App);
app.use(router)
app.use(plausible)
app.component("v-icon", OhVueIcon);
app.mount("#app");
