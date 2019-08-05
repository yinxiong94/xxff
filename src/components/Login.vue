<template>
  <div class="login_bg">
    <div class="login_bgwhite">
      <div class="login_fangzi">
        <img class="login_fangzi_img" src="../assets/Login_fangzi.png" alt />
      </div>
      <div class="login_input">
        <div class="login_input_img">
          <img src="../assets/logo_Login.png" alt />
        </div>
        <div class="login_input_text1">
          <div class="form item-fore">
            <img src="../assets/Login_user.png" alt />
            <input type="text" placeholder="请输入您的手机号码" ref="input1" />
          </div>
          <div class="form">
            <img src="../assets/Login_wpd.png" alt />
            <input type="password" placeholder="请输入登入密码" ref="input2" />
          </div>
          <div class="form1">
            <label>
              <el-checkbox v-model="checked">记住用户名</el-checkbox>
            </label>
            <a href>忘记密码？</a>
          </div>

          <div class="but" @click.stop="login">登入</div>

          <div class="but1" @click.stop="register">注册</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true
    };
  },

  methods: {
    register() {
      this.$router.push({ path: "/register" });
    },
    /**
     * 登入
     */
    login() {
      let input1 = this.$refs.input1.value; //用户名
      let input2 = this.$refs.input2.value; //密码

      if(input1==""|| input2==""){
        this.$message.error("账号或密码不能为空");
        return
      }
      let postData = this.qs.stringify({
        action: "Login",
        Tel: input1,
        PassWord: input2
      });
      let url = "http://192.168.1.188:8035/API/GetUserData.ashx";
      this.axios.post(url, postData).then(res => {
        if (res.data.Msg !== null) {
          this.$message.error("账号或密码错误");
        } else {
          this.$message({
            message: "登入成功",
            type: "success"
          });

          // 存获取到的UserId
          localStorage.setItem("UserId", res.data.Result.UserId);
          // 存获取到的头像
          localStorage.setItem("UserImg", res.data.Result.UserImg);
          // 手机号码
          localStorage.setItem("UserTel", res.data.Result.UserTel);
         
         
         const countDown = setInterval(() => {
            this.$router.push({ path: "/" });+
             clearInterval(countDown)
          }, 2000);
          
        }
      });
    }
  }
};
</script>

<style>
body {
  margin: 0 !important;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

input {
  outline: none;
  border: none;
}

a {
  text-decoration: none;
  color: #919191;
  font-size: 8px;
}

.login_bg {
  background: url("../assets/Login_zuce.png") no-repeat;
  background-size: 100% 100%;
  height: 100vh;
  width: 100%;
  margin: 0px;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login_bg .login_bgwhite {
  background: url("../assets/login_bgwhite.png") no-repeat center;
  background-size: 52% 65%;
  width: 100%;
  height: 100vh;
  /* position: relative; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.login_bg .login_bgwhite .login_fangzi {
  width: 19%;
  margin-right: -238px;
}
.login_bg .login_bgwhite .login_fangzi .login_fangzi_img {
  width: 100%;
  height: 30vh;
}

.login_bg .login_bgwhite .login_input {
  width: 22%;
  margin-left: 300px;
}

.login_input_img > img {
  width: 306px;
  height: 75px;
  margin-top: 67px;
}
.login_input_text1 {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 43px;
}
.login_input_text1 .form,
.login_input_text1 .form1 {
  display: flex;
  align-items: center;
  width: 286px;
  border-bottom: 1px solid #eeeeee;
}

.login_input_text1 .form1 {
  border: none;
  justify-content: space-between;
  margin-top: 20px;
}
.login_input_text1 div img {
  width: 18px;
  height: 20px;
  margin-right: 20px;
  margin-bottom: 10px;
}

.login_input_text1 div input {
  margin-top: 10xp;
}

.login_input_text1 .item-fore {
  margin-bottom: 37px;
}

.login_input_text1 .form1 label {
  color: #919191;
  font-size: 10px;
}

.login_input_text1 .but {
  width: 246px;
  background: #258ffc;
  border-radius: 30px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  margin-top: 20px;
}

.login_input_text1 .but1 {
  width: 246px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #4c4c4c;
  margin-top: 20px;
}
</style>