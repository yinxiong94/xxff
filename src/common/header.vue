<template>
  <div id="header">
    <!-- 头部 -->
    <div class="banxin">
      <div class="nav">
        <img src="../assets/logo.png" alt />

        <div class="nav_li" v-for="(item, index) in list" :key="item.id">
          <p
            :data-id="item.id"
            @click="Jump($event,index)"
            :class="index==id?'blue':''"
          >{{item.name}}</p>
        </div>

        <div class="nav_right">
          <div class="notice">
            <img src="../assets/notice.png" alt />
            <div>1</div>
          </div>
          <img src="../assets/tx.png" alt />
        </div>

        <div class="dengruzucv">
          <div class="enter" @click.stop="doThis">
            <img src="../assets/dengru.png" alt />
            <span>登入</span>
          </div>
          <div class="register" @click.stop="register">注册</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      list: [
        { id: 0, name: "主页" },
        { id: 1, name: "套餐购买" },
        { id: 2, name: "发布" },
        { id: 3, name: "我的应用" },
        { id: 4, name: "个人中心" }
      ],
      index: 0,
      id: 0
    };
  },
  created() {},
  beforeUpdate() {},
  methods: {
    Jump(e, index) {
      this.index = index;
      this.id = parseInt(e.target.dataset.id);
      console.log(this.index, this.id);
      this.index == 0
        ? this.$router.push({ path: "/" })
        : this.index == 1 && this.id == 1
        ? this.$router.push({ path: "/pirce" })
        : this.index == 2 && this.id == 2
        ? this.$router.push({ path: "/release" })
        : this.index == 3 && this.id == 3
        ? this.$router.push({ path: "/adhibition" })
        : this.$router.push({ path: "/withdrawal" });
    },

    doThis() {
      this.$router.push({ path: "/Login" });
    },

    register(){
      this.$router.push({path:'/register'})
    }
  }
};
</script>

<style>
.header {
  position: relative;
}
.dengruzucv {
  position: absolute;
  right: 151px;
  top: 18px;
  display: flex;
  display: flex;
  align-items: center;
}
.enter {
  width: 84px;
  height: 32px;
  border: 1px solid rgba(51, 51, 51, 1);
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.enter > img {
  margin-right: 10px;
}
.register {
  margin-left: 10px;
}
.nav {
  display: flex;
}
.blue {
  color: #258ffc;
}
.nav > img {
  width: 178px;
  height: 56px;
  margin-top: 7px;
}
.nav .nav_li {
  flex: 1;
  display: flex;
  margin-left: 93px;
  justify-content: space-between;
  margin-top: 25px;
}
.nav .nav_li p {
  font-size: 20px;
  height: 20px;
  width: 80px;
  line-height: 20px;
  cursor: pointer;
}
.nav .nav_right {
  width: 184px;
  display: flex;
}
.nav .nav_right .notice {
  width: 40px;
  height: 32px;
  position: relative;
  margin-left: 112px;
  margin-top: 17px;
}
.nav .nav_right > img {
  height: 50px;
  margin-top: 9px;
  margin-left: 25px;
}
.nav .nav_right .notice img {
  width: 21px;
  height: 24px;
  position: absolute;
  bottom: 0;
  left: 38%;
  transform: translateX(-50%);
}
.nav .nav_right .notice div {
  width: 18px;
  height: 18px;
  position: absolute;
  top: 0;
  right: -20px;
  background: rgba(37, 143, 252, 1);
  border-radius: 50%;
  color: #fff;
  text-align: center;
  line-height: 18px;
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
}
.banxin {
  width: 100%;
  min-width: 1200px;
  max-width: 1200px;
  margin: 0 auto;
}

a {
  text-decoration: none;
  color: #000000;
}
#header {
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.21);
  background: #fff;
  height: 73px;
}
</style>

