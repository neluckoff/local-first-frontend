import App from '@/app/App.vue';
import { Router } from '@/app/providers/router';
import { createPinia } from 'pinia';
import { Quasar } from 'quasar';
import quasarIconSet from 'quasar/icon-set/svg-eva-icons';
import quasarLang from 'quasar/lang/ru';
import { createApp } from 'vue';

const app = createApp(App);
const pinia = createPinia();

app.use(Quasar, {
	plugins: {},
	lang: quasarLang,
	iconSet: quasarIconSet,
});

app.use(pinia);
app.use(Router);

export default app;
