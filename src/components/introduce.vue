<template>
  <div class="container">
    <Header></Header>
    <div class="con_item">
      <div class="con_item1">
        <div class="cont_item_top">
          <p class="cont_item_top_text">小红书APP</p>
          <p class="cont_item_top_text1">上传新版本</p>
        </div>
        <div class="cont_item_top1">
          <div class="cont_item_top1_title">
              <img src="../assets/xiaohongs.png" alt="">
              <div class="cont_item_top1_title1">
                  <span>小红书app</span>
                  <p>
                      <img src="../assets/pingg.png" alt="">
                      <span>适用于苹果</span>
                  </p>
              </div>
          </div>
          <div class="cont_item_top1_title1">

          </div>
        </div>

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
  background: #fff;
}
.con_item {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.con_item1 {
  width: 60%;
  /* border: 1px solid red; */
  height: 500px;
}
.cont_item_top {
  height: 80px;
  display: flex;
  align-items: center;
}
.cont_item_top_text {
  font-weight: bold;
  margin-right: 10px;
}
.cont_item_top_text1 {
  height: 30px;
  width: 90px;
  background: #5badf2;
  color: aliceblue;
  font-size: 15px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cont_item_top1 {
  height: 150px;
  border: 1px solid red;
}
.cont_item_top1_title {
  background: #eef7fe;
  height: 50%;
}
.cont_item_top1_title{
    display: flex;
    align-items: center;
}
.cont_item_top1_title>img{
    width: 50px;
    height: 50px;
    margin: 0 20px 0 40px;
}
.cont_item_top1_title1>span{
    color: #333333;
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 5px;
    display: inline-block;
}
.cont_item_top1_title1>p>img{
    width: 10px;
    height: 13px;
}
.cont_item_top1_title1>p>span{
    color: #9E9E9E;
    font-size: 10px;
}
</style>