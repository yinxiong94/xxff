<template>
  <div class="container">
    <Header></Header>
    <div class="cont_vessel">
      <div class="cont_vessel_bg">
        <div class="cont_vessel_text cont_vessel_flex">
          <img src="../assets/chenggon.png" alt />
          <span>提现成功</span>
        </div>
        <div class="cont_vessel_text1 cont_vessel_flex">
          <span>24小时之内会有客服联系您</span>
          <span>请认准唯一客服热线：0731-598756</span>
        </div>
      </div>
      <div class="cont_vessel_bgb">
        <div class="cont_vessel_border">
          <div class="cont_vessel_border1">
            <p>
              <span class="cont_vessel_hui">订单编号:</span>
              <span>33113213213132</span>
            </p>
            <p>
              <span class="cont_vessel_hui">金&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;额:</span>
              <span class="cont_vessel_hong">￥100</span>
            </p>
            <p>
              <span class="cont_vessel_hui">付&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;款:</span>
              <span>交易账户</span>
            </p>
            <p>
              <span class="cont_vessel_hui">交易时间:</span>
              <span>2019.9.8</span>
            </p>
            <p>
              <span class="cont_vessel_hui">预计到账:</span>
              <span>2019.9.8前</span>
            </p>
          </div>
        </div>
        <div class="cont_vessel_btn">完成</div>
      </div>
    </div>
    <Tail></Tail>
  </div>
</template>

<script>
import Header from "../common/header";
import Tail from "../common/tail";
export default {
  components: {
    Header,
    Tail
  }
};
</script>

<style>
body {
  background: rgb(218, 216, 216);
  position: relative;
}

.cont_vessel {
  margin: 20px auto;
}
.cont_vessel_bg {
  background: #0088ff;
  width: 60%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.cont_vessel_bgb {
  background: #fff;
  width: 60%;
  height: 650px;
}
.cont_vessel_text {
  margin-bottom: 20px;
}
.cont_vessel_text > span {
  font-size: 24px;
  margin-top: 10px;
}
.cont_vessel_flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
}

.cont_vessel_text1 > span {
  margin-bottom: 10px;
}
.cont_vessel_bgb {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.cont_vessel_border {
  border: 1px solid #e4e4e4;
  width: 60%;
  height: 260px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cont_vessel_border1 {
  display: flex;
  flex-direction: column; 
  justify-content: space-around;

  height: 100%;
}
.cont_vessel_btn {
  width: 180px;
  height: 50px;
  background: rgba(0, 136, 255, 1);
  border-radius: 4px;
  font-size: 20px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}

.cont_vessel_hui{
    color: rgb(168, 165, 165);
}
.cont_vessel_hong{
    color: red;
}
</style>
