<template>
  <div class="withdrawal">
    <headWoke></headWoke>
    <div class="mian">
      <dir class="banxin">
        <navList :cities="2"></navList>
        <div class="wallet" v-if="num==0">
          <div class="title">修改资料</div>
          <div class="wallet_data">
            <div class="wallet_list">头像</div>
            <img :src="imgBase64" alt />
            <div class="wallet_btn">
              <form id="upload" enctype="multipart/form-data" method="post">
                <input
                  name="upfile"
                  class="ggg"
                  id="upfile"
                  type="file"
                  @change="changeImage($event)"
                  ref="inputer"
                  accept="image/*"
                />
              </form>
              <label for="upfile">修改头像</label>
            </div>
          </div>
          <div class="wallet_data">
            <div class="wallet_list">用户名</div>
            <div class="wallet_num">{{user.NickName}}</div>
            <div class="wallet_btn" @click="handNum($event)" data-index="1">修改用户名</div>
          </div>
          <!-- <div class="wallet_data">
            <div class="wallet_list">邮箱地址</div>
            <div class="wallet_num">12345678964@qq.com</div>
            <div class="wallet_btn">
              修改邮箱
            </div>
          </div>-->
          <div class="wallet_data">
            <div class="wallet_list">手机号码</div>
            <div class="wallet_num">+86 {{tel}}</div>
            <div class="wallet_btn" @click="handNum($event)" data-index="2">修改手机号</div>
          </div>
          <div class="wallet_data">
            <div class="wallet_list">登录密码</div>
            <div class="wallet_num">********</div>
            <div class="wallet_btn" @click="handNum($event)" data-index="3">修改密码</div>
          </div>
        </div>
        <!-- 修改用户名 -->
        <div class="wallet" v-if="num==1">
          <div class="title1" @click="handReturn">修改用户名</div>
          <div class="wallet_wallet">
            <span>用户名</span>
            <div class="wallet_send">{{user.NickName}}</div>
          </div>
          <div class="wallet_wallet">
            <span>输入新用户名</span>
            <div class="wallet_send">
              <input type="text" v-model="userName" />
            </div>
          </div>
          <div class="wallet_btn1" @click="handUserName">确定修改</div>
        </div>
        <!-- 修改邮箱 -->
        <!-- <div class="wallet">
          <div class="title1">修改邮箱</div>
          <div class="wallet_wallet">
            <span> 请输邮箱</span>
            <div class="wallet_send">
              138****4528
            </div>
          </div>
          <div class="wallet_wallet">
            <span>新邮箱</span>
            <div class="wallet_send">
              <input type="text">
            </div>
          </div>
          <div class="wallet_btn1">
            确定修改
          </div>
        </div>-->
        <!-- 修改手机号 -->
        <div class="wallet" v-if="num==2">
          <div class="title1" @click="handReturn">原手机号</div>
          <div class="wallet_wallet" v-if="telFalse == 1">
            <span>请输原手机验证码</span>
            <div class="wallet_send">{{tel}}</div>
          </div>
          <div class="wallet_wallet" v-if="telFalse == 1">
            <span>手机验证码</span>
            <div class="wallet_send">
              <input type="text" maxlength="11" v-model="NewCellPhone" />
              <div class="wallet_send_btn" @click="Verification">获取验证码</div>
            </div>
          </div>
          <div class="wallet_wallet" v-if="telFalse == 0">
            <span>输入新手机号码</span>
            <div class="wallet_send">
              <input type="text" v-model="newTel" />
            </div>
          </div>
          <div class="wallet_wallet" v-if="telFalse == 0">
            <span>新手机验证码</span>
            <div class="wallet_send">
              <input type="text" v-model="NewCellPhone" />
              <div class="wallet_send_btn" @click="Verification1">获取验证码</div>
            </div>
          </div>
          <div class="wallet_btn1" v-if="telFalse == 1" @click="Nextstep">下一步</div>
          <div class="wallet_btn1" @click="Determine" v-if="telFalse == 0">确定修改</div>
        </div>
        <!-- 修改密码 -->
        <div class="wallet" v-if="num==3">
          <div class="title1" @click="handReturn">修改密码</div>
          <div class="wallet_wallet">
            <span>原密码</span>
            <div class="wallet_send">**********</div>
          </div>
          <div class="wallet_wallet">
            <span>请输入原密码</span>
            <div class="wallet_send">
              <input type="text" v-model="psw" />
            </div>
          </div>
          <div class="wallet_wallet">
            <span>请输入新密码</span>
            <div class="wallet_send">
              <input type="text" v-model="psw1" />
            </div>
          </div>
          <div class="wallet_btn1" @click="handpsw">确定修改</div>
        </div>
      </dir>
    </div>
    <tail></tail>
  </div>
