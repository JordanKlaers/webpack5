'use strict';

import App from './App';

const application = new Vue({
	el: '#app',
	components: { App },
	store,
	render: function(createElement) {
		return createElement(App);
	}
});

export default application;