import Vue from 'vue';
import Router from 'vue-router';
import LoginForm from './components/LoginForm.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name:
                'Login',
            component: LoginForm,
        },
    ],
});
