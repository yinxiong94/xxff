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
import succeed from "../components/succeed";
import nothing from "../components/nothing";
import amend from "../components/amend";
import introduce from "../components/introduce";
import adhibition from "../components/adhibition";

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
    },
    {
      path: "/succeed",
      name: "succeed",
      component: succeed
    },
    {
      path: "/nothing",
      name: "nothing",
      component: nothing
    },
    {
      path: "/amend",
      name: "amend",
      component: amend
    },
    {
      path: "/introduce",
      name: "introduce",
      component: introduce
    },
    {
      path: "/adhibition",
      name: "adhibition",
      component: adhibition
    }
  ]
});
