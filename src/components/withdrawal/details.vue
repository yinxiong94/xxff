<template>
  <div class="news">
    <headWoke></headWoke>
    <div class="mian">
      <div class="db">
        <div class="banxin">
          <div class="xhs">
            <div class="xhs_conter">
              <img src="../../assets/syuan183.png"
                   alt="" />
            </div>
          </div>
          <div class="xhs_app">
            <div class="xhs_app_conter">
              <div class="xhs_top">
                <div class="xhs_top_left">
                  <img src="../../assets/az.png"
                       alt="" />
                </div>
                <div class="xhs_top_right">
                  小红书APP
                </div>
              </div>
              <div class="lower">
                版本：1.0.3 (build 3) 大小：4.4 MB 更新时间 ：2019-04-11
              </div>
            </div>
            <div class="xhs_evm">
              <div class="evm">
                <img src="../../assets/timg226.png"
                     alt="" />
              </div>
            </div>
            <div class="xhs_az">
              <div class="xhs_az_conter">
                <div class="xhs_az_btn">点击安装</div>
                <p>或者用手机扫描二维码安装</p>
              </div>
            </div>
          </div>
          <div class="bbyh">
            <div class="bbyh_bbh">
              <div class="bbyh_bbh_li">
                1.0.3 (build 1 )
              </div>
              <div class="bbyh_bbh_li">
                版本优化
              </div>
              <div class="bbyh_bbh_li">
                2018-12-24
              </div>
            </div>
            <div class="bbyh_bbh">
              <div class="bbyh_bbh_li">
                1.0.3 (build 1 )
              </div>
              <div class="bbyh_bbh_li">
                版本优化
              </div>
              <div class="bbyh_bbh_li">
                2018-12-24
              </div>
            </div>
          </div>
          <div class="yyjs">
            <div class="yyjs_conter">
              <h2>应用介绍</h2>
              <p class="yyjs_p">小熊帮帮是兼职平台，适合宝妈大学生碎片时间赚零花。</p>
              <p class="yyjs_p">小熊帮帮是兼职平台，适合宝妈大学生碎片时间赚零花。小熊帮帮是兼职平台，适合宝妈大学生碎片时间赚零花。小熊帮帮是兼职平台，适合宝妈大学生碎片时间赚零花。小熊帮帮是兼职平台，适合宝妈大学生碎片时间赚零花。</p>
              <div>
                <p>小熊帮帮是兼职平台，适合宝妈大学生碎片时间赚零花。
                  <p>小熊帮帮是兼职平台，适合宝妈大学生碎片时间赚零花。小熊帮帮是兼职平台，适合宝妈大学生碎片时间赚零花。小熊帮帮是兼职平台，适合宝妈大学生碎片时间赚零花。小熊帮帮是兼职平台，适合宝妈大学生碎片时间赚零花。</p>
              </div>
            </div>
          </div>
          <div class="yyjt">
            <div class="yyjt_title">
              应用截图
            </div>
            <div class="yyjt_list">
              <div class="list">
                <img src="../../assets/cbcx.png"
                     alt="">
              </div>
              <div class="list">
                <img src="../../assets/cbbx.png"
                     alt="">
              </div>
              <div class="list">
                <img src="../../assets/cbtxxx.png"
                     alt="">
              </div>
              <div class="list">
                <img src="../../assets/cbtbcg.png"
                     alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
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
.mian {
  margin-top: 30px;
}
.db {
  flex: 1;
  padding-bottom: 96px;
}
.db .banxin {
  width: 100%;
  margin: 0 auto;
}
.db .banxin .xhs {
  width: 183px;
  margin: 0 auto;
}
.db .banxin .xhs .xhs_conter {
  width: 100%;
  margin: 0 auto;
}
.db .banxin .xhs .xhs_conter img {
  width: 183px;
}
.db .banxin .xhs_app {
  width: 100%;
  margin-top: 50px;
  margin-bottom: 25px;
  border-bottom: 1px solid #a4a4a4;
}
.db .banxin .xhs_app .xhs_app_conter {
  width: 92%;
  margin: 0 auto;
}
.db .banxin .xhs_app .xhs_app_conter .xhs_top {
  width: 160px;
  margin: 0 auto;
  display: flex;
}
.db .banxin .xhs_app .xhs_app_conter .xhs_top .xhs_top_left {
  max-width: 23px;
  flex: 1;
  margin-left: 20px;
}
.db .banxin .xhs_app .xhs_app_conter .xhs_top .xhs_top_left img {
  width: 100%;
}
.db .banxin .xhs_app .xhs_app_conter .xhs_top .xhs_top_right {
  width: 80%;
  max-width: 102px;
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: #333333;
  line-height: 25px;
  text-align: center;
}
.db .banxin .xhs_app .xhs_app_conter .lower {
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: #9b9b9b;
  text-align: center;
  font-size: 12px;
}
.db .banxin .xhs_app .xhs_evm {
  width: 100%;
  margin-top: 24px;
  margin-bottom: 30px;
}
.db .banxin .xhs_app .xhs_evm .evm {
  width: 18.9%;
  margin: 0 auto;
}
.db .banxin .xhs_app .xhs_az {
  width: 100%;
  margin-bottom: 50px;
}
.db .banxin .xhs_app .xhs_az .xhs_az_conter {
  width: 59.5%;
  margin: 0 auto;
}
.db .banxin .xhs_app .xhs_az .xhs_az_conter .xhs_az_btn {
  background: #258ffc;
  width: 257px;
  height: 60px;
  margin: 0 auto;
  font-size: 28px;
  text-align: center;
  line-height: 60px;
  border-radius: 30px;
  color: #fff;
  margin-bottom: 14px;
}
.db .banxin .xhs_app .xhs_az .xhs_az_conter p {
  text-align: center;
  font-size: 12px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: #717171;
}
.db .banxin .bbyh {
  margin-top: 7px;
  padding-bottom: 8px;
  width: 100%;
  margin-bottom: 9px;
  border-bottom: 1px solid #a4a4a4;
}
.db .banxin .bbyh .bbyh_bbh {
  width: 100%;
  display: flex;
  height: 20px;
  padding: 7px 0;
}
.db .banxin .bbyh .bbyh_bbh .bbyh_bbh_li {
  flex: 1;
  text-align: center;
  font-size: 12px;
}
.db .banxin .yyjs {
  width: 100%;
  border-bottom: 1px solid #a4a4a4;
}
.db .banxin .yyjs .yyjs_conter {
  width: 96%;
  margin: 0 auto;
  padding-bottom: 52px;
}
.db .banxin .yyjs .yyjs_conter h2 {
  font-size: 18px;
  margin-bottom: 34px;
}
.db .banxin .yyjs .yyjs_conter .yyjs_p {
  font-size: 12px;
  color: #717171;
  line-height: 16px;
}
.db .banxin .yyjs .yyjs_conter div {
  font-size: 12px;
  color: #717171;
  margin-top: 20px;
}
.db .banxin .yyjs .yyjs_conter div p {
  font-size: 12px;
  color: #717171;
  line-height: 16px;
}
.db .banxin .yyjt {
  width: 100%;
}
.yyjt_title {
  width: 80%;
  margin: 0 auto;
  font-size: 22px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  margin-top: 47px;
  margin-bottom: 30px;
}
.db .banxin .yyjt .yyjt_list {
  width: 100%;
  display: flex;
}
.db .banxin .yyjt .yyjt_list .list {
  flex: 1;
  margin-top: 10px;
  justify-content: space-between;
}
.db .banxin .yyjt .yyjt_list .list img {
  width: 99%;
}
* {
  margin: 0;
  padding: 0;
}
</style>
