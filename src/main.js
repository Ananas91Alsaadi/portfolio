import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueKonva from 'vue-konva';
import VueDragDrop from 'vue-drag-drop';

import './assets/main.css'







const app = createApp(App)

app.use(router)
app.use(VueKonva);
app.use(VueDragDrop);

app.mount('#app')
