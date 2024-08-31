/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import { createI18n } from 'vue-i18n'

// Components
import App from './App.vue'
import en from './locales/en.json';
import es from './locales/es.json';
// Composables
import { createApp } from 'vue'
const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: en,
    es: es
  },
  useScope: 'global'
})

const app = createApp(App)
app.use(i18n)

registerPlugins(app)

app.mount('#app')



