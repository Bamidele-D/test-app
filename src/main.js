import './assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import KrediAuth from "kredi-reg-authentication";
import "kredi-reg-authentication/styles.css";
import 'remixicon/fonts/remixicon.css'
import VOtpInput from "vue3-otp-input";

const app = createApp(App)

app.use(KrediAuth)
app.use(router)
app.component('v-otp-input', VOtpInput)

app.mount('#app')
