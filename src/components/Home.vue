<template>
  <div class="container">
    <div class="cont_bg">
      <div class="cont_text">
        <span class="cont_span1">国内最全面的APP分发服务商</span>
        <span class="cont_span2">小熊一键分发</span>
        <span class="cont_span3">超过60万个APP通过小熊分发生成</span>
      </div>
      <div class="cont_sk_item_lk">
        <div class="lazyimg">
          <img src="../assets/fabu.png" alt />
          <div class="lazyimg_loaded">
            <p class="lazyimg_text">应用发布</p>
            <p class="icon"></p>
            <p class="lazyimg_text1">
              将安卓和苹果APP上传至一舟分发，就可以
              获得下载链接和二维码
            </p>
          </div>
        </div>

        <div class="lazyimg">
          <img src="../assets/neiche.png" alt />
          <div class="lazyimg_loaded">
            <p class="lazyimg_text">内测应用</p>
            <p class="icon"></p>
            <p class="lazyimg_text1">
              将安卓和苹果APP上传至一舟分发，就可以
              获得下载链接和二维码
            </p>
          </div>
        </div>

        <div class="lazyimg">
          <img src="../assets/pingtai.png" alt />
          <div class="lazyimg_loaded">
            <p class="lazyimg_text">小熊分发</p>
            <p class="icon"></p>
            <p class="lazyimg_text1">
              将安卓和苹果APP上传至一舟分发，就可以
              获得下载链接和二维码
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="cont_body_bg">
      <div class="cont_body_bg_cheng">
        <p class="mod_price_text">一键分发APP</p>
        <p class="mod_price_text1">ETPROXYFRATURES</p>
      </div>
      <div class="cont_body_bg_but">立即发布</div>
    </div>
    <div class="cont_body_bg1">
        <div class="slider_next">
            <p>发布价格</p>
            <p>ETAGENTSMAKEWORKEASIER</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        
    };
  }
};
</script>

<style>
body {
  margin: 0 !important;
}
.cont_bg {
  background: url("../assets/shouebeij.png") no-repeat;
  background-size: 100% 100%;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.cont_text {
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  height: 250px;
  margin-top: 120px;
}
.cont_text .cont_span1 {
  font-size: 38px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(235, 252, 255, 1);
}
.cont_text .cont_span2 {
  font-size: 60px;
  font-family: MicrosoftYaHei-Bold;
  font-weight: bold;
  color: rgba(252, 253, 254, 1);
}

.cont_text .cont_span3 {
  font-size: 15px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(252, 253, 254, 1);
}

.cont_sk_item_lk {
  width: 60%;
  height: 150px;
  background: #fff;
  position: absolute;
  top: 570px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.cont_body_bg {
  background: url("../assets/shouye_02.png") no-repeat;
  background-size: 100% 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cont_sk_item_lk .lazyimg {
  display: flex;
  width: 30%;
}
.cont_sk_item_lk .lazyimg img {
  width: 39px;
  height: 37px;
  margin-right: 10px;
}

.lazyimg_text {
  color: rgba(51, 51, 51, 1);
  font-size: 15px;
  font-weight: bold;
}
.lazyimg_text1 {
  color: #333333;
  font-size: 10px;
}
.icon {
  width: 50px;
  border-bottom: 3px solid #5badf2;
  border-radius: 3px;
  margin: 5px 0;
}
p {
  margin: 0;
  padding: 0;
}

.cont_body_bg .cont_body_bg_cheng .mod_price_text {
  margin-top: 50px;
  color: #5f616d;
  font-size: 30px;
}
.cont_body_bg .cont_body_bg_cheng .mod_price_text1 {
  color: #5f616d;
  font-family: ArialMT;
  font-size: 10px;
}

.cont_body_bg_cheng {
  height: 500px;
}

.cont_body_bg .cont_body_bg_but {
  width: 150px;
  height: 30px;
  border: 1px solid rgba(58, 153, 253, 1);
  color: #348efe;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cont_body_bg1{
    background: url("../assets/shouyebeijn5.png") no-repeat;
    background-size: 100% 100%;
    height: 600px;
}

.cont_body_bg1 .slider_next{
    color: #fff;
}

</style>