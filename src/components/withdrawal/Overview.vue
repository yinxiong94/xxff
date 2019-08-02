<template>
  <div class="Overview">
    <headWoke></headWoke>
    <div class="mian">
      <div class="banxin">
        <navList :cities="0"></navList>
        <div class="mian_right">
          <div class="Overview_data">
            <div class="Overview_data_top">
              <div class="Overview_data_top_tx">
                <img :src="user.UserImg"
                     alt />
                <div class="Overview_data_top_tx_right">
                  <span>{{user.NickName}}</span>
                  <span>ID:{{user.OpenID}}</span>
                  <div class="Overview_data_top_tx_right_tb">
                    <img src="../../assets/tb1.png"
                         alt />
                    <img src="../../assets/tb2.png"
                         alt />
                  </div>
                </div>
              </div>
              <div class="Overview_data_bottom">
                <input type="text"
                       name
                       placeholder="填写邀请码得好礼" />
                <div class="Overview_data_bottom_btn">提交</div>
              </div>
            </div>
            <div class="Overview_data_right">
              <div class="Overview_data_right_yu">
                <span>钱包余额</span>
                <span>充值后可购买应用发布包</span>
              </div>
              <div class="Overview_data_right_pirce">{{user.Price || 0}}元</div>
              <div class="Overview_data_right_btn">
                <div class="Overview_data_right_btn1">充值</div>
              </div>
            </div>
          </div>
          <div class="Overview_item">
            <div class="item">
              <div class="item_xian"></div>
              <div class="item_z">共上传APP数量</div>
              <div class="item_num">
                {{APPlength}}
                <span>个</span>
              </div>
            </div>
            <div class="item">
              <div class="item_xian"></div>
              <div class="item_z">拥有优惠券数量</div>
              <div class="item_num">
                4
                <span>张</span>
              </div>
            </div>
            <div class="item">
              <div class="item_xian"></div>
              <div class="item_z">分佣钱包</div>
              <div class="item_num">
                {{user.Earnings}}
                <span>元(可提现)</span>
              </div>
            </div>
          </div>
          <div class="xiaoxi">
            <div class="xiaoxi_title">我的消息</div>
            <div class="xiaoxi_item">
              <div :class="item.Num == 0? 'yuan1':'yuan'"></div>
              <div class="item_right">
                <div class="notice">
                  <div class="text">消息通知</div>
                  <div class="xian"></div>
                  <img :src="item.off? img1 : img "
                       @click="handSee()"
                       alt="" />
                  <div class="time">{{item.AddTime}}</div>
                </div>
                <div class="xia"
                     v-if="item.off">{{item.Text}}</div>
              </div>
            </div>
          </div>
          <div class="Overview_date">
            <div class="Overview_date_title">交易明细</div>
            <div class="Overview_date_nian">
              <div class="dian"></div>
              <dir class="Overview_date_ri"
                   @click="openByDrop($event)"
                   readonly>{{calendar3.display}}</dir>
              <transition name="fade">
                <div class="calendar-dropdown"
                     :style="{'left':18+'px','top':calendar3.top+'px'}"
                     v-if="calendar3.show">
                  <calendar :zero="calendar3.zero"
                            :lunar="calendar3.lunar"
                            :value="calendar3.value"
                            :begin="calendar3.begin"
                            :end="calendar3.end"
                            @select="calendar3.select"></calendar>
                </div>
              </transition>
              <div class="dian"></div>
              <div class="dian"></div>
              <dir class="Overview_date_ri"
                   @click="openByDrop1($event)"
                   readonly>{{calendar4.display}}</dir>
              <transition name="fade">
                <div class="calendar-dropdown"
                     :style="{'left':18+'px','top':calendar4.top+'px'}"
                     v-if="calendar4.show">
                  <calendar :zero="calendar4.zero"
                            :lunar="calendar4.lunar"
                            :value="calendar4.value"
                            :begin="calendar4.begin"
                            :end="calendar4.end"
                            @select="calendar4.select"></calendar>
                </div>
              </transition>
              <div class="Overview_date_yue">月</div>
              <div class="Overview_date_coco">年</div>
              <a @click.stop="record">确认查询</a>
            </div>
            <div class="Overview_date_type">
              <div class="Overview_date_type_item">
                <div class="Overview_date_type_list1">交易类型</div>
                <div class="Overview_date_type_list1">交易时间</div>
                <div class="Overview_date_type_list1">变动金额</div>
              </div>
              <div class="Overview_date_type_item"
                   v-for="item in list"
                   :key="item.pid">
                <div class="Overview_date_type_list1">{{item.Remark}}</div>
                <div class="Overview_date_type_list1">{{item.RecordTime}}</div>
                <div class="Overview_date_type_list1">
                  <span>{{item.Remark}}</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <tail></tail>
  </div>
