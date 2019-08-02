import Vue from "vue";
import Router from "vue-router";
import Application from "../components/Application/Application";
import release from "../components/release/release";
import pirce from "../components/pirce/pirce";
import withdrawal from "../components/withdrawal/withdrawal";
import modify from "../components/withdrawal/modify";
import payment from "../components/withdrawal/payment";
import news from "../components/withdrawal/news";
import details from "../components/withdrawal/details";
import Overview from "../components/withdrawal/Overview";
import Login from "../components/Login";
import register from "../components/register";
import Home from "../components/Home";
import succeed from "../components/succeed";
import nothing from "../components/nothing";
import amend from "../components/amend";
import introduce from "../components/introduce";
import adhibition from "../components/adhibition";
import text from "../components/text";
import zhifubao from "../components/withdrawal/zhifubao"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        title: "首页"
      }
    },
    {
      path: "/zhifubao",
      name: "zhifubao",
      component: zhifubao,
      meta: {
        title: "支付"
      }
    },
    {
      path: "/Login",
      name: "Login",
      component: Login,
      meta: {
        title: "登入"
      }
    },
    {
      path: "/register",
      name: "register",
      component: register,
      meta: {
        title: "注册"
      }
    },
    {
      path: "/Application",
      name: "Application",
      component: Application,
      meta: {
        title: "应用发布"
      }
    },
    {
      path: "/release",
      name: "release",
      component: release,
      meta:{
        title:"发布"
      },
    },
    {
      path: "/pirce",
      name: "pirce",
      component: pirce,
      meta:{
        title:"套餐价格"
      },
    },
    {
      path: "/withdrawal",
      name: "withdrawal",
      component: withdrawal,
      meta:{
        title:"我的钱包"
      },
    },
    {
      path: "/modify",
      name: "modify",
      component: modify
    },
    {
      path: "/payment",
      name: "payment",
      component: payment
    },
    {
      path: "/news",
      name: "news",
      component: news
    },
    {
      path: "/details",
      name: "details",
      component: details
    },
    {
      path: "/Overview",
      name: "Overview",
      component: Overview
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
      path: "/text",
      name: "text",
      component: text
    },
    {
      path: "/adhibition",
      name: "adhibition",
      component: adhibition,
      meta:{
        title:"我的应用"
      },
    }
  ]
});
