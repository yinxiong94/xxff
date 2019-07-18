<template>
  <div>
    <div class="cont_body_bg4">
      <div class="mod_help_list">
        <div class="mod_help_list_text">
          <p class="cpfb">产品发布</p>
          <p class="icon"></p>
          <p class="mod_help_list_text1">发布app</p>
          <p class="mod_help_list_text1">内测分发</p>
        </div>
        <div class="mod_help_list_text">
          <p class="cpfb">我的应用</p>
          <p class="icon"></p>
          <p class="mod_help_list_text1">发布新应用</p>
          <p class="mod_help_list_text1">管理我的应用</p>
          <p class="mod_help_list_text1">应用更新</p>
        </div>
        <div class="mod_help_list_text">
          <p class="cpfb">联系我们</p>
          <p class="icon"></p>
          <p class="mod_help_list_text1">QQ： 598614735</p>
          <p class="mod_help_list_text1">邮箱：yizhoufenfa@163.com</p>
          <p class="mod_help_list_text1">地址：湖南省长沙市天心区黑石铺路184号</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
    name:'tail'
};
</script>

<style>
.cont_body_bg4 {
  background: #3e3e3e;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mod_help_list_text {
  color: #fff;
}
.mod_help_list {
  width: 50%;
  height: 200px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.cpfb {
  font-size: 20px;
}
.mod_help_list_text > p {
  margin-bottom: 10px;
}
.mod_help_list_text1 {
  font-size: 10px;
}
.setting {
  background: #258ffc;
}
.icon{
  width: 50px;
  border-bottom: 3px solid #5badf2;
  border-radius: 3px;
  margin: 5px 0;
}
</style>