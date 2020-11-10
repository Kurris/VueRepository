import vueRouter from "vue-router";
import vue from "vue";
import Home from "../components/Home.vue";
import About from "../components/About.vue";


vue.use(vueRouter);

const routes = [{
        path: "",
        redirect: "/Home"
    },
    {
        path: "/Home",
        component: Home
    },
    {
        path: "/About",
        component: About
    }
];

const router = new vueRouter({
    routes,
    mode: "history",
    linkActiveClass: "active"
});

export default router;