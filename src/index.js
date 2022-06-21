'use strict';
import Vue from "vue";
import App from './App';
import router from './router';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const application = new Vue({
	router,
	render: createElement => {
		return createElement(App);
	}
}).$mount('#app');

export default application;