<template>
  <div class="payment">
    <headWoke></headWoke>
    <div class="banxin">
      <div class="conter">
        <div class="Publishing">
          <span>购买APP发布包</span>
          <span>99元/月</span>
        </div>
        <div class="conter_Order">
          <div class="conter_h5">
            <div class="h4">订单提交成功，请尽快付款</div>
            <div>需支付<span>99</span>元</div>
          </div>
          <div class="input"
               style="margin-bottom: 10px;">
            <input class="radio_type"
                   type="radio"
                   name="type"
                   id="radio1"
                   checked="checked" />
            <img src="../../assets/balance.png"
                 alt="">
            <span>账户余额（1569元）</span>
            <div class="input_right">支付<span>99</span>元</div>
          </div>
          <div class="input1">
            <input class="radio_type"
                   type="radio"
                   name="type"
                   id="radio1"
                   checked="checked" />
            <img src="../../assets/input_zfb.png"
                 alt="">
            <span>账户余额（1569元）</span>
            <div class="input_right">支付<span>99</span>元</div>
          </div>
        </div>
        <div class="payment_btn">
          确认支付
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
    headWoke
  },
  data () {
    return {
      radio: '1'
    };
  }
}
</script>

<style>
body {
  background: #f1efee;
}
label {
  margin: 10px;
}
.conter {
  background: #fff;
  margin-top: 60px;
  padding: 50px 50px 0 50px;
  padding-bottom: 147px;
}
.conter .Publishing {
  width: 1100px;
  height: 83px;
  background: rgba(245, 245, 245, 1);
  border: 1px solid rgba(204, 204, 204, 1);
  padding: 18px 0 0 45px;
  display: flex;
  flex-direction: column;
}
.conter .Publishing span {
  font-size: 19px;
  font-family: MicrosoftYaHei-Bold;
  font-weight: bold;
  color: rgba(26, 26, 26, 1);
}
.conter .Publishing span:nth-child(2) {
  margin-top: 12px;
  height: 17px;
  font-size: 17px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(119, 119, 119, 1);
}
.conter .conter_Order {
  width: 980px;
  margin: 0 auto;
  margin-top: 47px;
  border-bottom: 1px solid #ccc;
  padding: 0 28px;
}
.conter .conter_Order .conter_h5 {
  display: flex;
  justify-content: space-between;
  height: 23px;
  margin-bottom: 40px;
}
.conter .conter_Order .conter_h5 .h4 {
  height: 19px;
  font-size: 19px;
  font-family: MicrosoftYaHei-Bold;
  font-weight: bold;
  color: rgba(26, 26, 26, 1);
  line-height: 19px;
}
.conter .conter_Order .conter_h5 div {
  height: 19px;
  font-size: 19px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(26, 26, 26, 1);
  line-height: 19px;
}
.conter .conter_Order .conter_h5 div span {
  height: 23px;
  font-size: 28px;
  font-family: MicrosoftYaHei-Bold;
  font-weight: bold;
  color: rgba(91, 173, 242, 1);
  line-height: 23px;
  margin-left: 10px;
  margin-right: 4px;
}
.conter_Order .input {
  width: 920px;
  border: 2px solid rgba(42, 130, 219, 1);
  height: 71px;
  padding: 0 37px 0 18px;
  display: flex;
}
.conter_Order .input1 {
  width: 920px;
  height: 71px;
  padding: 0 37px 0 18px;
  display: flex;
}
.conter_Order .input img,
.conter_Order .input1 img {
  width: 36px;
  height: 35px;
  margin-top: 14px;
  margin-left: 30px;
}
.conter_Order .input > span,
.conter_Order .input1 > span {
  font-size: 20px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(26, 26, 26, 1);
  height: 21px;
  line-height: 21px;
  line-height: 21px;
  margin-top: 24px;
  margin-left: 30px;
}
.conter_Order .input .input_right,
.conter_Order .input1 .input_right {
  flex: 1;
  text-align: right;
  height: 20px;
  margin-top: 24px;
  line-height: 20px;
  font-size: 19px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(26, 26, 26, 1);
}
.conter_Order .input .input_right span,
.conter_Order .input1 .input_right span {
  font-size: 24px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(91, 173, 242, 1);
  line-height: 20px;
  margin: 0 25px 0 28px;
}
.radio_type {
  width: 14px;
  height: 14px;
  appearance: none;
  position: relative;
  margin-top: 30px;
}
.radio_type:before {
  content: "";
  width: 14px;
  height: 14px;
  border: 1px solid #999999;
  display: inline-block;
  border-radius: 50%;
  vertical-align: middle;
}
.radio_type:checked:before {
  content: "";
  width: 14px;
  height: 14px;
  border: 1px solid #5badf2;
  background: #fff;
  display: inline-block;
  border-radius: 50%;
  vertical-align: middle;
}
.radio_type:checked:after {
  width: 6px;
  height: 6px;
  border-radius: 100%;
  background-color: #5badf2;
  content: "";
  position: absolute;
  left: 42%;
  top: 40%;
}
.payment_btn {
  width: 200px;
  height: 68px;
  background: rgba(91, 173, 242, 1);
  border-radius: 2px;
  text-align: center;
  line-height: 68px;
  font-size: 28px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  margin: 0 auto;
  margin-top: 268px;
}
</style>
