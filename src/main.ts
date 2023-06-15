import { createApp, type VueElement } from 'vue';
import { createPinia } from 'pinia';
import './styles/style.css';
import App from './App.vue';

createApp(App as VueElement)
  .use(createPinia())
  .mount('#app');
