<template>
  <div>
    <el-upload
      class="upload-demo"
      drag
      name="file"
      action
      accept="application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      :before-upload="uploadFile"
      multiple
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text clearfix">
        <span class="fl">将文件拖拽至此区域上传</span>
        <em class="fl">点击上传</em>
      </div>
    </el-upload>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  methods: {
    uploadFile(file) {
      var formData = new FormData();
      formData.append("file", file);
      var file = formData;
      this.axios.post("FileUpLoad.ashx", file).then(res => {
            console.log(res)
      });
      return false;
    }
  }
};
</script>