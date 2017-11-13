import Vue from "vue";
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import routes from 'routes.config';
//实例VueRouter  引进各个路由 并在router中注册
var router = new VueRouter({
    routes: routes
})

export default routers