<template>
  <div class="withdrawal">
    <headWoke></headWoke>
    <div class="mian">
      <dir class="banxin">
        <navList></navList>
        <!-- <div class="wallet">
          <div class="title">修改资料</div>
          <div class="wallet_data">
            <div class="wallet_list">头像</div>
            <img src="../../assets/nav_syuan2x.png"
                 alt="">
            <div class="wallet_btn">
              修改头像
            </div>
          </div>
          <div class="wallet_data">
            <div class="wallet_list">用户名</div>
            <div class="wallet_num">123456789</div>
            <div class="wallet_btn">
              修改用户名
            </div>
          </div>
          <div class="wallet_data">
            <div class="wallet_list">邮箱地址</div>
            <div class="wallet_num">12345678964@qq.com</div>
            <div class="wallet_btn">
              修改邮箱
            </div>
          </div>
          <div class="wallet_data">
            <div class="wallet_list">手机号码</div>
            <div class="wallet_num">+86 136******36</div>
            <div class="wallet_btn">
              修改手机号
            </div>
          </div>
          <div class="wallet_data">
            <div class="wallet_list">登录密码</div>
            <div class="wallet_num">********</div>
            <div class="wallet_btn">
              修改密码
            </div>
          </div>
        </div> -->

        <!-- 修改用户名 -->
        <!-- <div class="wallet">
          <div class="title">修改用户名</div>
          <div class="wallet_wallet">
            <span> 请输原手机验证码</span>
            <div class="wallet_send">
              138****4528
            </div>
          </div>
          <div class="wallet_wallet">
            <span>原用户名</span>
            <div class="wallet_send">
              <input type="text">
              <div class="wallet_send_btn">获取验证码</div>
            </div>
          </div>
          <div class="wallet_wallet">
            <span>输入新手机号码</span>
            <div class="wallet_send">
              <input type="text">
            </div>
          </div>
          <div class="wallet_wallet">
            <span>新手机验证码</span>
            <div class="wallet_send">
              <input type="text">
              <div class="wallet_send_btn">获取验证码</div>
            </div>
          </div>
          <div class="wallet_btn1">
            确定修改
          </div>
        </div> -->
        <!-- 修改邮箱 -->
        <!-- <div class="wallet">
          <div class="title">修改邮箱</div>
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
        </div> -->
        <!-- 修改手机号 -->
        <!-- <div class="wallet">
          <div class="title">原手机号</div>
          <div class="wallet_wallet">
            <span> 请输原手机验证码</span>
            <div class="wallet_send">
              138****4528
            </div>
          </div>
          <div class="wallet_wallet">
            <span>新手机验证码</span>
            <div class="wallet_send">
              <input type="text">
              <div class="wallet_send_btn">获取验证码</div>
            </div>
          </div>
          <div class="wallet_wallet">
            <span>输入新手机号码</span>
            <div class="wallet_send">
              <input type="text">
            </div>
          </div>
          <div class="wallet_wallet">
            <span>新手机验证码</span>
            <div class="wallet_send">
              <input type="text">
              <div class="wallet_send_btn">获取验证码</div>
            </div>
          </div>
          <div class="wallet_btn1">
            确定修改
          </div>
        </div> -->
        <!-- 修改密码 -->
        <div class="wallet">
          <div class="title">修改密码</div>
          <div class="wallet_wallet">
            <span> 请输入密码</span>
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
        </div>
      </dir>
    </div>
  </div>
</template>
<script>
import headWoke from '../../common/header.vue'
import navList from '../../common/navList.vue'
export default {
  components: {
    headWoke,
    navList
  },
  data () {
    return {

    }
  },
  methods: {

  },
  watch: {

  }
}
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


                            


                        