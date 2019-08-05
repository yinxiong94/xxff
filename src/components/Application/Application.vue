<template>
  <div class="Application">
    <headWoke></headWoke>
    <div class="mian">
      <div class="banxin">
        <div class="app">
          <div class="left">
            <div class="left_img">
              <img src="../../assets/anz.png"
                   alt />
            </div>
            <p>安卓应用</p>
          </div>
          <div class="right_app">
            <p class="key">APP &ensp; ID</p>
            <p>APP &ensp; KEY</p>
          </div>
          <div class="right_id">
            <p class="id">1108762215</p>
            <p>S4QyQCGxFwCFTAVX</p>
          </div>
        </div>
        <div class="information">
          <h5>基本信息</h5>
          <div class="information_form">
            <div class="information_name">
              *
              <span>应用名称</span>
              <input class="name"
                     type="text"
                     placeholder="应用名称最多输入20个汉字"
                     ref="input1" />
              <em>输入格式错误!</em>
            </div>
            <div class="informatio_game">
              <div class="game_left">
                *
                <span>应用类型</span>
              </div>
              <div class="game_right">
                <div class="game"
                     :class="{Software:i==index}"
                     v-for="(item,index) in list"
                     :key="item.id"
                     @click.stop="select($event,index)"
                     :data-LeibieId="item.LeibieId">
                  <a class="yuan"
                     @click.stop="select($event,index)"
                     :data-LeibieId="item.LeibieId"></a>
                  {{item.LeibieName}}
                </div>
              </div>
            </div>
            <div class="informatio_Software">
              <div class="left">
                *
                <span>应用子分类</span>
              </div>
              <div class="right">
                <select name
                        id="right_bei"
                        @change="selAll($event)">
                  <option :value="item.LeibieName"
                          v-for="item in arr"
                          :key="item.Pid">{{item.LeibieName}}</option>
                </select>
              </div>
            </div>

            <div class="informatio_brief">
              <div class="left">
                *
                <span>应用简介</span>
              </div>
              <div class="right">
                <div class="chebox"
                     contenteditable="true"
                     @input="changeText"></div>
              </div>
            </div>
            <div class="brief"
                 id="informatio_v">
              <div class="left">
                *
                <span>版本号</span>
              </div>
              <div class="right">
                <input type="text"
                       placeholder="最多输入10个字符不能输入中文"
                       ref="input3" />
              </div>
              <em>输入格式错误!</em>
            </div>
            <div class="brief"
                 id="brief">
              <div class="left">
                *
                <span>一句话简介</span>
              </div>
              <div class="right">
                <input type="text"
                       placeholder="一句话简介（5至15个汉字）"
                       ref="input2" />
              </div>
              <em>输入格式错误!</em>
            </div>
          </div>
        </div>
        <div class="information_1">
          <h5>安装包</h5>
          <div class="information_1_app">
            <div class="information_1_left">
              *
              <span>应用子分类</span>
            </div>

            <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                       list-type="picture-card"
                       :before-upload="beforeAvatarUpload"
                       :headers="headers"
                       :on-preview="handlePictureCardPreview"
                       :on-remove="handleRemove"
                       :limit="1">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%"
                   :src="dialogImageUrl"
                   alt />
            </el-dialog>

            <div class="information_1_right">
              <!-- <el-upload action="#" :before-upload="beforeAvatarUpload" :headers="headers">
                <div class="information_1_img">
                  <img src="../../assets/zu.png" alt />
                </div>
              </el-upload>-->
              <span>（限100M以内安装包，参数）</span>
            </div>
          </div>
          <div class="information_1_app">
            <div class="information_1_left">
              *
              <span>应用图标</span>
            </div>

            <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                       list-type="picture-card"
                       :before-upload="beforeAvatarUpload1"
                       :headers="headers"
                       :on-preview="handlePictureCardPreview"
                       :on-remove="handleRemove"
                       :limit="1">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%"
                   :src="dialogImageUrl"
                   alt />
            </el-dialog>
            <div class="information_1_right">
              <!-- <div class="information_1_img">
                <img src="../../assets/zu.png" alt />
              </div>-->
              <span>（尺寸160*160，大小200K以内）</span>
            </div>
          </div>
          <div class="information_1_app">
            <div class="information_1_left">
              <span>应用截图</span>
            </div>

            <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                       list-type="picture-card"
                       :before-upload="beforeAvatarUpload2"
                       :headers="headers"
                       :on-preview="handlePictureCardPreview"
                       :on-remove="handleRemove"
                       :limit="5">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%"
                   :src="dialogImageUrl"
                   alt />
            </el-dialog>
            <div class="information_1_right">
              <!-- <div class="information_1_right_flex">
                <div class="information_1_img doutu">
                  <img src="../../assets/zu.png" alt />
                </div>
              </div>-->
              <span>（请上传2-5张截图（尺寸保持一致），单张图片不超过1M。截图不能小于320*480像素，推荐480*800像素。JPG、PNG格式)</span>
            </div>
          </div>
        </div>
        <div class="information_1 two">
          <h5>版权证明</h5>
          <div class="information_1_app">
            <div class="information_1_left">
              <span>版权证明</span>
            </div>

            <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                       list-type="picture-card"
                       :before-upload="beforeAvatarUpload3"
                       :headers="headers"
                       :on-preview="handlePictureCardPreview"
                       :on-remove="handleRemove"
                       :limit="5">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%"
                   :src="dialogImageUrl"
                   alt />
            </el-dialog>

            <div class="information_1_right">
              <!-- <div class="information_1_img">
                <img src="../../assets/zu.png" alt />
              </div>-->
              <span>（软件著作权证、商标注册证、ICP经营许可证或其他行业相关的经营许可证）</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="Release">
      <div class="Release_box">
        <div class="Release_left fl">返回</div>
        <div class="Release_right fr"
             @click="issue">发布</div>
        <div class="Release_right"></div>
      </div>
    </div>
    <tail></tail>
  </div>
