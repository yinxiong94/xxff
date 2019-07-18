<template>
  <div class>
    <Header></Header>

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
        <p class="slider_next1">发布价格</p>
        <p class="slider_next2">ETAGENTSMAKEWORKEASIER</p>
      </div>
      <div class="stage">
        <div class="stage1" :class="curr==1?'setting':''" @click="junm($event)" data-cuur="1">
          <div class="chosen_item_tit" data-cuur="1">
            <img src="../assets/deng.png" alt data-cuur="2" />
            <p class="stage_text" data-cuur="2">180元/年</p>
            <p class="stage_text1" data-cuur="2">一天一千次分发次数</p>
          </div>
        </div>

        <div class="stage1" :class="curr==2?'setting':''" @click="junm($event)" data-curr="2">
          <div class="chosen_item_tit" data-cuur="2">
            <img src="../assets/laba.png" data-cuur="2" />
            <p class="stage_text" data-cuur="2">500元/年</p>
            <p class="stage_text1" data-cuur="2">一天五千次分发次数</p>
          </div>
        </div>

        <div class="stage1" :class="curr==3?'setting':''" @click="junm($event)" data-curr="3">
          <div class="chosen_item_tit" data-cuur="3">
            <img src="../assets/bingzhuang.png" data-cuur="3" />
            <p class="stage_text" data-cuur="3">299元/次数包</p>
            <p class="stage_text1" data-cuur="3">
              购买此次数包必须先购买时
              长包后才能使用，购买此包
              后可有两千次的分发次数
            </p>
          </div>
        </div>

        <div class="stage2">
          <div class="mod_lazyload">简单、全面、可靠</div>
          <div class="J_house1">
            <div class="J_house">
              <p class="J_house_text">用户量</p>
              <p class="J_house_text1">94,230</p>
            </div>
            <div class="J_house">
              <p class="J_house_text">每日使用量</p>
              <p class="J_house_text1">94,230</p>
            </div>
            <div class="J_house2">
              <p class="J_house_text">可用分发量</p>
              <p class="J_house_text1">94,230</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cont_body_bg2">
      <div class="SkusCell">
        <p class="mod_price_text">小熊动态</p>
        <p class="mod_price_text1">HENGXINGDYNAMICS</p>
      </div>
      <div class="SkusCell_img">
        <div class="copyright_links">
          <div class="mod_copyright_auth_ico">
            <p class="copyright_links_text">30</p>
            <p class="copyright_links_text1">2019.12.23</p>
          </div>
          <img src="../assets/dongt1.png" alt />
          <div class="mod_copyright_auth_ico1 mod_copyright_auth_ico2">
            <p class="mod_copyright_auth_ico1_text">
              <span
                style=" width: 70%; display: block;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  font-size:15px;"
              >我是标题杀菌灯拉数据来看大家阿斯利康大家啊三六九等</span>
            </p>
            <p class="mod_copyright_auth_ico1_text2">我是标题杀菌灯拉数据来看大家阿斯利康大家啊三六九等</p>
            <p class="mod_copyright_auth_ico1_img">
              <img src="../assets/jiantou.png" alt />
            </p>
          </div>
        </div>

        <div class="copyright_links">
          <div class="mod_copyright_auth_ico">
            <p class="copyright_links_text">30</p>
            <p class="copyright_links_text1">2019.12.23</p>
          </div>
          <img src="../assets/dongt1.png" alt />
          <div class="mod_copyright_auth_ico1 mod_copyright_auth_ico2">
            <p class="mod_copyright_auth_ico1_text">
              <span
                style=" width: 70%; display: block;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  font-size:15px;"
              >我是标题杀菌灯拉数据来看大家阿斯利康大家啊三六九等</span>
            </p>
            <p class="mod_copyright_auth_ico1_text2">我是标题杀菌灯拉数据来看大家阿斯利康大家啊三六九等</p>
            <p class="mod_copyright_auth_ico1_img">
              <img src="../assets/jiantou.png" alt />
            </p>
          </div>
        </div>

        <div class="copyright_links">
          <div class="mod_copyright_auth_ico">
            <p class="copyright_links_text">30</p>
            <p class="copyright_links_text1">2019.12.23</p>
          </div>
          <img src="../assets/dongt1.png" alt />
          <div class="mod_copyright_auth_ico1 mod_copyright_auth_ico2">
            <p class="mod_copyright_auth_ico1_text">
              <span
                style=" width: 70%; display: block;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  font-size:15px;"
              >我是标题杀菌灯拉数据来看大家阿斯利康大家啊三六九等</span>
            </p>
            <p class="mod_copyright_auth_ico1_text2">我是标题杀菌灯拉数据来看大家阿斯利康大家啊三六九等</p>
            <p class="mod_copyright_auth_ico1_img">
              <img src="../assets/jiantou.png" alt />
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="cont_body_bg3">
      <div class="SkusCell SkusCell1">
        <p class="mod_price_text">合作企业</p>
        <p class="mod_price_text1">HENGXINGDYNAMICS</p>
      </div>
      <div class="mod_help_nav">
        <img src="../assets/zhaos.png" alt />
        <img src="../assets/zhaos.png" alt />
        <img src="../assets/zhaos.png" alt />
        <img src="../assets/zhaos.png" alt />
        <img src="../assets/zhaos.png" alt />
        <img src="../assets/zhaos.png" alt />
        <img src="../assets/zhaos.png" alt />
        <img src="../assets/zhaos.png" alt />
        <img src="../assets/zhaos.png" alt />
        <img src="../assets/zhaos.png" alt />
        <img src="../assets/zhaos.png" alt />
        <img src="../assets/zhaos.png" alt />
      </div>
    </div>
    <Tail></Tail>
  </div>
