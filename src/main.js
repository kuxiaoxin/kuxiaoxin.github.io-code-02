import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'animate.css'
import 'wowjs/css/libs/animate.css'
import './assets/css/tencent.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