</template>

<script>
import headWoke from "../../common/header.vue";
import tail from "../../common/tail.vue";
export default {
  components: {
    headWoke,
    tail
  },
  data () {
    return {
      list: [],
      i: 0,
      arr: [],
      fileList: [],
      headers: {
        "Content-Type": "multipart/form-data"
      },
      dialogImageUrl: "",
      dialogVisible: false,
      limit: 1,
      ProductActive: "", //当前选中项
      LeibieId: "", //应用子分类id
      changeText1: "", //应用简介
      zfl: "", //子分类应用
      zfl1: "", //应用图片
      zfl2: "", //应用截图
      zfl3: "", //版权说明
      size: "" //应用包大小
    };
  },
  mounted () {
    this.initialize();
    this.newImport4();
  },
  methods: {
    changeText (e) {
      this.changeText1 = e.target.innerHTML;
    },

    initialize () {
      let url = "http://192.168.1.188:8035/API/GetUserData.ashx";
      var postData = this.qs.stringify({
        action: "GetLeibie",
        FathId: "0"
      });
      this.axios.post(url, postData).then(res => {
        this.list = res.data.Result;
      });
    },

    select (e, index) {
      // 获取LeibieId
      let LeibieId = e.target.getAttribute("data-LeibieId");
      this.LeibieId = LeibieId;
      this.i = index;
      let url = "http://192.168.1.188:8035/API/GetUserData.ashx";
      var postData = this.qs.stringify({
        action: "GetLeibie",
        FathId: LeibieId
      });
      this.axios.post(url, postData).then(res => {
        // console.log(res.data.Result);
        // this.list = res.data.Result
        this.arr = res.data.Result;
      });
    },

    /**
     * 文件上传
     */
    // 获取当前选中项
    selAll (e) {
      this.ProductActive = event.target.value;
    },
    beforeAvatarUpload (file) {
      var fileName = new Array();
      fileName = file.name.split(".");
      // 获取上传文件的格式
      const extension = fileName[fileName.length - 1] === "apk";
      const extension2 = fileName[fileName.length - 1] === "ipa";
      // 获取上传文件的大小
      this.size = file.size;
      const isLt2M = file.size / 1024 / 1024 <= 100;
      if (!extension && !extension2) {
        this.$message({
          message: "上传应用只能是apk、ipa格式!",
          type: "warning"
        });
        return;
      }

      if (!isLt2M) {
        this.$message({
          message: "上传应用大小不能超过 100MB!",
          type: "warning"
        });
        return;
      }

      let fd = new FormData();
      fd.append("file", file);
      this.newImport(fd);
    },
    beforeAvatarUpload1 (file) {
      var fileName = new Array();
      fileName = file.name.split(".");
      // 获取上传文件的格式
      const extension = fileName[fileName.length - 1] === "jpg";
      const extension2 = fileName[fileName.length - 1] === "png";
      // 获取上传文件的大小
      const isLt2M = file.size / 1024 / 1024 <= 1;
      if (!extension && !extension2) {
        this.$message({
          message: "上传应用只能是jpg、png格式!",
          type: "warning"
        });
        return;
      }

      if (!isLt2M) {
        this.$message({
          message: "上传应用大小不能超过 1M!",
          type: "warning"
        });
        return;
      }

      let fd = new FormData();
      fd.append("file", file);
      this.newImport1(fd);
    },
    beforeAvatarUpload2 (file) {
      var fileName = new Array();
      fileName = file.name.split(".");
      // 获取上传文件的格式
      const extension = fileName[fileName.length - 1] === "jpg";
      const extension2 = fileName[fileName.length - 1] === "png";
      // 获取上传文件的大小
      const isLt2M = file.size / 1024 / 1024 <= 1;
      if (!extension && !extension2) {
        this.$message({
          message: "上传应用只能是jpg、png格式!",
          type: "warning"
        });
        return;
      }

      if (!isLt2M) {
        this.$message({
          message: "上传应用大小不能超过 1M!",
          type: "warning"
        });
        return;
      }

      let fd = new FormData();
      fd.append("file", file);
      this.newImport2(fd);
    },
    beforeAvatarUpload3 (file) {
      var fileName = new Array();
      fileName = file.name.split(".");
      // 获取上传文件的格式
      const extension = fileName[fileName.length - 1] === "jpg";
      const extension2 = fileName[fileName.length - 1] === "png";
      // 获取上传文件的大小
      const isLt2M = file.size / 1024 / 1024 <= 1;
      if (!extension && !extension2) {
        this.$message({
          message: "上传应用只能是jpg、png格式!",
          type: "warning"
        });
        return;
      }

      if (!isLt2M) {
        this.$message({
          message: "上传应用大小不能超过 1M!",
          type: "warning"
        });
        return;
      }

      let fd = new FormData();
      fd.append("file", file);
      this.newImport3(fd);
    },
    handleRemove (file, fileList) {
      console.log(file, fileList);
    },

    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },

    newImport (data) {
      let url = "http://192.168.1.188:8035/API/FileUpLoad.ashx";
      this.axios.post(url, data).then(res => {
        this.zfl = res.data.Result.url;
      });
    },

    newImport1 (data) {
      let url = "http://192.168.1.188:8035/API/FileUpLoad.ashx";
      this.axios.post(url, data).then(res => {
        this.zfl1 = res.data.Result.url;
      });
    },

    newImport2 (data) {
      let url = "http://192.168.1.188:8035/API/FileUpLoad.ashx";
      this.axios.post(url, data).then(res => {
        this.zfl2 = res.data.Result.url;
      });
    },

    newImport3 (data) {
      let url = "http://192.168.1.188:8035/API/FileUpLoad.ashx";
      this.axios.post(url, data).then(res => {
        this.zfl3 = res.data.Result.url;
      });
    },
    newImport4 () {

    },
    issue () {
      let OrderDetailsII = localStorage.getItem("OrderDetailsII");
      if (OrderDetailsII) {
        let input1 = this.$refs.input1.value; //安装包名称
        let input2 = this.$refs.input2.value; //一句话简介
        let input3 = this.$refs.input3.value; //应用版本号
        var UserId = localStorage.getItem("UserId");
        let url = "http://192.168.1.188:8035/API/GetUserData.ashx";
        let postData = this.qs.stringify({
          action: "shangchuan",
          UserId: UserId,
          name: input1,
          fenlei: this.ProductActive,
          zifenlei: this.LeibieId,
          Yjianjie: this.changeText1,
          yjhjianjie: input2,
          anzhuangbao: this.zfl,
          Ytubiao: this.zfl1,
          pics: this.zfl2,
          Ybanquan: this.zfl3,
          size: this.size,
          VersionNum: input3
        });
        this.axios.post(url, postData).then(res => {
          console.log(res);
          if (res.Msg == null) {
            this.$message({
              message: "发布成功",
              type: "success"
            });
          } else {
            this.$message.error("发布失败请稍后在试");
          }
        });
      } else {
        let input1 = this.$refs.input1.value; //安装包名称
        let input2 = this.$refs.input2.value; //一句话简介
        let input3 = this.$refs.input3.value; //应用版本号
        var UserId = localStorage.getItem("UserId");
        let url = "http://192.168.1.188:8035/API/GetUserData.ashx";
        let postData = this.qs.stringify({
          action: "shangchuan",
          UserId: UserId,
          name: input1,
          fenlei: this.ProductActive,
          zifenlei: this.LeibieId,
          Yjianjie: this.changeText1,
          yjhjianjie: input2,
          anzhuangbao: this.zfl,
          Ytubiao: this.zfl1,
          pics: this.zfl2,
          Ybanquan: this.zfl3,
          size: this.size,
          VersionNum: input3,
          OrderDetailsId: OrderDetailsII
        });
        this.axios.post(url, postData).then(res => {
          console.log(res);
          if (res.Msg == null) {
            this.$message({
              message: "发布成功",
              type: "success"
            });
          } else {
            this.$message.error("发布失败请稍后在试");
          }
        });
      }

    }
  }
};
</script>

