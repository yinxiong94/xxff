<template>
  <div class="navList">
    <ul>
      <li>
        账户总览
        <img src="../assets/nav1.png"
             alt="">
      </li>
      <li class="blue">
        我的钱包
        <img src="../assets/nav12.png"
             alt="">
      </li>
      <li>
        修改资料
        <img src="../assets/nav3.png"
             alt="">
      </li>
      <li>
        我的优惠券
        <img src="../assets/nav4.png"
             alt="">
      </li>
      <li>
        我的消息
        <img src="../assets/nav5.png"
             alt="">
      </li>
      <li>
        交易明细
        <img src="../assets/nav6.png"
             alt="">
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
ul,
ol {
  list-style: none;
}
.banxin {
  min-width: 1200px;
  max-width: 1200px;
  margin: 0 auto;
}
.navList {
  width: 164px;
  background: #fff;
  height: 434px;
}
.navList ul {
  display: flex;
  flex-direction: column;
}
.navList ul li {
  height: 62px;
  text-align: center;
  line-height: 62px;
  font-size: 16px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  border-bottom: 1px solid #f1efee;
  position: relative;
}
.navList ul .blue {
  background: #258ffc;
  color: #fff;
}
.navList ul li img {
  width: 37px;
  height: 37px;
  position: absolute;
  left: 2px;
  top: 11px;
}
</style>
