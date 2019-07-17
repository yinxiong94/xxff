<template>
  <div id="header">
    <!-- 头部 -->
    <div class="banxin">
      <div class="nav">
        <img src="../assets/logo.png"
             alt="" />
        <div class="nav_li">
          <p>主页</p>
          <p>套餐购买</p>
          <p>发布</p>
          <p>我的应用</p>
          <p>个人中心</p>
        </div>
        <div class="nav_right">
          <div class="notice">
            <img src="../assets/notice.png"
                 alt="" />
            <div>1</div>
          </div>
          <img src="../assets/tx.png"
               alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header'
}
</script>

<style>
.nav {
  display: flex;
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
  line-height: 20px;
  cursor:pointer;
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
}
</style>

