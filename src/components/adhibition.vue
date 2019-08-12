<template>
  <div class="withdrawal">
    <Header :coou="3"></Header>

    <div class="search_withdrawal"
         v-if="show">
      <div class="search aa">
        <img src="../assets/search.png"
             alt />
        <input type="text"
               placeholder="搜索您的应用"
               v-model="val"
               @input="jumpcx" />
        <img src="../assets/chacha.png"
             alt />
      </div>
      <div class="searchTwo">
        <div class="One">
          <span>全部</span>
          <img src="../assets/daosanjiao.png"
               alt />
        </div>
        <div class="Two">
          <span>发布</span>
          <span>/</span>
          <span>更新应用</span>
        </div>
      </div>
      <div class="searchTwo searchBack">
        <span class="lanmuOne">应用名称</span>
        <span class="lanmuTwo">版本</span>
        <span class="lanmuThree">下载次数</span>
        <span class="lanmuFour">下载方式</span>
      </div>
      <div class="searchTwoTwo"
           v-for="(item,index) in list"
           :key="index">
        <div class="lanmuOne flex">
          <div class="ContentOne">
            <!-- <div class="flexOne">
              <img src="../assets/apple.png" alt />
              <span>IOS</span>
            </div>-->
          </div>
          <div class="ContentTwo">
            <img :src="item.OrderDetailsImg"
                 alt />
          </div>
          <div class="Contentthree">
            <div class="textCenterTwo">
              <span class>{{item.OrderDetailsName}}</span>
              <span class="gray">更新时间：</span>
              <span class="gray">{{item.showtime}}</span>
              <!-- <span class="gray">23:22</span> -->
            </div>
            <div class="flexTwo textCenterTwoSpan">
              <span class="blue"
                    :data-ccg="index"
                    @click="jsee($event)">更新</span>
              <span class="green"
                    :data-index="index"
                    @click="det($event)">预览</span>
              <!-- <span class="yellow">预览</span> -->
              <span class="red"
                    :data-OrderDetailsId="item.OrderDetailsId"
                    @click="jumpdel($event)">删除</span>
            </div>
          </div>
        </div>
        <div class="lanmuTwo">
          <span class="textCenter">{{item.VersionNum}}</span>
        </div>
        <div class="lanmuThree">
          <span class="textCenter">{{item.XiazaiNum}}</span>
        </div>
        <el-dropdown>
          <div class="lanmuFour">
            <span class="textCenter">pppppppppp</span>
            <img class="textCenter"
                 src="../assets/erweima.png"
                 alt />
          </div>
          <el-dropdown-menu slot="dropdown">
            <img :src="item.Ytubiao"
                 alt
                 class="lanmuFour_img" />
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="pagination">
        <el-pagination background
                       layout="prev, pager, next"
                       :total="10"
                       :size="100"></el-pagination>
      </div>
    </div>

    <div v-if="heide"
         class="heide">您还没有应用哦~</div>
    <Tail class="tail"></Tail>
  </div>
</template>
<script>
import Header from "../common/header";
import Tail from "../common/tail";
export default {
  components: {
    Header,
    Tail
  },
  data () {
    return {
      list: [],//列表
      val: "", //用户输入的
      show: false,
      heide: true,
    };
  },
  created () {
    this.obtain();
  },
  methods: {
    jsee (e) {
      let index = e.currentTarget.dataset.ccg;
      let OrderDetailsII = this.list[index].OrderDetailsId;
      localStorage.setItem("OrderDetailsII", OrderDetailsII);
      this.$router.push('/Application')
    },
    det (e) {
      let index = e.currentTarget.dataset.index;
      let OrderDetailsId = this.list[index].OrderDetailsId;
      localStorage.setItem("OrderDetailsId", OrderDetailsId);
      this.$router.push('/details')
    },
    obtain (val) {
      // let input1 = this.$refs.input1.value;
      let UserId = localStorage.getItem("UserId");
      let postData = this.qs.stringify({
        action: "GetOrderDetails",
        UserId: UserId,
        pid: 1,
        psize: 10,
        name: val
      });
      this.axios.post("GetUserData.ashx", postData).then(res => {
        if (res.data.Result.length == 0) {
          this.heide = true;
          this.show = false
        } else {
          this.heide = false;
          this.show = true
        }
        this.list = res.data.Result;
      });
    },
    // 搜索
    jumpcx () {
      this.obtain(this.val)
    },
    // 删除应用
    jumpdel (e) {
      let orderdetailsid = e.target.dataset.orderdetailsid;
      let postData = this.qs.stringify({
        action: "Del",
        OrderDetailsId: orderdetailsid
      });
      this.axios.post("GetUserData.ashx", postData).then(res => {
        if (res.data.Result == true) {
          this.$message({
            message: "删除成功",
            type: "success"
          });
          this.obtain();
        } else {
          this.$message({
            showClose: true,
            message: "删除失败请稍后再试",
            type: "error"
          });
        }
      });
    }
  }
};
</script>

