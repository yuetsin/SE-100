// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

/* eslint-disable */

import Vue from 'vue'
import App from './App.vue'

let VueMaterial = require('vue-material')
Vue.use(VueMaterial)

new Vue({
    el: '#app',
    template: '<App/>',
    components: {
        App
    }
});
