import { useNavigationStore } from '@/app/providers/stores/navigation';
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
	scrollBehavior: () => ({ left: 0, top: 0 }),
	routes,
	history: createWebHistory(),
});

router.beforeEach((to, from, next) => {
	const navigationStore = useNavigationStore();
	navigationStore.updateAllRoutes(from, to);
	next();
});

export const Router = router;
