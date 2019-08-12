<template>
  <div class="withdrawal">
    <headWoke></headWoke>
    <div class="mian">
      <dir class="banxin">
        <navList :cities='3'></navList>
        <div class="wallet">
          <div class="wallet1">
            <div class="wallet_top">
              <p class="wallet_top_text">我的优惠劵</p>
            </div>
            <div class="wallet_top1">
              <p class="wallet_top_mg">全部</p>
              <p>失效优惠劵</p>
            </div>
          </div>
          <div class="wallet2">
            <span>优惠券名称/来源</span>
            <span>优惠金额</span>
            <span>有效期</span>
            <span>状态</span>
          </div>
          <div class="wallet3">
            <div class="wallet3_list">
              <div class="wallet3_hb">
                <img src="../assets/chengg.png"
                     alt />
                <span>新人推荐优惠卷</span>
              </div>
              <div class="wallet3_hb">
                <span class="wallet3_cl">￥30</span>
              </div>
              <div class="wallet3_hb wallet3_hb1">
                <span>2019-07-01 00:00:00 开始</span>
                <span>2019-07-31 23:59:59 截止</span>
              </div>
              <div class="wallet3_hb wallet3_hb1">
                <span>待使用</span>
              </div>
            </div>
            <div class="wallet3_list">
              <div class="wallet3_hb">
                <img src="../assets/chengg.png"
                     alt />
                <span>新人推荐优惠卷</span>
              </div>
              <div class="wallet3_hb">
                <span class="wallet3_cl">￥30</span>
              </div>
              <div class="wallet3_hb wallet3_hb1">
                <span>2019-07-01 00:00:00 开始</span>
                <span>2019-07-31 23:59:59 截止</span>
              </div>
              <div class="wallet3_hb wallet3_hb1">
                <span>待使用</span>
              </div>
            </div>
            <div class="wallet3_list">
              <div class="wallet3_hb">
                <img src="../assets/chengg.png"
                     alt />
                <span>新人推荐优惠卷</span>
              </div>
              <div class="wallet3_hb">
                <span class="wallet3_cl">￥30</span>
              </div>
              <div class="wallet3_hb wallet3_hb1">
                <span>2019-07-01 00:00:00 开始</span>
                <span>2019-07-31 23:59:59 截止</span>
              </div>
              <div class="wallet3_hb wallet3_hb1">
                <span>待使用</span>
              </div>
            </div>
            <div class="wallet3_list">
              <div class="wallet3_hb">
                <img src="../assets/chengg.png"
                     alt />
                <span>新人推荐优惠卷</span>
              </div>
              <div class="wallet3_hb">
                <span class="wallet3_cl">￥30</span>
              </div>
              <div class="wallet3_hb wallet3_hb1">
                <span>2019-07-01 00:00:00 开始</span>
                <span>2019-07-31 23:59:59 截止</span>
              </div>
              <div class="wallet3_hb wallet3_hb1">
                <span>待使用</span>
              </div>
            </div>
            <div class="wallet3_list">
              <div class="wallet3_hb">
                <img src="../assets/chengg.png"
                     alt />
                <span>新人推荐优惠卷</span>
              </div>
              <div class="wallet3_hb">
                <span class="wallet3_cl">￥30</span>
              </div>
              <div class="wallet3_hb wallet3_hb1">
                <span>2019-07-01 00:00:00 开始</span>
                <span>2019-07-31 23:59:59 截止</span>
              </div>
              <div class="wallet3_hb wallet3_hb1">
                <span>待使用</span>
              </div>
            </div>
            <div class="wallet3_list wallet3_list_fy">
              <el-pagination background
                             layout="prev, pager, next"
                             :total="100"
                             size="4"></el-pagination>
            </div>
          </div>
        </div>
      </dir>
    </div>
    <tail></tail>
  </div>
</template>

<script>
import headWoke from "../common/header.vue";
import navList from "../common/navList.vue";
import tail from "../common/tail";
export default {
  components: {
    headWoke,
    navList,
    tail
  }
};
</script>
<style>
body {
  background: #f1efee;
}
.mian {
  margin-top: 30px;
  margin-bottom: 350px;
}
.mian .banxin {
  display: flex;
}
.wallet {
  flex: 1;
  margin-left: 15px;
  height: 100px;
}
.wallet1 {
  background: #fff;
  padding: 0 20px;
}
.wallet_top {
  height: 60px;
  display: flex;
  align-items: center;
}
.wallet_top {
  border-bottom: 1px solid rgb(211, 210, 209);
}
.wallet_top_text {
  color: #333333;
  font-size: 22px;
}
.wallet_top1 {
  display: flex;
  height: 40px;
  display: flex;
  align-items: center;
}
.wallet_top_mg {
  margin-right: 20px;
}
.wallet2 > span {
  color: #6e6e6e;
  font-size: 15px;
  padding: 0 20px;
}
.wallet2 {
  display: flex;
  justify-content: space-between;
  height: 30px;
  align-items: center;
}
.wallet3 {
  background: #fff;
  padding: 0 20px;
}
.wallet3_list {
  height: 100px;
  border-bottom: 1px solid #e7e7e7;
  display: flex;
  justify-content: space-between;
}

.wallet3_hb {
  color: #333333;
  font-size: 15px;
  font-weight: bold;
  display: flex;
  align-items: center;
  height: 100%;
}

.wallet3_hb1 {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: normal !important;
}
.wallet3_cl {
  color: red;
}
.wallet3_list_fy {
  align-items: center;
  justify-content: center;
}
</style>


                            


                        