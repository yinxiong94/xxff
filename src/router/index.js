import Vue from "vue";
import Router from "vue-router";
import Application from "../components/Application/Application";
import release from "../components/release/release";
import pirce from "../components/pirce/pirce";
import withdrawal from "../components/withdrawal/withdrawal";
import Login from "../components/Login";
import register from "../components/register";
import Home from "../components/Home";
import text from "../components/text";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/Login",
      name: "Login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: register
    },
    {
      path: "/Application",
      name: "Application",
      component: Application
    },
    {
      path: "/release",
      name: "release",
      component: release
    },
    {
      path: "/pirce",
      name: "pirce",
      component: pirce
    },
    {
      path: "/withdrawal",
      name: "withdrawal",
      component: withdrawal
    },
    {
      path: "/text",
      name: "text",
      component: text
    }
  ]
});
