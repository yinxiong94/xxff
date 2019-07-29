<template>
  <div class="withdrawal">
    <headWoke></headWoke>
    <div class="mian">
      <dir class="banxin">
        <navList></navList>
        <div class="wallet">
          <div :class="off == 0?'title':'title1'"
               @click="Previous">{{title}}</div>
          <div class="list"
               v-if="off == 0">
            <div class="send">
              <div class="send_conter">
                <span class="send_pirce1">5000.00</span>
                <span class="send_Total">账户钱包余额（￥）</span>
              </div>
            </div>
            <div class="send">
              <div class="send_conter">
                <span class="send_pirce">5000.00</span>
                <span class="send_Total">分佣钱包余额（￥）</span>
              </div>
            </div>
            <div class="send"
                 @click="Recharge()">
              <div class="send_conter">
                <div class="center">充值</div>
              </div>
            </div>
            <div class="send"
                 @click="withdrawal()">
              <div class="send_conter">
                <div class="center1">提现</div>
              </div>
            </div>
          </div>
          <!-- 充值 -->
          <div class="Recharge"
               v-if="off == 1">
            <div class="Recharge_left">
              <div class="Recharge_text">提现方式：</div>
              <div class="Recharge_text">提现金额：</div>
              <div class="Recharge_text">当前可提现余额：</div>
            </div>
            <div class="Recharge_right">
              <div class="Recharge_Tips">发起提现后，24小时内会有工作人员与您联系</div>
              <input type="text"
                     class="input"
                     placeholder=""
                     value="">
              <div class="Recharge_balance">
                188,000 <span>元</span>
              </div>
              <div class="Recharge_Btn">
                提现
              </div>
            </div>
          </div>

          <!-- 提现 -->
          <div class="Recharge"
               v-if="off == 2">
            <div class="Recharge_left">
              <div class="Recharge_text">提现方式：</div>
              <div class="Recharge_text">提现金额：</div>
              <div class="Recharge_text">当前可用余额：</div>
            </div>
            <div class="Recharge_right">
              <div class="Recharge_Zfb">
                支付宝
              </div>
              <input type="text"
                     class="input"
                     placeholder=""
                     value="">
              <div class="Recharge_balance">
                188,000 <span>元</span>
              </div>
              <div class="Recharge_Btn">
                提现
              </div>
            </div>
          </div>

          <div class="Tips">
            <div class="title"
                 style="border-bottom:0">温馨提示</div>
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
    <tail></tail>
  </div>
</template>
<script>
import headWoke from "../../common/header.vue";
import navList from "../../common/navList.vue";
import tail from '../../common/tail.vue'
export default {
  components: {
    headWoke,
    navList,
    tail
  },
  data () {
    return {
      off: 0,
      title: '我的钱包'
    }
  },
  methods: {
    Recharge: function () {
      this.off = 1;
      this.title = '账户提现'
    },
    withdrawal: function () {
      this.off = 2;
      this.title = '账户充值'
    },
    Previous: function () {
      if (this.off == 0) {
        return
      } else {
        this.off = 0;
      }
    }
  },
  watch: {

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
  overflow: hidden;
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
.wallet .title1 {
  width: 100%;
  height: 80px;
  font-size: 32px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 80px;
  border-bottom: 1px solid #f1efee;
  background-image: url("../../assets/left.png");
  background-size: 17px 28px;
  background-repeat: no-repeat;
  background-position: 0 27px;
  text-indent: 40px;
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

/* 充值 */
.Recharge {
  display: flex;
  margin-top: 66px;
}
.Recharge .Recharge_left {
  width: 215px;
  text-align: right;
}
.Recharge .Recharge_left .Recharge_text {
  height: 20px;
  font-size: 20px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 20px;
  margin-bottom: 50px;
}
.Recharge .Recharge_right {
  flex: 1;
  margin-left: 57px;
}
.Recharge .Recharge_right .Recharge_Tips {
  height: 22px;
  font-size: 22px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 22px;
  margin-bottom: 42px;
}
.Recharge .Recharge_right .Recharge_Zfb {
  width: 140px;
  height: 38px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(51, 104, 191, 1);
  border-radius: 5px;
  margin-bottom: 42px;
  background-image: url("../../assets/choose.png");
  text-align: center;
  font-size: 20px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 104, 191, 1);
  margin-top: -6px;
  line-height: 38px;
}
.Recharge .Recharge_right .input {
  width: 272px;
  height: 38px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(204, 204, 204, 1);
  border-radius: 5px;
  margin-bottom: 35px;
}
.Recharge .Recharge_right .Recharge_balance {
  height: 24px;
  font-size: 24px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(91, 173, 242, 1);
  line-height: 24px;
}
.Recharge .Recharge_right .Recharge_balance span {
  color: #000;
}
.Recharge_Btn {
  width: 272px;
  height: 46px;
  background: rgba(37, 143, 252, 1);
  border-radius: 5px;
  text-align: center;
  line-height: 46px;
  font-size: 24px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  margin-top: 70px;
}
</style>


                            


                        