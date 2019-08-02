<template>
  <div id="header" class="header">
    <!-- 头部 -->
    <div class="banxin">
      <div class="nav">
        <router-link to="/">
          <img src="../assets/logo.png" alt />
        </router-link>
        <div class="nav_li" v-for="(item, index) in list" :key="item.id">
          <p
            :data-id="item.id"
            @click="Jump($event,index)"
            :class="index==id?'blue':''"
          >{{item.name}}</p>
        </div>
        <div class="nav_right" v-if="isshow">
          <div class="notice">
            <img src="../assets/notice.png" alt />
            <div>{{sum || 0}}</div>
          </div>
          <div>
            <!-- <img :src="UserImg" alt /> -->
            <img
              :src="list1.UserImg"
              alt
              width="50px"
              height="50px"
              style="margin-top:10px;margin-left:30px;border-radius: 50%"
              @click="show"
            />
            <div class="xl" v-if="isshow2">
              <div style="padding-bottom: 10px;border-bottom: 1px solid #ccc;width: 100%">
                <img :src="list1.UserImg" alt style="width: 66px;height: 66px;margin-top: 15px;border-radius: 50%" />
                <p style="position: absolute;top:34px;left: 90px;line-height: 60px;font-size: 28px;">{{list1.NickName}}</p>
              </div>
              <div class="tx">
                <img src="../assets/ye.png" alt />
                <div style="width:100%;margin-top: 10px;font-size:16px;">
                  余额￥
                  <span style="font-size:16px;">{{list1.Price.toFixed(2)}}</span>
                </div>
              </div>
              <div class="tx">
                <img src="../assets/sz.png" alt style="width:21px;height:21px" />
                <div style="width:100%;margin-top: 10px;font-size:16px;">账户设置</div>
              </div>
              <div class="tx">
                <img src="../assets/tz.png" alt style="width:18px;height:21px" />
                <div style="width:100%;margin-top: 10px;font-size:16px;">
                  通知中心
                  <!-- <span style="font-size:16px;">0.00</span> -->
                </div>
              </div>
              <div class="tx">
                <img src="../assets/tc.png" alt style="width:22px;height:18px" />
                <router-link to>
                  <div style="width:100%;margin-top: 10px;font-size:16px;" @click="exit">退出</div>
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <div class="dengruzucv" v-if="isshow1">
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
  props: ["coou"],
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
      id: 0,
      UserImg: "",
      isshow: false,
      isshow1: true,
      isshow2: false,
      list1: [],
      sum:""
    };
  },
  created() {
    this.getxx();
    this.getuser();
    this.index = this.coou;
    this.id = this.coou;
    console.log(this.coou);
    this.UserImg = localStorage.getItem("UserImg");
    if (!localStorage.getItem("UserId")) {
      (this.isshow1 = true), (this.isshow = false);
    } else {
      (this.isshow1 = false), (this.isshow = true);
    }
  },
  beforeUpdate() {},
  methods: {
    Jump(e, index) {
      this.index = index;
      this.id = parseInt(e.target.dataset.id);
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

    register() {
      this.$router.push({ path: "/register" });
    },

    gohome() {
      this.$router.push({ path: "/" });
    },

    show() {
      if (this.isshow2 == false) {
        this.isshow2 = true;
      } else {
        this.isshow2 = false;
      }
    },

    exit() {
      localStorage.clear();
      location.reload();
    },

    // 获取用户信息
    getuser() {
      let userid = localStorage.getItem("UserId");
      let url = "http://192.168.1.188:8035/API/GetUserData.ashx";
      let postData = this.qs.stringify({
        action: "withdrawIndex",
        userid: userid
      });
      this.axios.post(url, postData).then(res => {
        console.log(res)
        this.list1 = res.data.Result;
      });
    },

    // 消息列表
    getxx(){
      var sum;
      let UserId= localStorage.getItem("UserId");
      let url="http://192.168.1.188:8035/API/GetUserData.ashx";
      let postData=this.qs.stringify({
            action:"Xiaoxi",
            UserId:UserId
      })
      this.axios.post(url,postData).then(res=>{
        for(var i=0;i<res.data.Result.length;i++){
          if(res.data.Result[i].Num==0){
              sum+=1
          }
        }
        this.sum=sum
      })
    }
  }
};
</script>

<style>
.header {
  /* position: fixed; */
  z-index: 100000;
  width: 100%
}
.tx {
  display: flex;
}
.tx img {
  width: 26px;
  height: 22px;
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
}
.xl {
  position: absolute;
  background: url("../assets/xl.png");
  padding: 15px;
  width: 226px;
  box-sizing: border-box;
  height: 325px;
  margin-left: -58px;
  z-index: 1000;
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
  border-radius: 50%;
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

