import type { RouteLocationNormalized } from 'vue-router';
import _ from 'lodash';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useNavigationStore = defineStore('navigation', () => {
	const previousRoute = ref<RouteLocationNormalized>(null);
	const currentRoute = ref<RouteLocationNormalized>(null);
	const beforePreviousRoute = ref<RouteLocationNormalized>(null);

	function updatePreviousRoute(value: RouteLocationNormalized) {
		previousRoute.value = value;
	}

	function updateCurrentRoute(value: RouteLocationNormalized) {
		currentRoute.value = value;
	}

	function updateAllRoutes(from: RouteLocationNormalized, to: RouteLocationNormalized) {
		if (beforePreviousRoute.value?.fullPath !== previousRoute.value?.fullPath) beforePreviousRoute.value = _.clone(previousRoute.value);
		previousRoute.value = from;
		currentRoute.value = to;
	}

	return {
		previousRoute,
		currentRoute,
		beforePreviousRoute,
		updatePreviousRoute,
		updateCurrentRoute,
		updateAllRoutes,
	};
});
