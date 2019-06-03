import Vue from 'vue'
import App from './App'
import store from './store'
import loading from './components/ui/loading.vue'
import loadingDialog from './components/ui/loading-dialog.vue'
import alert from './components/ui/alert.vue'

Vue.config.productionTip = false

Vue.component('loading', loading)
Vue.component('loadingDialog', loadingDialog)
Vue.component('alert', alert)

Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
