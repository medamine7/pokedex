import { createApp } from 'vue'
import './styles/main.css'
import App from './App.vue'
import initializeRouter from './router'
import apiPlugin from './plugins/api'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

initializeRouter(app)
app.use(pinia)

app.mount('#app')

app.use(apiPlugin)