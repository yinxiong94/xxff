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
            <img src="../assets/xiaohongs.png" alt />
            <div class="cont_item_top1_title1">
              <span>小红书app</span>
              <p>
                <img src="../assets/pingg.png" alt />
                <span>适用于苹果</span>
              </p>
            </div>
          </div>
          <div class="cont_item_top1_title2">
            <div class="cont_item_top1_title1_list cont_item_top1_title1_list_bor">
              <span>过期时间</span>
              <span>2019-5-10</span>
            </div>
            <div class="cont_item_top1_title1_list cont_item_top1_title1_list_bor">
              <span>下载地址</span>
              <span>2019-5-10</span>
            </div>
            <div class="cont_item_top1_title1_list">
              <span>下载地址</span>
              <span>下载更多尺寸</span>
            </div>
          </div>
        </div>
        <div class="cont_item_body">
          <p class="cont_item_body_title">版本信息</p>
          <div class="cont_item_body_data">
            <div class="cont_item_body_data_title">
              <p>版本</p>
              <p>大小</p>
              <p>下载次数</p>
              <p>更新时间</p>
              <p>操作</p>
            </div>
            <div class="cont_item_body_data_title1">
              <p>1.0.3(当前版本)</p>
              <p>4.4MB</p>
              <p>1</p>
              <p>2019-4-11 11:22</p>
              <p class="cont_item_body_data_title1_p">
                <img src="../assets/chakan.png" alt />
                <img src="../assets/bianji.png" alt />
                <img src="../assets/shangchu.png" alt />
              </p>
            </div>
          </div>
        </div>
        <div class="cont_item_tail">
             <p class="cont_item_body_title">下载显示</p>
             <div class="cont_item_tail_body">
                 <div class="cont_item_tail_body_data">
                     <p class="Icon"></p>
                     <div class="cont_item_tail_body_list">
                         <div class="cont_item_tail_body_list_text">
                            <p>584</p>
                            <p>时长包</p>
                         </div>
                         <div class="cont_item_tail_body_list_text1">
                             <p>剩余584/1000</p>
                         </div>
                     </div>
                 </div>

                  <div class="cont_item_tail_body_data">
                     <p class="Icon1"></p>
                     <div class="cont_item_tail_body_list">
                         <div class="cont_item_tail_body_list_text">
                            <p>584</p>
                            <p>次数包</p>
                         </div>
                         <div class="cont_item_tail_body_list_text1">
                             <p>剩余584/5000</p>
                         </div>
                     </div>
                 </div>
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
  min-height: 500px;
  min-width: 1000px;
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
  box-shadow: 0px 0px 8px 0px rgba(179, 179, 179, 0.7);
}
.cont_item_top1_title {
  background: #eef7fe;
  height: 50%;
}
.cont_item_top1_title {
  display: flex;
  align-items: center;
}
.cont_item_top1_title > img {
  width: 50px;
  height: 50px;
  margin: 0 20px 0 40px;
}

.cont_item_top1_title1 > span {
  color: #333333;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 5px;
  display: inline-block;
}
.cont_item_top1_title1 > p > img {
  width: 10px;
  height: 13px;
}
.cont_item_top1_title1 > p > span {
  color: #9e9e9e;
  font-size: 10px;
}
.cont_item_top1_title2 {
  height: 50%;
  display: flex;
}
.cont_item_top1_title1_list_bor {
  border-right: 1px solid #aaaaaa;
}
.cont_item_top1_title1_list {
  width: 33.333%;
  height: 100%;
  color: #aaaaaa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 10px;
}
.cont_item_body {
  margin-top: 30px;
}
.cont_item_body_title {
  font-weight: bold;
  margin-right: 10px;
  margin-bottom: 10px;
}
.cont_item_body_data {
  box-shadow: 0px 0px 8px 0px rgba(179, 179, 179, 0.7);
  height: 200px;
}
.cont_item_body_data_title {
  height: 30px;
  background: #f0f4fc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  color: #6e6e6e;
  font-size: 10px;
  font-weight: bold;
}
.cont_item_body_data_title > p {
  width: 20%;
  display: flex;
  justify-content: center;
}
.cont_item_body_data_title1 > p {
  width: 20%;
  display: flex;
  justify-content: center;
}
.cont_item_body_data_title1_p {
  justify-content: space-around !important;
}
/* .cont_item_body_data_title1_p>img{
    width: 10px;
    height: 15px;
}
.cont_item_body_data_title1_p>img:nth-child(1){
    width: 20px !important;
    height: 10px !important;
} */
.cont_item_body_data_title1 {
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  color: #6e6e6e;
  font-size: 10px;
  font-weight: bold;
  border-bottom: 1px solid #dedede;
}
.cont_item_tail{
    margin-top: 30px;
}
.cont_item_tail_body{
     height: 80px;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.cont_item_tail_body_data{
    box-shadow:0px 0px 8px 0px rgba(179,179,179,0.7);
    height: 100%;
    width: 40%;
}
.Icon{
    background: #5BADF2;
    height: 10px;
}
.cont_item_tail_body_list{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 90%;
}
.cont_item_tail_body_list_text{
    color: #B3B3B3;
}
.cont_item_tail_body_list_text>p:nth-child(1){
    font-size: 20px;
}
.cont_item_tail_body_list_text>p:nth-child(2){
    font-size: 15px;
}
.cont_item_tail_body_list_text1{
    color: #7AB7EB;
    font-size: 10px;
}
.Icon1{
    background: #6ECFCF;
     height: 10px;
}
</style>