</template>
<script>
import headWoke from "../../common/header.vue";
import navList from "../../common/navList.vue";
import tail from "../../common/tail.vue";
export default {
  components: {
    headWoke,
    navList,
    tail
  },
  data() {
    return {
      tel: "",
      tel1: "",
      NewCellPhone: "",
      telFalse: 1,
      newTel: "",
      user: [],
      num: 0,
      imgBase64: require("../../assets/xia.png"),
      psw: "",
      psw1: "",
      userName: ""
    };
  },
  methods: {
    Determine: function() {
      this.modifyMobile();
    },
    Nextstep: function() {
      // 下一步
      var UserTel = localStorage.getItem("UserTel");
      this.tel1 = UserTel;
      this.VerificationCode();
    },
    Verification: function() {
      // 获取验证码
      if (this.telFalse == 1) {
        var UserTel = localStorage.getItem("UserTel");
        this.tel1 = UserTel;
      }
      let params = this.qs.stringify({
        action: "GetAuthCodeMima",
        Tel: this.tel1
      });
      var url = "http://192.168.1.188:8035/API/GetCode.ashx";
      this.axios.post(url, params).then(res => {
        console.log(res);
      });
    },
    Verification1: function() {
      // 获取验证码

      let params = this.qs.stringify({
        action: "GetAuthCodeMima",
        Tel: this.newTel
      });
      var url = "http://192.168.1.188:8035/API/GetCode.ashx";
      this.axios.post(url, params).then(res => {
        console.log(res);
      });
    },
    VerificationCode: function() {
      // 验证验证码
      console.log("验证验证码");
      let params = this.qs.stringify({
        action: "ExistAuthCode",
        Tel: this.tel1,
        Code: this.NewCellPhone
      });
      var url = "http://192.168.1.188:8035/API/GetCode.ashx";
      this.axios.post(url, params).then(res => {
        console.log(res);
        if (res.data.Result == true) {
          this.NewCellPhone = "";
          this.$message({
            message: "验证成功",
            type: "success"
          });
          this.telFalse = 0;
        } else {
          this.$message.error("验证码填写错误");
        }
      });
    },
    modifyMobile: function() {
      var UserId = localStorage.getItem("UserId");
      console.log(this.NewCellPhone, this.tel1, this.newTel);
      let params = this.qs.stringify({
        action: "EditTel",
        Code: this.NewCellPhone,
        Tel: this.tel1,
        EditTel: this.newTel
      });
      var url = "http://192.168.1.188:8035/API/GetUserData.ashx";
      this.axios.post(url, params).then(res => {
        console.log(res);
      });
    },
    Information: function() {
      var UserId = localStorage.getItem("UserId");
      let params = this.qs.stringify({
        action: "withdrawIndex",
        userid: UserId
      });
      var url = "http://192.168.1.188:8035/API/GetUserData.ashx";
      this.axios.post(url, params).then(res => {
        console.log(res);
        this.user = res.data.Result;
      });
    },
    handNum: function(e) {
      this.num = e.target.dataset.index;
      console.log(e.target.dataset.index);
    },
    handReturn() {
      this.num = 0;
    },
    changeImage: function() {
      // 文件预览
      var _this = this;
      var event = event || window.event;
      var file = event.target.files[0];
      reader.onload = function(e) {
        _this.imgBase64 = e.target.result;
      };
      reader.readAsDataURL(file);

      
      var reader = new FormData();
      reader.append("name", file);
      this.handshangc(reader);
    },
    handshangc: function(reader) {
      // 文件上传
      var url = "http://192.168.1.188:8035/API/FileUpLoad.ashx";
      this.axios.post(url, reader).then(res => {
        console.log(res);
      });
    },

    modifyUser: function() {
      var UserId = localStorage.getItem("UserId");
      console.log(this.user);
      // let params = this.qs.stringify({
      //   action: 'Registe',
      //   UserName: UserId,
      //   NickName: ''
      // });
      // var url = "http://192.168.1.188:8035/API/FileUpLoad.ashx";
      // this.axios.post(url, params).then(res => {
      //   console.log(res);
      //   this.user = res.data.Result
      // });
    },
    handpsw: function() {
      // 修改密码
      var UserId = localStorage.getItem("UserId");
      let params = this.qs.stringify({
        action: "EditPwd",
        userid: UserId,
        pwd: this.psw,
        editpwd: this.psw1
      });
      var url = "http://192.168.1.188:8035/API/GetUserData.ashx";
      this.axios.post(url, params).then(res => {
        console.log(res);
        if (res.data.Result == "修改成功") {
          this.NewCellPhone = "";
          this.$message({
            message: "修改成功",
            type: "success"
          });
          this.telFalse = 0;
        } else {
          this.$message.error("修改失败");
        }
      });
    },
    handUserName: function() {
      var UserId = localStorage.getItem("UserId");
      let params = this.qs.stringify({
        action: "Registe",
        userid: UserId,
        NickName: this.userName
      });
      var url = "http://192.168.1.188:8035/API/GetUserData.ashx";
      this.axios.post(url, params).then(res => {
        console.log(res);
        if (res.data.Result == "1") {
          this.NewCellPhone = "";
          this.$message({
            message: "修改成功",
            type: "success"
          });
          this.telFalse = 0;
        } else {
          this.$message.error("修改失败");
        }
      });
    }
  },
  watch: {},
  created() {
    var UserTel = localStorage.getItem("UserTel");
    var tel = "" + UserTel;
    var tel1 = tel.substr(0, 3) + "****" + tel.substr(7);
    this.tel = tel1;
    this.Information();
  }
};
</script>
<style>
body {
  background: #f1efee;
}

