import VueRouter from 'vue-router';
import Parallax from './parallax/Main.vue';
import PageNotFound from './PageNotFound.vue';
import SideScroll from './parallax/examples/SideScroll.vue';

const router = new VueRouter({
	//mode: 'history',
	routes: [
		{
			path: '/parallax',
			component: Parallax,
			children: [
				{
					path: 'sideScroll',
					component: SideScroll
				}
			]
		},
		{
			path: '*',
			component: PageNotFound
		}
	]
});
router.beforeEach((to, from, next) => {
	console.log("to: ", to);
	next();
})
export default router;