</template>

<script>
import Header from "../common/header";
import Tail from "../common/tail"
export default {
  components: {
    Header,
    Tail
  },
  data() {
    return {
      curr: 0
    };
  },
  methods: {
    junm(e) {
      this.curr = e.target.dataset.cuur;
    }
  }
};
</script>

<style>

.cont_top {
  height: 200px;
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

.mod_price_text {
  margin-top: 50px;
  color: #5f616d;
  font-size: 30px;
}
.mod_price_text1 {
  color: #5f616d;
  font-family: ArialMT;
  font-size: 10px;
}

.cont_body_bg_cheng {
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
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

.cont_body_bg1 {
  background: url("../assets/shouyebeijn5.png") no-repeat;
  background-size: 100% 100%;
  height: 700px;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
}

.cont_body_bg1 .slider_next {
  color: #fff;
  height: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.cont_body_bg1 .slider_next .slider_next1 {
  font-size: 35px;
}
.cont_body_bg1 .slider_next .slider_next2 {
  font-size: 10px;
  margin-top: 10px;
}
.stage {
  width: 60%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.stage .stage1 {
  width: 260px;
  height: 330px;
  border: 1px solid #fff;
  border-radius: 10px;
  color: #fff;
}
.chosen_item_tit {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
}
.stage1 .stage_text {
  font-size: 26px;
  margin: 15px 0;
}

.stage2 {
  background: #fff;
  width: 60%;
  height: 200px;
  position: absolute;
  bottom: -90px;
}
.cont_body_bg2 {
  background: url("../assets/boder3.png") no-repeat;
  background-size: 100% 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mod_lazyload {
  width: 100%;
  height: 50px;
  color: #258ffc;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.stage2 .J_house {
  width: 33.333%;
  border-right: 1px solid #dcdcdc;
  height: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.stage2 .J_house2 {
  width: 33.333%;
  height: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.J_house .J_house_text,
.J_house2 .J_house_text {
  color: #5f616d;
  margin-bottom: 10px;
}

.J_house .J_house_text1,
.J_house2 .J_house_text1 {
  color: #258ffc;
  font-size: 30px;
  font-weight: bold;
}
.J_house1 {
  display: flex;
  height: 100%;
}

.SkusCell {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;
}
.copyright_links {
  position: relative;
}
.mod_copyright_auth_ico {
  position: absolute;
  background: #258ffc;
  height: 60px;
  width: 60px;
  right: -10px;
  top: -10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.copyright_links_text {
  font-size: 24px;
  font-weight: bold;
}
.copyright_links_text1 {
  font-size: 10px;
}

.mod_copyright_auth_ico1 {
  background: #258ffc;
  width: 80%;
  height: 50px;
  position: absolute;
  bottom: -18px;
  left: 35px;
  overflow: hidden;
}

.SkusCell_img {
  width: 60%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.mod_copyright_auth_ico2:hover {
  height: 100px;
}
.mod_copyright_auth_ico1_text {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 14px;
}

.mod_copyright_auth_ico1_text2 {
  color: #c1defb;
  font-size: 10px;
}
.mod_copyright_auth_ico1_img {
  display: flex;
  justify-content: center;
}

.stage_text1 {
  /* border: 1px solid red; */
  width: 150px;
}
.cont_body_bg3 {
  background: #fff;
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.cont_body_bg3 .SkusCell1 {
  margin: 0 !important;
}

.mod_help_nav {
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
}

.mod_help_nav img {
  width: 15%;
  margin-top: 10px;
}
.SkusCell1 .mod_price_text {
  margin: 0 !important;
}

</style>