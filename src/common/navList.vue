<template>
  <div class="navList">
    <ul>
      <li v-for="item  in list"
          v-bind:key="item.id"
          :data-index="item.id"
          :class="item.off?' blue':''"
          v-on:click="Jump($event)">
        {{item.title}}
        <img :src="item.off?item.Selection:item.noSelection"
             alt />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['cities'],
  data () {
    return {
      list: [
        {
          id: 0,
          title: "账户总览",
          Selection: require("../assets/nav11.png"),
          noSelection: require("../assets/nav1.png"),
          off: false
        },
        {
          id: 1,
          title: "我的钱包",
          Selection: require("../assets/nav12.png"),
          noSelection: require("../assets/nav2.png"),
          off: false
        },
        {
          id: 2,
          title: "修改资料",
          Selection: require("../assets/nav13.png"),
          noSelection: require("../assets/nav3.png"),
          off: false
        },
        {
          id: 3,
          title: "我的优惠券",
          Selection: require("../assets/nav14.png"),
          noSelection: require("../assets/nav4.png"),
          off: false
        },
        {
          id: 4,
          title: "我的消息",
          Selection: require("../assets/nav15.png"),
          noSelection: require("../assets/nav5.png"),
          off: false
        }
        // {
        //   id: 5,
        //   title: "交易明细",
        //   Selection: require("../assets/nav6.png"),
        //   noSelection: require("../assets/nav16.png"),
        //   off: false
        // }
      ],
      index: 0
    };
  },
  methods: {
    Jump: function (e) {
      let index = e.target.dataset.index;
      this.index = index;
      for (let i = 0; i < this.list.length; i++) {
        if (index == i) {
          this.list[index].off = true;
        } else {
          this.list[i].off = false;
        }
      }
      index == 0
        ? this.$router.push({ path: "/Overview" })
        : index == 1
          ? this.$router.push({ path: "/withdrawal" })
          : index == 2
            ? this.$router.push({ path: "/modify" })
            : index == 3
              ? this.$router.push({ path: "/amend" }) :
              index == 4 ? this.$router.push({ path: "/news" }) : ""
        ;
    }
  },
  created () {
    for (let i = 0; i < this.list.length; i++) {
      if (this.cities == i) {
        this.list[this.cities].off = true;
      } else {
        this.list[i].off = false;
      }
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
ul,
ol {
  list-style: none;
}
.banxin {
  min-width: 1200px;
  max-width: 1200px;
  margin: 0 auto;
}
.navList {
  width: 164px;
  background: #fff;
  height: 434px;
}
.navList ul {
  display: flex;
  flex-direction: column;
}
.navList ul li {
  height: 62px;
  text-align: center;
  line-height: 62px;
  font-size: 16px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  border-bottom: 1px solid #f1efee;
  position: relative;
}
.navList ul .blue {
  background: #258ffc;
  color: #fff !important;
}
.navList ul li img {
  width: 37px;
  height: 37px;
  position: absolute;
  left: 2px;
  top: 11px;
}
</style>
