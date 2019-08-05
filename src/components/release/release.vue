<template>
  <div class="release">
    <Header :coou="2"></Header>
    <div class="main">
      <div class="banxin">
        <div class="mian_title">发布应用</div>
        <div class="mian_left">发布应用，仅需两步</div>
      </div>
    </div>
    <div class="mian_content">
      <div class="banxin">
        <div class="upload">
          <div class="upload_iife"
               @click.stop="release">
            <input type="file"
                   id="btn_file"
                   style="display:none" />
            <img src="../../assets/iife.png"
                 alt />
          </div>
          <div class="Notes">
            点击按钮选择应用的安装包，或拖拽文件到此区域
            （支持.ipa或.apk文件，单个文件最大支持
            <span>600M</span> ）
          </div>
        </div>
      </div>
    </div>
    <tail></tail>
  </div>
</template>

<script>
import Header from "../../common/header.vue";
import tail from "../../common/tail.vue";
export default {
  components: {
    Header,
    tail
  },
  data () {
    return {};
  },

  methods: {
    /**
     * 跳转到应用发布
     */
    release () {
      let OrderDetailsII = true;
      localStorage.setItem("OrderDetailsII", OrderDetailsII);
      this.$router.push({ path: "/Application" });
    },


  }
};
</script>

<style>
.main {
  width: 100%;
  height: 76px;
  border-bottom: 1px solid #dfdfdf;
}
.el-upload-dragger {
  width: 100% !important;
  height: 100% !important;
}
.main .banxin {
  width: 75%;
  max-width: 1200px;
  margin: 0 auto;
}
.main .banxin .mian_title {
  font-size: 26px;
  line-height: 76px;
  float: left;
}
.main .banxin .mian_left {
  font-size: 16px;
  float: right;
  line-height: 76px;
  color: #929292;
}
.mian_content {
  height: 946px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.banxin {
  width: 75%;
  max-width: 1200px;
  margin: 0 auto;
}
.banxin .upload {
  width: 100%;
  height: 810px;
  background-color: #dfd9d9;
  position: relative;
}
.banxin .upload .upload_iife {
  width: 18.4%;
  height: 84px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -160%);
}
.banxin .upload .upload_iife img {
  width: 100%;
  height: 84px;
}
.banxin .Notes {
  width: 362px;
  font-size: 15px;
  float: left;
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-44%, -20%);
  color: #919191;
}
.banxin .Notes span {
  color: red;
}
</style>


