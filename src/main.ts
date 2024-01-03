import { createApp } from 'vue'
import './styles/main.css'
import App from './App.vue'
import initializeRouter from './router'
import apiPlugin from './plugins/api'

const app = createApp(App)

initializeRouter(app)

app.mount('#app')

app.use(apiPlugin)