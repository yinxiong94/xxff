<template>
  <div class="withdrawal">
    <Header :coou="3"></Header>
    <div class="search_withdrawal">
      <div class="search aa">
        <img src="../assets/search.png" alt />
        <input type="text" placeholder="搜索您的应用" />
        <img src="../assets/chacha.png" alt />
      </div>
      <div class="searchTwo">
        <div class="One">
          <span>全部</span>
          <img src="../assets/daosanjiao.png" alt />
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
      <div class="searchTwoTwo">
        <div class="lanmuOne flex">
          <div class="ContentOne">
            <div class="flexOne">
              <img src="../assets/apple.png" alt />
              <span>IOS</span>
            </div>
          </div>
          <div class="ContentTwo">
            <img src="../assets/xiaohongshu.png" alt />
          </div>
          <div class="Contentthree">
            <div class="textCenterTwo">
              <span class>小红书APP</span>
              <span class="gray">更新时间：</span>
              <span class="gray">2019-04-11</span>
              <span class="gray">23:22</span>
            </div>
            <div class="flexTwo textCenterTwoSpan">
              <span class="blue">更新</span>
              <span class="green">编辑</span>
              <span class="yellow">预览</span>
              <span class="red">删除</span>
            </div>
          </div>
        </div>
        <div class="lanmuTwo">
          <span class="textCenter">1.0.3XXX</span>
        </div>
        <div class="lanmuThree">
          <span class="textCenter">999</span>
        </div>
        <div class="lanmuFour">
          <span class="textCenter">pppppppppp</span>
          <img class="textCenter" src="../assets/erweima.png" alt />
        </div>
      </div>
      <div class="pagination">
        <el-pagination background layout="prev, pager, next" :total="10" :size="100"></el-pagination>
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
  },
  data() {
    return {
      
    }
  },
  created(){
    this.obtain()
  },
  methods: {
    obtain(){
      var url = "http://192.168.1.188:8035/API/GetUserData.ashx";
      this.axios.post(url).then(res=>{
          console.log(res)
      })
    },
  },
};

</script>

<style scoped>
.pagination {
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
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
.lanmuTwo,
.lanmuThree,
.lanmuFour {
  text-align: center;
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
}
.green {
  background: forestgreen;
  margin-right: 20px;
}
.yellow {
  background: darkgoldenrod;
  margin-right: 20px;
}
.red {
  background: darksalmon;
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