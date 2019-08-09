<template>
  <div>
    <!-- <a href="javascript:;" class="a-upload">
      <input type="file" name id />点击这里上传文件
    </a> -->

    <div href="javascript:;" class="file">
      <img src="../assets/zu.png">
      <input type="file"  ref="input1"  @change="uploading" />
    </div>
  </div>
</template>


<script>
import  uploading1 from '../utils/utils'
export default {
  data() {
    return {};
  },
  methods: {
      uploading(){
        uploading1.uploading1(this.$refs.input1.files[0])
      },
  }
};
</script>

<style>

.file {
    position: relative;
    display: inline-block;
    border-radius: 4px;
    padding: 4px 12px;
    overflow: hidden;
    color: #1E88C7;
}
.file input {
    position: absolute;
    font-size: 100px;
    right: 0;
    top: 0;
    opacity: 0;
}

</style>
