const routes = [
	{
		path: '/',
		component: () => import('@/app/layouts/main'),
		children: [
			{ path: '', name: 'messages', component: () => import('@/pages/main') },
			{ path: '/disappearing', name: 'disappearing', component: () => import('@/pages/main') },
			{ path: '/settings', name: 'settings', component: () => import('@/pages/settings') },
		],
	},

	// {
	//     path: '/:catchAll(.*)*',
	//     component: () => import('pages/Error404.vue')
	// },
	// {
	//     path: '/Mail',
	//     component: () => import('layouts/Mail.vue')
	// },
	// {
	//     path: '/Maintenance',
	//     component: () => import('pages/Maintenance.vue')
	// },
	// {
	//     path: '/Pricing',
	//     component: () => import('pages/Pricing.vue')
	// },
	// {
	//     path: '/Login-1',
	//     component: () => import('pages/Login-1.vue')
	// },
	// {
	//     path: '/Lock',
	//     component: () => import('pages/LockScreen.vue')
	// },
	// {
	//     path: '/Lock-2',
	//     component: () => import('pages/LockScreen-2.vue')
	// }
];

export default routes;