<style scoped>
.pagination {
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tail {
  position: fixed;
  bottom: 0;
  width: 100%;
}

.heide {
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0088ff;
  font-size: 30px;
  font-weight: bold;
}
.lanmuFour_img {
  width: 150px;
  height: 150px;
}
.aa {
  display: flex;
}
.search_withdrawal {
  margin-top: 20px;
}

span {
  font-size: 14px;
}
.search {
  width: 80%;
  height: 35px;
  border-radius: 25px;
  margin: 0 auto;
  background: #d1dffb;
  opacity: 0.6;
}
.search > img {
  width: 20px;
  height: 20px;
  margin: 0 10px 0 10px;
  margin-top: 8px;
}
.search > input {
  width: 90%;
  height: 30px;
  border: none;
  background: #d1dffb;
  display: block;
}
.searchTwo {
  width: 80%;
  height: 40px;
  margin: 0 auto;
  display: flex;
  line-height: 40px;
}
.searchTwoTwo {
  width: 80%;
  height: 90px;
  margin: 0 auto;
  display: flex;
  border-bottom: 2px solid #eee;
}
.One {
  width: 50px;
  margin-left: 10px;
  border-bottom: 2px solid #258ffc;
}
.Two {
  margin-left: 20px;
}
.lanmuOne {
  width: 55%;
}
.lanmuTwo {
  width: 15%;
}
.lanmuThree {
  width: 15%;
}
.lanmuFour {
  width: 15%;
}
.lanmuFour img {
  height: 16px;
  width: 15px;
}
.lanmuTwo,
.lanmuThree,
.lanmuFour {
  text-align: center;
  display: flex;
  align-items: center;
  /*justify-content: center; */
  cursor: pointer;
}
.searchBack {
  background: #f2f2f2;
}
.searchBack > span {
  color: #666;
  font-weight: bold;
}
.flex {
  display: flex;
  width: 55%;
}
.flexTwo {
  display: flex;
  width: 100;
}
.ContentOne {
  width: 10%;
}
.ContentTwo {
  width: 15%;
}
.Contentthree {
  width: 75%;
}
.Contentthree > div:first-child > span:first-child {
  font-size: 16px;
  font-weight: bold;
}
.Contentthree > div:last-child > span:first-child,
.Contentthree > div:last-child > span:nth-child(2),
.Contentthree > div:last-child > span:nth-child(3),
.Contentthree > div:last-child > span:last-child {
  color: #fff;
  width: 40px;
  height: 20px;
  display: block;
  text-align: center;
  border-radius: 5px;
}
.blue {
  background: deepskyblue;
  margin-right: 20px;
  cursor: pointer;
}
.green {
  background: forestgreen;
  margin-right: 20px;
  cursor: pointer;
}
.yellow {
  background: darkgoldenrod;
  margin-right: 20px;
  cursor: pointer;
}
.red {
  background: darksalmon;
  cursor: pointer;
}
.textCenter {
  line-height: 80px;
  color: #999;
}
.textCenterTwo {
  margin-top: 15px;
}
.textCenterTwoSpan {
  margin-top: 10px;
}
.gray {
  color: #999;
}
.ContentTwo > img {
  display: block;
  margin-top: 13px;
  width: 60px;
  height: 60px;
}
.flexOne {
  flex-direction: column;
  display: flex;
}
.flexOne > img {
  width: 25px;
  height: 25px;
  display: block;
  margin: 0 auto;
  margin-top: 21px;
}
.flexOne > span {
  text-align: center;
  margin-top: 5px;
  color: #999;
}
.search > img:last-child {
  width: 10px;
  height: 10px;
  margin-top: 14px;
}
</style>