</template>

<script>
import headWoke from "../../common/header.vue";
import navList from "../../common/navList.vue";
import tail from "../../common/tail.vue";
import calendar from "./calendar.vue";

export default {
  components: {
    headWoke,
    navList,
    tail,
    calendar
  },
  data () {
    return {
      img: require('../../assets/right.png'),
      img1: require('../../assets/xia.png'),
      calendar3: {
        display: "2019/01/01",
        show: false,
        zero: true,
        value: [2019, 1, 1], //默认日期
        lunar: true, //显示农历
        select: value => {
          this.calendar3.show = false;
          this.calendar3.value = value;
          this.calendar3.display = value.join("/");
        }
      },

      calendar4: {
        display: "2019/01/01",
        show: false,
        zero: true,
        value: [2019, 1, 1], //默认日期
        lunar: true, //显示农历
        select: value => {
          this.calendar4.show = false;
          this.calendar4.value = value;
          this.calendar4.display = value.join("/");
        }
      },
      list: {},
      user: [],
      item: [],
      textcount: '',
      APPlength: ''
    };
  },
  created () {
    // this.record()
    this.Information();
    this.InforTcList();
    this.handXiaoxi();
  },
  methods: {
    // 消息
    handXiaoxi: function () {
      var UserId = localStorage.getItem('UserId')
      let params = this.qs.stringify({
        action: "Xiaoxi",
        UserId: UserId,
        pid: this.pid,
        pagesize: this.pagesize
      });
      var url = "http://192.168.1.188:8035/API/GetUserData.ashx";
      this.axios.post(url, params).then(res => {
        this.$set(res.data.Result[0], "off", false);
        this.item = res.data.Result[0];
      });
    },
    // 修改状态
    handXxztxg: function () {
      let params = this.qs.stringify({
        action: "SetXiaoxiType",
        textcount: this.textcount,
        type: 2
      });
      var url = "http://192.168.1.188:8035/API/GetUserData.ashx";
      this.axios.post(url, params).then(res => {
        console.log(res);
      });
    },
    handSee: function () {
      // 展开效果
      this.$set(this.item, "off", !this.item.off)
      if (this.item.Num == 1) {
        return
      } else {
        this.$set(this.item, "Num", 1);
        this.textcount = this.item.TextId
        this.handXxztxg();
      }
      console.log(this.item.Num);
      console.log(this.textcount);
    },
    // 获取应用列表
    InforTcList: function () {
      var UserId = localStorage.getItem('UserId')
      var url = "http://192.168.1.188:8035/API/GetUserData.ashx";
      let postData = this.qs.stringify({
        action: "GetOrderDetails",
        UserId: UserId,
        pid: 1,
        psize: 999
      })
      this.axios.post(url, postData).then(res => {
        console.log(res.data.Result.length);
        this.APPlength = res.data.Result.length;
      })
    },
    // 获取用户信息
    Information: function () {
      var UserId = localStorage.getItem('UserId')
      let params = this.qs.stringify({
        action: "withdrawIndex",
        userid: UserId
      });
      var url = "http://192.168.1.188:8035/API/GetUserData.ashx";
      this.axios.post(url, params).then(res => {
        this.user = res.data.Result;
      });
    },
    // 开始时间
    openByDrop (e) {
      this.calendar3.show = true;
      this.calendar3.top = e.target.offsetTop + 70;
      e.stopPropagation();
      window.setTimeout(() => {
        document.addEventListener(
          "click",
          e => {
            this.calendar3.show = false;
            document.removeEventListener("click", () => { }, false);
          },
          false
        );

      }, 1000);
    },
    // 结束时间

    openByDrop1 (e) {
      this.calendar4.show = true;
      this.calendar4.top = e.target.offsetTop + 70;
      e.stopPropagation();
      window.setTimeout(() => {
        document.addEventListener(
          "click",
          e => {
            this.calendar4.show = false;
            document.removeEventListener("click", () => { }, false);
          },
          false
        );

      }, 1000);

      // this.record()
    },

    record () {
      let myDate = new Date().toLocaleDateString();
      let url = "http://192.168.1.188:8035/API/GetUserData.ashx";
      let UserId = localStorage.getItem("UserId");
      let postData = this.qs.stringify({
        action: "GetRecordList",
        UserId: UserId,
        pid: 1,
        psize: 10,
        BeginTime: this.calendar3.display,
        EndTime: this.calendar4.display
      });
      this.axios.post(url, postData).then(res => {
        this.list = res.data.Result;
      });
    }
  },
  watch: {}
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
.mian .banxin .mian_right {
  flex: 1;
}

.Overview_data {
  background: #fff;
  margin-left: 15px;
  padding: 25px 28px;
  display: flex;
  justify-content: space-between;
}
.Overview_data .Overview_data_top {
  width: 35%;
}
.Overview_data .Overview_data_top .Overview_data_top_tx {
  display: flex;
}
.Overview_data .Overview_data_top .Overview_data_top_tx > img {
  width: 72px;
  height: 72px;
}
.Overview_data
  .Overview_data_top
  .Overview_data_top_tx
  .Overview_data_top_tx_right {
  flex: 1;
  margin-left: 21px;
  display: flex;
  flex-direction: column;
}
.Overview_data
  .Overview_data_top
  .Overview_data_top_tx
  .Overview_data_top_tx_right
  span {
  margin-top: 7px;
  height: 25px;
  font-size: 24px;
  font-family: MicrosoftYaHei-Bold;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  line-height: 25px;
  margin-bottom: 15px;
}
.Overview_data
  .Overview_data_top
  .Overview_data_top_tx
  .Overview_data_top_tx_right
  span:nth-child(2) {
  height: 15px;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 15px;
}
.Overview_data
  .Overview_data_top
  .Overview_data_top_tx
  .Overview_data_top_tx_right
  .Overview_data_top_tx_right_tb {
  display: flex;
}
.Overview_data
  .Overview_data_top
  .Overview_data_top_tx
  .Overview_data_top_tx_right
  .Overview_data_top_tx_right_tb
  img {
  width: 20px;
  height: 20px;
}
.Overview_data
  .Overview_data_top
  .Overview_data_top_tx
  .Overview_data_top_tx_right
  .Overview_data_top_tx_right_tb
  img:nth-child(2) {
  margin-left: 35px;
}

.Overview_data .Overview_data_top .Overview_data_bottom {
  display: flex;
  margin-top: 27px;
  height: 34px;
}
.Overview_data .Overview_data_top .Overview_data_bottom input {
  width: 170px;
  height: 34px;
  background: rgba(255, 255, 255, 1);
  border: 2px solid rgba(147, 147, 147, 1);
  font-size: 16px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  text-align: center;
}
.Overview_data
  .Overview_data_top
  .Overview_data_bottom
  .Overview_data_bottom_btn {
  width: 84px;
  height: 36px;
  background: rgba(37, 143, 252, 1);
  border-radius: 17px;
  margin-left: 20px;
  text-align: center;
  line-height: 36px;
  font-size: 16px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}

.Overview_data .Overview_data_right {
  width: 30%;
  padding-top: 7px;
}
.Overview_data .Overview_data_right .Overview_data_right_yu {
  display: flex;
  justify-content: space-between;
}
.Overview_data .Overview_data_right .Overview_data_right_yu > span {
  height: 21px;
  font-size: 20px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 21px;
}
.Overview_data
  .Overview_data_right
  .Overview_data_right_yu
  > span:nth-child(2) {
  height: 15px;
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 15px;
  margin-top: 5px;
}
.Overview_data .Overview_data_right .Overview_data_right_pirce {
  height: 22px;
  font-size: 28px;
  font-family: MicrosoftYaHei-Bold;
  font-weight: bold;
  color: rgba(37, 143, 252, 1);
  margin: 25px 0;
}
.Overview_data .Overview_data_right .Overview_data_right_btn {
  display: flex;
  width: 190px;
  justify-content: space-between;
}
.Overview_data
  .Overview_data_right
  .Overview_data_right_btn
  .Overview_data_right_btn1 {
  width: 84px;
  height: 32px;
  background: rgba(37, 143, 252, 1);
  border-radius: 16px;
  text-align: center;
  line-height: 32px;
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.Overview_data
  .Overview_data_right
  .Overview_data_right_btn
  .Overview_data_right_btn2 {
  width: 84px;
  height: 32px;
  border: 1px solid rgba(37, 143, 252, 1);
  border-radius: 16px;
  line-height: 32px;
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: #000;
  text-align: center;
  line-height: 32px;
}

.Overview_item {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
  margin-left: 15px;
}
.Overview_item > .item {
  width: 300px;
  height: 140px;
  background-image: url("../../assets/send1.png");
  background-size: 335px 140px;
  padding-left: 34px;
}
.Overview_item > .item:nth-child(2) {
  background-image: url("../../assets/send2.png");
}
.Overview_item > .item:nth-child(3) {
  background-image: url("../../assets/send3.png");
}
.Overview_item > .item .item_xian {
  width: 33px;
  height: 2px;
  background: rgba(255, 255, 255, 1);
  margin-top: 34px;
}
.Overview_item > .item .item_z {
  margin-top: 6px;
  height: 18px;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(254, 254, 254, 0.8);
  line-height: 18px;
}
.Overview_item > .item .item_num {
  height: 30px;
  font-size: 36px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 30px;
  margin-top: 24px;
}
.Overview_item > .item .item_num span {
  font-size: 16px;
  margin-left: 6px;
}
.xiaoxi {
  margin-left: 15px;
  background: #fff;
  overflow: hidden;
  padding-bottom: 42px;
}
.xiaoxi .xiaoxi_title {
  height: 24px;
  font-size: 24px;
  font-family: MicrosoftYaHei-Bold;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  line-height: 24px;
  margin-top: 20px;
  margin-left: 20px;
}
.xiaoxi_item {
  margin-top: 26px;
  padding-left: 15px;
  display: flex;
  overflow: hidden;
}
.xiaoxi_item .yuan {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #cccccc;
  margin-right: 25px;
}
.mian .item .yuan1 {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #258ffc;
  margin-right: 25px;
  margin-top: 3px;
}
.xiaoxi_item .item_right {
  flex: 1;
}
.xiaoxi_item .item_right .notice {
  display: flex;
}
.xiaoxi_item .item_right .notice .text {
  width: 80px;
  height: 20px;
  font-size: 20px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  margin-right: 40px;
  line-height: 20px;
}
.xiaoxi_item .xian {
  width: 50%;
  height: 2px;
  background-color: #ccc;
  margin-top: 10px;
  margin-right: 10px;
} /*  */
.xiaoxi_item .item_right .notice img {
  width: 15px;
  height: 15px;
  margin-right: 10px;
}
.xiaoxi_item .item_right .notice .time {
  font-size: 20px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  height: 20px;
  line-height: 20px;
}
.xiaoxi_item .item_right .xia {
  width: 100%;
  height: 22px;
  font-size: 22px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 22px;
  margin-top: 23px;
}

.Overview_date {
  margin-left: 15px;
  flex: 1;
  margin-top: 15px;
  padding: 24px 0 0 20px;
  background: #fff;
}
.Overview_date .Overview_date_title {
  height: 24px;
  font-size: 24px;
  font-family: MicrosoftYaHei-Bold;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  line-height: 24px;
}
.Overview_date .Overview_date_nian {
  height: 70px;
  background: rgba(249, 249, 249, 1);
  position: relative;
  margin-top: 7px;
  display: flex;
}
.Overview_date .Overview_date_nian > .dian {
  width: 6px;
  height: 6px;
  background: rgba(0, 0, 0, 1);
  border-radius: 50%;
  position: absolute;
  top: 48%;
  left: 44px;
}
.Overview_date .Overview_date_nian .dian:nth-of-type(2) {
  position: absolute;
  top: 48%;
  left: 227px;
}
.Overview_date .Overview_date_nian .Overview_date_ri {
  font-size: 20px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 70px;
  margin-left: 83px;
}
.Overview_date .Overview_date_nian .Overview_date_yue {
  width: 36px;
  height: 36px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 6px 0px rgba(63, 26, 9, 0.6);
  border-radius: 50%;
  text-align: center;
  line-height: 36px;
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  margin: 16px 0 0 93px;
}
.Overview_date .Overview_date_nian .Overview_date_coco {
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 70px;
  margin-left: 30px;
}
.Overview_date .Overview_date_nian > a {
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(37, 143, 252, 1);
  line-height: 70px;
  margin-left: 67px;
  cursor: pointer;
}

.Overview_date .Overview_date_type {
  width: 100%;
  margin: 0 auto;
  padding-bottom: 30px;
}
.Overview_date .Overview_date_type .Overview_date_type_item {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  margin-bottom: 40px;
}
.Overview_date
  .Overview_date_type
  .Overview_date_type_item
  .Overview_date_type_list1 {
  text-align: center;
  line-height: 20px;
  height: 20px;
  flex: 1;
}
.Overview_date
  .Overview_date_type
  .Overview_date_type_item
  .Overview_date_type_list1
  span {
  color: #ff721f;
}
.Overview_date
  .Overview_date_type
  .Overview_date_type_item
  .Overview_date_type_list1
  .coclor {
  color: #3368bf;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-in-out;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: translateY(-10px);
}

/*下拉框*/
.calendar-dropdown {
  background: #fff;
  position: absolute;
  left: 0;
  top: 0;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 2px;
}
.calendar-dropdown:before {
  position: absolute;
  left: 30px;
  top: -10px;
  content: "";
  border: 5px solid rgba(0, 0, 0, 0);
  border-bottom-color: #dedede;
}
.calendar-dropdown:after {
  position: absolute;
  left: 30px;
  top: -9px;
  content: "";
  border: 5px solid rgba(0, 0, 0, 0);
  border-bottom-color: #fff;
}

/*弹出框*/
.calendar-dialog {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}

.calendar-dialog-mask {
  background: rgba(255, 255, 255, 0.5);
  width: 100%;
  height: 100%;
}

.calendar-dialog-body {
  background: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 2px;
}
</style>

