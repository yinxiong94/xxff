<template>
  <div class="withdrawal">
    <headWoke></headWoke>
    <div class="mian">
      <dir class="banxin">
        <navList></navList>
        <div class="wallet">
          <div class="title">我的钱包</div>
          <div class="list">
            <div class="send">
              <div class="send_conter">
                <span class="send_pirce1">5000.00</span>
                <span class="send_Total">资产总额（￥）</span>
              </div>
            </div>
            <div class="send">
              <div class="send_conter">
                <span class="send_pirce">5000.00</span>
                <span class="send_Total">资产总额（￥）</span>
              </div>
            </div>
            <div class="send">
              <div class="send_conter">
                <div class="center">充值</div>
              </div>
            </div>
            <div class="send">
              <div class="send_conter">
                <div class="center1">提现</div>
              </div>
            </div>
          </div>
          <div class="Tips">
            <div class="title" style="border-bottom:0">温馨提示</div>
            <div class="Tips_num">
              <ul>
                <li>1.为了您的账户资金安全，请在充值前开通第三方资金托管账户、设置交易密码；</li>
                <li>2.充值过程中不收取任何手续费</li>
                <li>4.根据不同的安全认证方式，充值单笔限额和每日限额会不同，具体请咨询银行客服；</li>
                <li>5.严禁利用充值功能进行信用卡套现、转账、洗钱等行为；</li>
                <li>6.充值期间，请勿关闭浏览器，待充值成功并返回会员中心后，所充资金才能入账，如有疑问请及时联系我们：*************</li>
              </ul>
            </div>
          </div>
        </div>
      </dir>
    </div>
  </div>
</template>

<script>
import headWoke from "../../common/header.vue";
import navList from "../../common/navList.vue";
export default {
  components: {
    headWoke,
    navList
  }
};
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
}
.wallet .list {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.wallet .list .send {
  width: 50%;
  height: 188px;
  background-image: url("../../assets/item1.png");
  background-size: 494px 188px;
}
.wallet .list .send:nth-child(2) {
  background-image: url("../../assets/item2.png");
}
.wallet .list .send:nth-child(3) {
  background-image: url("../../assets/item3.png");
}
.wallet .list .send:nth-child(4) {
  background-image: url("../../assets/item4.png");
}
.wallet .list .send .send_conter {
  flex: 1;
  margin-left: 154px;
  display: flex;
  flex-direction: column;
}
.wallet .list .send .send_conter .center,
.wallet .list .send .send_conter .center1 {
  text-align: center;
  line-height: 188px;
  font-size: 36px;
  font-family: MicrosoftYaHei-Bold;
  font-weight: bold;
  color: rgba(37, 143, 252, 1);
}
.wallet .list .send .send_conter .center1 {
  color: #fe8810;
}
.wallet .list .send .send_pirce,
.wallet .list .send .send_pirce1 {
  font-size: 36px;
  font-family: MicrosoftYaHei-Bold;
  font-weight: bold;
  color: rgba(246, 98, 98, 1);
  text-align: center;
  margin-top: 50px;
  height: 30px;
  line-height: 30px;
}
.wallet .list .send .send_pirce {
  color: #00b775;
}
.wallet .list .send .send_Total {
  text-align: center;
  margin-top: 38px;
}
.wallet .Tips {
  margin-top: 20px;
}
.wallet .Tips .Tips_num {
  margin-top: 34px;
  padding-bottom: 27px;
}
.wallet .Tips .Tips_num ul li {
  font-size: 24px;
  color: #666666;
  margin-bottom: 10px;
}
</style>


                            


                        