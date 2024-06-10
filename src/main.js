import './assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import KrediAuth from "kredi-reg-authentication";
import "kredi-reg-authentication/styles.css";

const app = createApp(App)

app.use(KrediAuth)
app.use(router)

app.mount('#app')