<style>
a {
  text-decoration: none;
  color: #000000;
}
.header {
  width: 100%;
  height: 70px;
  background: #ffffff;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.21);
}
.header .banxin {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.mian {
  width: 100%;
  background: #efefef;
  padding-bottom: 100px;
}
.mian .banxin {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
.mian .banxin .app {
  margin-top: 30px;
  background-color: #fff;
  width: 100%;
  height: 100px;
  overflow: hidden;
  display: flex;
  box-sizing: border-box;
  border: 1px dashed #000;
}
.mian .banxin .app .left {
  width: 10%;
  border-right: 1px solid #bfbfbf;
  height: 80px;
  margin-top: 10px;
  position: relative;
  text-align: center;
}
.mian .banxin .app .left .left_img {
  width: 26.7%;
  height: 44px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.mian .banxin .app .left .left_img img {
  width: 100%;
  height: 44px;
}
.mian .banxin .app .left p {
  margin-top: 62px;
  font-size: 18px;
}
.mian .banxin .app .right_app {
  width: 10.1%;
  padding-left: 20px;
}
.mian .banxin .app .right_app p {
  color: #858585;
  font-weight: bold;
  font-size: 20px;
  font-family: MicrosoftYaHei-Bold;
}
.mian .banxin .app .right_app .key {
  margin-bottom: 30px;
  margin-top: 10px;
}
.mian .banxin .app .right_id {
  flex: 1;
}
.mian .banxin .app .right_id p {
  font-size: 20px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: #858585;
}
.mian .banxin .app .right_id .id {
  margin-bottom: 30px;
  margin-top: 10px;
}
.mian .banxin .information {
  background-color: #fff;
  padding: 20px 0 0 20px;
  margin-top: 30px;
  width: 100%;
  height: 710px;
  border: 1px dashed #000;
  box-sizing: border-box;
}
.mian .banxin .information h5 {
  font-size: 20px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: #333333;
  line-height: 28px;
}
.mian .banxin .information .information_form {
  width: 100%;
  margin-top: 8px;
  height: 552px;
}
.mian .banxin .information .information_form .information_name {
  padding-left: 6px;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: #ff4040;
  line-height: 28px;
  position: relative;
}
.mian .banxin .information .information_form .information_name span {
  color: #000;
  margin-right: 85px;
}
.mian .banxin .information .information_form .information_name .name {
  width: 49%;
  height: 45px;
  border: 1px dashed #000;
}
.mian .banxin .information .information_form .information_name input {
  color: #b4b4b4;
  font-size: 16px;
}
.mian .banxin .information .information_form .information_name em {
  font-style: normal;
  position: absolute;
  top: 50px;
  left: 178px;
  color: red;
  font-size: 14px;
  display: none;
}
.mian .banxin .information .information_form .informatio_game {
  height: 47px;
  margin-top: 40px;
}
.mian .banxin .information .information_form .informatio_game .game_left {
  float: left;
  padding-left: 6px;
  width: 14.8%;
  height: 47px;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: #ff4040;
  line-height: 47px;
}
.mian .banxin .information .information_form .informatio_game .game_left span {
  color: #000;
}
.mian .banxin .information .information_form .informatio_game .game_right {
  height: 47px;
  width: 100%;
  float: left;
  width: 49%;
  line-height: 47px;
  display: flex;
}
.mian
  .banxin
  .information
  .information_form
  .informatio_game
  .game_right
  .game {
  width: 20%;
}
.mian
  .banxin
  .information
  .information_form
  .informatio_game
  .game_right
  .game
  .yuan {
  width: 22px;
  height: 22px;
  border-radius: 11px;
  float: left;
  margin-top: 12px;
  border: 1px solid #ccc;
  margin-right: 8px;
  box-sizing: border-box;
}
/* .mian
  .banxin
  .information
  .information_form
  .informatio_game
  .game_right
  .Software {
   flex: 1; 
} */
.mian
  .banxin
  .information
  .information_form
  .informatio_game
  .game_right
  .Software
  .yuan {
  width: 22px;
  height: 22px;
  border-radius: 11px;
  float: left;
  margin-top: 12px;
  border: 4px solid blue;
  margin-right: 8px;
  box-sizing: border-box;
}
.mian .banxin .information .information_form .informatio_Software {
  height: 47px;
  margin-top: 40px;
}
.mian .banxin .information .information_form .informatio_Software .left {
  float: left;
  padding-left: 6px;
  width: 14.8%;
  height: 47px;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: #ff4040;
  line-height: 47px;
}
.mian .banxin .information .information_form .informatio_Software .left span {
  color: #000;
}
.mian .banxin .information .information_form .informatio_Software .right {
  width: 49%;
  height: 47px;
  float: left;
}
.mian
  .banxin
  .information
  .information_form
  .informatio_Software
  .right
  #right_bei {
  width: 252px;
  height: 45px;
  padding-left: 16px;
  color: #b4b4b4;
}
.mian .banxin .information .information_form .informatio_brief {
  height: 160px;
  margin-top: 40px;
}
.mian .banxin .information .information_form .informatio_brief .left {
  float: left;
  padding-left: 6px;
  width: 14.8%;
  height: 47px;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: #ff4040;
  line-height: 47px;
}
.mian .banxin .information .information_form .informatio_brief .left span {
  color: #000;
}
.mian .banxin .information .information_form .informatio_brief .right {
  float: left;
  width: 49%;
  height: 160px;
}
.mian .banxin .information .information_form .informatio_brief .right .chebox {
  height: 160px;
  box-sizing: border-box;
  border: 1px dashed #000;
}
.mian .banxin .information .information_form .brief {
  height: 47px;
  margin-top: 40px;
  position: relative;
}
.mian .banxin .information .information_form .brief .left {
  float: left;
  padding-left: 6px;
  width: 14.8%;
  height: 47px;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: #ff4040;
  line-height: 47px;
}
.mian .banxin .information .information_form .brief .left span {
  color: #000;
}
.mian .banxin .information .information_form .brief .right input {
  border: 1px dashed #000;
  width: 49%;
  height: 45px;
  color: #b4b4b4;
  font-size: 16px;
}
.mian .banxin .information .information_form .brief em {
  font-style: normal;
  position: absolute;
  top: 50px;
  left: 178px;
  color: red;
  font-size: 14px;
  display: none;
}
.mian .banxin .information_1 {
  width: 100%;
  height: 770px;
  border: 1px dashed #000;
  box-sizing: border-box;
  margin-top: 30px;
  background-color: #fff;
  padding: 20px 0 0 20px;
}
.mian .banxin .information_1 h5 {
  font-size: 20px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: #333333;
  line-height: 28px;
  margin-bottom: 20px;
}
.mian .banxin .information_1 .information_1_app {
  width: 90%;
  overflow: hidden;
  margin-bottom: 40px;
}
.mian .banxin .information_1 .information_1_app .information_1_left {
  float: left;
  padding-left: 6px;
  width: 14.8%;
  height: 47px;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: #ff4040;
  line-height: 47px;
}
.mian .banxin .information_1 .information_1_app .information_1_left span {
  color: #000;
}
.mian .banxin .information_1 .information_1_app .information_1_right {
  /* float: left;
  width: 80%; */
  /* height: 186px; */
}
.mian
  .banxin
  .information_1
  .information_1_app
  .information_1_right
  .information_1_right_flex {
  display: flex;
  width: 100%;
}
.mian
  .banxin
  .information_1
  .information_1_app
  .information_1_right
  .information_1_right_flex
  .information_1_img {
  width: 18.9%;
}
.mian
  .banxin
  .information_1
  .information_1_app
  .information_1_right
  .information_1_right_flex
  .information_1_img
  img {
  width: 100%;
}
.mian .banxin .information_1 .information_1_app .information_1_right span {
  width: 207px;
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: #939393;
  margin-left: 150px;
}
.mian .banxin .two {
  height: 340px;
}
.Release {
  width: 100%;
  height: 130px;
  border: 1px solid #ccc;
  background-color: #d4d4d4;
  position: relative;
}
.Release .Release_box {
  width: 20%;
  height: 60px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
}
.Release .Release_box .Release_left {
  width: 100px;
  text-align: center;
  line-height: 60px;
  height: 60px;
  background-color: #fff;
  border: 1px dashed #000;
  cursor: pointer;
}
.Release .Release_box .Release_right {
  width: 100px;
  text-align: center;
  line-height: 60px;
  height: 60px;
  background-color: #3a99fd;
  border: 1px dashed #000;
  cursor: pointer;
  color: #fff;
}
.Release .Release_box .box-mar {
  margin-left: 90px;
}
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
.blue {
  color: blue;
}
.left1 {
  float: left;
  padding-left: 6px;
  width: 14.8%;
  height: 47px;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: #ff4040;
  line-height: 47px;
}
.h5 {
  font-size: 20px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: #333333;
  line-height: 28px;
}
.fr {
  float: right;
}
.fl {
  float: left;
}
body {
  background-color: #efefef;
}
</style>