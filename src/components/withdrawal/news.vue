<template>
  <div class="news">
    <headWoke></headWoke>
    <div class="mian">
      <div class="banxin">
        <navList :cities='4'></navList>
        <div class="mian_conter">
          <div class="title">
            <h4>我的消息</h4>
          </div>
          <div class="xiaoxi">
            <div class="item"
                 v-for="(item,index) in list"
                 v-bind:key="index">
              <div :class="item.Num == 0? 'yuan1':'yuan'"></div>
              <div class="item_right">
                <div class="notice">
                  <div class="text">消息通知</div>
                  <div class="xian"></div>
                  <img :src="item.off?img1:img"
                       @click="handSee($event)"
                       :data-index='index'
                       alt="" />
                  <div class="time">{{item.AddTime}}</div>
                </div>
                <div class="xia"
                     v-if="item.off">
                  {{item.Text}}
                </div>
              </div>
            </div>
          </div>
          <div class="wallet3_list wallet3_list_fy">
            <el-pagination background
                           layout="prev, pager, next"
                           :total="total"
                           @current-change="handleCurrentChange"
                           :page-size='2'></el-pagination>
          </div>
        </div>
      </div>
    </div>
    <tail></tail>
  </div>
</template>

<script>
import headWoke from '../../common/header.vue'
import navList from '../../common/navList.vue'
import tail from '../../common/tail.vue'
export default {
  components: {
    headWoke,
    navList,
    tail
  },
  data () {
    return {
      pid: 1,
      list: [],
      total: 5,
      img: require('../../assets/right.png'),
      img1: require('../../assets/xia.png'),
      pagesize: 5,
      textcount: ''
    }
  },
  methods: {
    handNews: function () {
      // 消息列表
      var UserId = localStorage.getItem('UserId')
      let params = this.qs.stringify({
        action: "Xiaoxi",
        UserId: UserId,
        psize: this.pagesize,
        pid: this.pid,
      });
      this.axios.post('GetUserData.ashx', params).then(res => {
        console.log(res);
        this.list = res.data.Result;
        this.$set(this.list, "off", false)
        this.total = this.list.length;
      });
    },
    handleCurrentChange (curPage) {
      console.log(curPage)
      this.pid = curPage;
      this.handNews();
    },
    handSee: function (e) {
      // 展开效果
      let index = e.target.dataset.index;
      this.$set(this.list[index], "off", !this.list[index].off)
      if (this.list[index].Num == 1) {
        return
      } else {
        this.list[index].Num = 1;
        this.textcount = this.list[index].TextId

        this.handXxztxg();
      }

    },
    handXxztxg: function () {
      let params = this.qs.stringify({
        action: "SetXiaoxiType",
        textcount: this.textcount,
        type: 2
      });
      this.axios.post('GetUserData.ashx', params).then(res => {
        console.log(res);
      });
    }
  },
  watch: {

  },
  created () {
    this.handNews();
  }
}
</script>

<style>
body {
  background: #f1efee;
}
.wallet3_list {
  height: 100px;
  border-bottom: 1px solid #e7e7e7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
}
input[type="checkbox"] {
  width: 15px;
  height: 15px;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  line-height: 18px;
  position: relative;
  margin-right: 20px;
  margin-top: 3px;
}
input[type="checkbox"]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  width: 100%;
  height: 100%;
  border: 1px solid #d9d9d9;
}
input[type="checkbox"]:checked::before {
  content: "\2713";
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border: 1px solid #258ffc;
  color: #258ffc;
  font-size: 20px;
  font-weight: bold;
}
.mian {
  margin-top: 30px;
}
.mian .banxin {
  display: flex;
}
* {
  margin: 0;
  padding: 0;
}
.mian .mian_conter {
  flex: 1;
  margin: 0 auto;
  padding: 20px 63px 40px 25px;
  background-color: #fff;
  margin-left: 15px;
}
.mian .mian_conter .title {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  padding-bottom: 12px;
}
.mian .mian_conter .title h4 {
  flex: 1;
  font-size: 26px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}
.mian .item {
  margin-top: 26px;
  padding-left: 15px;
  display: flex;
  overflow: hidden;
}
.mian .item .yuan {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #cccccc;
  margin-right: 25px;
  margin-top: 3px;
}
.mian .item .yuan1 {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #258ffc;
  margin-right: 25px;
  margin-top: 3px;
}
.mian .item .item_right {
  flex: 1;
}
.mian .item .item_right .notice {
  display: flex;
}
.mian .item .item_right .notice .text {
  width: 100px;
  height: 26px;
  font-size: 24px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  margin-right: 40px;
  line-height: 26px;
}
.mian .item .item_right .notice .xian {
  width: 490px;
  height: 1px;
  background-color: #ccc;
  margin-top: 14px;
  margin-right: 10px;
}
.mian .item .item_right .notice img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  margin-top: 4px;
}
.mian .item .item_right .notice .time {
  font-size: 16px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  height: 20px;
  margin-top: 4px;
}
.mian .item .item_right .xia {
  width: 100%;
  font-size: 16px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  margin-top: 23px;
}
.mian .mian_conter .mian_footer {
  width: 100%;
  display: flex;
  color: rgba(153, 153, 153, 1);
  margin-top: 45px;
  justify-content: center;
}
.mian .mian_conter .mian_footer .Previous {
  width: 88px;
  height: 34px;
  background: rgba(235, 235, 235, 1);
  text-align: center;
  line-height: 34px;
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  border: 1px solid rgba(235, 235, 235, 1);
  cursor: pointer;
}
.mian .mian_conter .mian_footer .center {
  display: flex;
}
.mian .mian_conter .mian_footer .center .item1 {
  width: 34px;
  height: 34px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(235, 235, 235, 1);
  text-align: center;
  line-height: 34px;
  margin: 0 10px;
}
.mian .mian_conter .mian_footer .center .item2 {
  width: 34px;
  height: 34px;
  background: rgba(255, 255, 255, 1);
  text-align: center;
  line-height: 34px;
  margin: 0 10px;
}
</style>