.mian {
  margin-top: 30px;
}
.mian .banxin {
  display: flex;
}
.ggg {
  position: absolute;
  left: -9999px;
}
.file {
  width: 100px;
}
.wallet {
  flex: 1;
  margin-left: 15px;
  padding: 0 20px;
  background: #fff;
  padding-bottom: 465px;
  position: relative;
}
.wallet .title {
  width: 100%;
  height: 80px;
  font-size: 32px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 80px;
  border-bottom: 1px solid #f1efee;
  margin-bottom: 30px;
}
.wallet .title1 {
  width: 100%;
  height: 80px;
  font-size: 32px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 80px;
  border-bottom: 1px solid #f1efee;
  background-image: url("../../assets/left.png");
  background-size: 17px 28px;
  background-repeat: no-repeat;
  background-position: 0 27px;
  text-indent: 40px;
}
.wallet .wallet_data {
  display: flex;
  justify-content: space-between;
}
.wallet .wallet_data .wallet_list {
  font-size: 16px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  width: 100px;
  text-align: right;
  line-height: 76px;
}
.wallet .wallet_data img {
  width: 75px;
  height: 75px;
}
.wallet .wallet_data .wallet_num {
  font-size: 16px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(110, 110, 110, 1);
  line-height: 75px;
}
.wallet .wallet_data .wallet_btn {
  width: 100px;
  height: 28px;
  background: rgba(91, 173, 242, 1);
  border-radius: 8px;
  text-align: center;
  line-height: 28px;
  font-size: 16px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  margin-top: 24px;
}

/* 修改账号密码CSS */
.wallet .wallet_wallet {
  display: flex;
  margin-bottom: 10px;
}
.wallet .wallet_wallet span {
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(76, 73, 72, 1);
  height: 50px;
  line-height: 50px;
  width: 287px;
  text-align: right;
}
.wallet .wallet_wallet .wallet_send {
  line-height: 50px;
  height: 50px;
  margin-left: 20px;
  position: relative;
}
.wallet .wallet_wallet .wallet_send input {
  width: 300px;
  height: 50px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(219, 219, 218, 1);
  border-radius: 5px;
}
.wallet .wallet_wallet .wallet_send .wallet_send_btn {
  width: 121px;
  height: 52px;
  border-radius: 0 5px 5px 0;
  position: absolute;
  right: 0;
  top: 0;
  text-align: center;
  line-height: 52px;
  background: rgba(37, 143, 252, 0.3);
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(76, 73, 72, 1);
}
.wallet_btn1 {
  position: absolute;
  width: 300px;
  height: 50px;
  background: rgba(37, 143, 252, 1);
  border-radius: 5px;
  top: 438px;
  left: 326px;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
}
</style>


                            


                        