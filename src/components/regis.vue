<template>
  <div class="login_bg">
    <div class="login_bgwhite">
      <div class="login_fangzi">
        <img class="login_fangzi_img"
             src="../assets/Login_fangzi.png"
             alt />
      </div>
      <div class="login_input">
        <div class="login_input_img">
          <img src="../assets/logo_Login.png"
               alt />
        </div>
        <div class="login_input_text1">
          <!-- <div class="form item-fore">
            <img src="../assets/Login_user.png"
                 alt />
            <input type="text"
                   placeholder="请输入您的用户名"
                   ref="input1" />
            <span class="bit">*</span>
          </div> -->
          <!-- <div class="form item-fore">
            <img src="../assets/Login_wpd.png"
                 alt />
            <input type="password"
                   placeholder="请输入登入密码"
                   ref="input2" />
            <span class="bit">*</span>
          </div> -->

          <div class="form item-fore">
            <img src="../assets/shouji.png"
                 alt />
            <input type="text"
                   placeholder="请输入您的手机号码"
                   ref="input3" />
          </div>

          <div class="form item-fore">
            <img src="../assets/Login_wpd.png"
                 alt />
            <input type="text"
                   placeholder="请输入验证码"
                   ref="input4" />
            <span class="yzm"
                  @click.stop="textCode">{{code}}</span>
          </div>
          <div class="form item-fore">
            <img src="../assets/Login_wpd.png"
                 alt />
            <input type="text"
                   placeholder="请输入新密码"
                   ref="input5" />
          </div>
          <div class="but"
               @click.stop="registerpost">提交</div>
          <div class="but1"
               @click.stop="doThis">已有账号去登入</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 60, //倒计时时间
      code: "获取验证码"
    };
  },

  methods: {
    /**
     * 提交注册
     */
    registerpost () {
      // let input1 = this.$refs.input1.value; //用户名
      // let input2 = this.$refs.input2.value; //密码
      let input3 = this.$refs.input3.value; //手机号码
      let input4 = this.$refs.input4.value; //验证码
      let input5 = this.$refs.input5.value; //密码

      // if (input1 == "") {
      //   this.$message({
      //     message: "用户名不能为空",
      //     type: "warning"
      //   });
      //   return;
      // }

      // if (input2 == "") {
      //   this.$message({
      //     message: "密码不能为空",
      //     type: "warning"
      //   });
      //   return;
      // }

      if (!/^1[3-9]\d{9}$/.test(input3)) {
        this.$message({
          message: "手机号码不正确",
          type: "warning"
        });
        return;
      }
      let params = this.qs.stringify({
        action: "EditTelPwd",
        Tel: input3,
        Pwd: input5,
        Code: input4
      });
      this.axios.post('GetUserData.ashx', params).then(res => {
        console.log(res)
        if (res.data.Result==1) {
          this.$message({
            message: "修改成功",
            type: "success"
          });
          setInterval(() => {
            this.$router.push({ path: "/Login" });
          }, 2000);
        }
      });
    },

    /**
     * 获取验证码
     */
    textCode () {
      let input3 = this.$refs.input3.value; //手机号码
      if (!/^1[3-9]\d{9}$/.test(input3)) {
        this.$message({
          message: "手机号码不正确",
          type: "warning"
        });
        return;
      } else {
        this.$message({
          message: "验证码已发送请查收",
          type: "success"
        });
      }

      if (this.code !== "获取验证码") {
        this.$message({
          message: "已发送验证码",
          type: "warning"
        });
        return;
      }

      const countDown = setInterval(() => {
        if (this.count <= 0) {
          this.count = 60;
          this.code = "获取验证码";
          clearInterval(countDown);
          return;
        }
        this.count--;
        this.code =
          this.count < 10 ? `请等待0${this.count}s` : `请等待${this.count}s`;
      }, 1000);

      let params = this.qs.stringify({
        action: "GetAuthCodeMima",
        Tel: input3
      });
      this.axios.post("GetCode.ashx", params).then(res => {
        console.log(res)
        if (res.data.Msg == "此账号已被注册") {
          this.$message({
            message: "此账号已被注册",
            type: "warning"
          });
        }
      });

      // let params = { action: "GetAuthCode", Tel: input3 };
      // this.$post("", params)
      //   .then(res => {})
      //   .catch(() => console.log("promise catch err")); //捕获异常
    },

    /**跳转到登入 */
    doThis () {
      this.$router.push({ path: "/Login" });
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
  width: 200px
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
  /* height: 100vh; */
  /* position: relative; */
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.login_bg .login_bgwhite .login_fangzi {
  width: 19%;
  margin-right: -238px;
}
.login_bg .login_bgwhite .login_fangzi .login_fangzi_img {
  width: 100%;
  height: 30vh;
  /* position: absolute;
    top: 340px;
    left: 514px; */
}

.login_bg .login_bgwhite .login_input {
  width: 22%;
  height: 500px;
  margin-left: 300px;
}

.login_input_img > img {
  width: 307px;
  height: 91px;
  /* margin-top: 67px; */
}
.login_input_text1 {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 17px;
  width: 286px;
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
  /* margin-top: 20px; */
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
  margin-bottom: 20px;
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

.bit {
  color: red;
  display: inline-block;
  margin-left: 68px;
}

.yzm {
  display: inline-block;
  background: #258ffc;
  font-size: 10px;
  color: #ffffff;
  border-radius: 20px;
  width: 70px;
  height: 25px;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>


