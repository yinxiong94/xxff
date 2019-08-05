<template>
  <div class="pirce">
    <Header :coou='1'></Header>
    <div class="main">
      <div class="banxin">
        <div class="mian_title">价格/发布次数</div>
      </div>
    </div>
    <div class="center11"
         v-if="off==0">
      <div class="center11_item">
        <div v-if="item.length==0">暂无应用可购买发布包</div>
        <div class="center11_list"
             @click="handXuan($event)"
             :data-index="index"
             v-for="(item,index) in item"
             v-bind:key="index">
          <img :src="item.OrderDetailsImg"
               alt="">
          <div class="cocos">{{item.OrderDetailsName}}</div>
        </div>
      </div>
    </div>
    <div class="package">
      <div class="banxin">
        <div class="package_title">
          购买发布包
          <div class="package_k">
            <div class="click1">时长包</div>
            <!-- <div class="click2">次数包</div> -->
          </div>
        </div>
        <div class="list">
          <div class="list_1"
               v-for="(item,index) in list"
               v-bind:key="index">
            <div class="list_pirce">￥{{item.Price}}</div>
            <div class="list_cc">
              <span>{{item.ProductName}}</span>
              <span>一天下载次数{{item.MayCount}}次</span>
              <span>专属时长包</span>
              <span>一个包只针对一个APP</span>
              <span class="send">{{item.ProductName}}</span>
              <span class="send">一天可以下载{{item.MayCount}}次</span>
              <span class="send">如次数不够可加购次数包</span>
            </div>
            <div :class="index == 0?'btn':index==1?'btn1':'btn2'"
                 @click="HandChoice($event)"
                 :data-index="index">立即购买</div>
          </div>
        </div>
      </div>
    </div>
    
    <tail></tail>
  </div>
</template>
<script>
import Header from '../../common/header.vue'
import tail from '../../common/tail.vue'
export default {
  components: {
    Header,
    tail
  },
  data () {
    return {
      choice: 99,
      list: [],
      item: [],
      idList: '',
      off: 1
    }
  },
  methods: {
    HandChoice: function (e) {
      this.off = 0;
      var index = e.target.dataset.index
      var tcid = this.list[index].ProductId
      var pirce = this.list[index].Price
      localStorage.setItem('tcid', tcid);
      localStorage.setItem('pirce', pirce);

    },
    handObtainList: function () {
      // 获取应用列表
      var UserId = localStorage.getItem('UserId');
      let params = this.qs.stringify({
        action: "GetOrderDetails",
        IsOk: 0,
        UserId: UserId,
        pid: 0,
        psize: 999,
      });
      this.axios.post('GetUserData.ashx', params).then(res => {
        this.item = res.data.Result;
      });
    },
    handXuan: function (e) {
      // 选择应用效果
      var index = e.currentTarget.dataset.index;
      var applicationId = this.item[index].OrderDetailsId;
      localStorage.setItem('applicationId', applicationId);
      this.off = 1;
      this.$router.push({ name: 'payment' });
    }
  },
  created () {
    let params = this.qs.stringify({
      action: "GetProduct",
      IsType: 0,
    });
    this.axios.post('GetUserData.ashx', params).then(res => {
      this.list = res.data.Result
    });
    this.handObtainList();

  }
  // handList: function () {
  //   let params = this.qs.stringify({
  //     action: "GetOrderDetails",
  //     type: 2,
  //     OrderPrice: this.pirce
  //   });
  //   var url = "http://192.168.1.188:8035/API/GetUserData.ashx";
  //   this.axios.post(url, params).then(res => {
  //     console.log(res);
  //   });
  // }
}
</script>
<style>
.main {
  width: 100%;
  height: 76px;
  border-bottom: 1px solid #dfdfdf;
}
.main .banxin {
  width: 75%;
  max-width: 1200px;
  margin: 0 auto;
}
.main .banxin .mian_title {
  font-size: 26px;
  line-height: 70px;
  height: 70px;
  float: left;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}

.package_title {
  font-size: 40px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(37, 143, 252, 1);
  text-align: center;
  margin-top: 60px;
  position: relative;
  height: 50px;
  line-height: 50px;
}
.package_k {
  position: absolute;
  right: 0;
  top: 0;
  width: 244px;
  line-height: 50px;
  font-size: 20px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  display: flex;
}
.package_k .click1,
.package_k .click2 {
  width: 122px;
  height: 50px;
  background: rgba(37, 143, 252, 1);
  border: 1px solid rgba(229, 242, 255, 1);
  line-height: 50px;
}
.package_k .click2 {
  background: #fff;
  color: #258ffc;
}
.list {
  margin-top: 110px;
  display: flex;
  justify-content: space-between;
}
.list .list_1 {
  width: 32%;
  height: 584px;
  background-image: url("../../assets/list1.png");
  background-repeat: no-repeat;
  background-size: 384px 584px;
  position: relative;
}
.list .list_1:nth-child(2) {
  background-image: url("../../assets/list2.png");
}
.list .list_1:nth-child(3) {
  background-image: url("../../assets/list3.png");
}
.list .list_1 .list_pirce {
  color: #fff;
  font-size: 28px;
  position: absolute;
  top: 64px;
  left: 93px;
}
.list .list_1 .list_pirce1 {
  color: #fff;
  font-size: 28px;
  position: absolute;
  top: 64px;
  left: 83px;
}

.list .list_1 .list_cc {
  width: 57%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 158px;
}
.list .list_1 .list_cc span {
  font-size: 20px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(40, 35, 49, 1);
}
.list .list_1 .list_cc span:nth-child(2) {
  font-size: 18px;
  margin-top: 28px;
}
.list .list_1 .list_cc span:nth-child(3) {
  font-size: 18px;
  margin-top: 48px;
}
.list .list_1 .list_cc span:nth-child(4) {
  font-size: 18px;
  margin-top: 10px;
  color: #8f49f9;
}
.list .list_1 .list_cc .send {
  font-size: 16px;
  margin-top: 10px;
}
.list .list_1 .btn,
.list .list_1 .btn1,
.list .list_1 .btn2 {
  width: 120px;
  height: 46px;
  background: rgba(161, 126, 255, 1);
  border-radius: 10px;
  position: absolute;
  bottom: 58px;
  right: 44px;
  text-align: center;
  line-height: 46px;
  color: #fff;
}
.list .list_1 .btn1 {
  background: rgba(65, 225, 190, 1);
}
.list .list_1 .btn2 {
  background: rgba(101, 150, 220, 1);
}
.center11 {
  width: 600px;
  height: 730px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.21);
  background: #fff;
  box-sizing: border-box;
  padding: 20px;
  padding-top: 0;
  z-index: 1000
}
.center11 .center11_item {
}
.center11 .center11_item .center11_list {
  margin-right: 20px;
  display: flex;
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
  margin-top: 20px;
}
.center11 .center11_item .center11_list img {
  width: 60px;
  height: 60px;
}
.center11 .center11_item .center11_list .cocos {
  flex: 1;
  line-height: 60px;
  font-size: 22px;
  height: 30px;
  margin-left: 20px;
}
.center11 .center11_item .center11_list:nth-child(3n) {
  margin-right: 0;
}
</style>
