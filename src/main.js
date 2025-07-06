import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import JsonExcel from "vue-json-excel3";
import './other/interceptor'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import individual icons
import { faUser, faLock, faHome } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'


// Add icons to the library
library.add(faUser, faLock, faHome, faPen)



window.$ = window.jQuery = require('jquery');
const app = createApp(App)

app.use(router)
app.component()
app.component("downloadExcel", JsonExcel);
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')


