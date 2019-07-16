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
            <input type="text" placeholder="请输入您的用户名" />
          </div>
          <div class="form">
            <img src="../assets/Login_wpd.png" alt />
            <input type="text" placeholder="请输入登入密码" />
          </div>
          <div class="form1">
            <label>
              <el-checkbox v-model="checked">记住用户名</el-checkbox>
            </label>
            <a href>忘记密码？</a>
          </div>

          <div class="but">登入</div>

          <div class="but1">注册</div>
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
  height: 54vh;
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