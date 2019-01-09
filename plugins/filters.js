import Vue from 'vue'

Vue.filter('mailto', (input) => { return 'mailto:' + input })
Vue.filter('appendColon', (input) => { return 'asdf' })
