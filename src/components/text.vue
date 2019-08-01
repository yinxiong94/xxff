

<template>
  <div>
    <input type="file" class="file" @change="file" />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    file() {
      var formData = new FormData(); // 声明一个FormData对象
      var formData = new window.FormData(); // vue 中使用 window.FormData(),否则会报 'FormData isn't definded'
      formData.append('userfile', document.querySelector('input[type=file]').files[0]) 

      console.log( formData.append('userfile', document.querySelector('input[type=file]').files[0]) )
    }
  }
};
</script>