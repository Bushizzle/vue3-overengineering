import { createApp } from 'vue';
import { createPinia } from 'pinia'
import './styles/style.css';
import App from './App.vue';

createApp(App).use(createPinia()).mount("#app");
