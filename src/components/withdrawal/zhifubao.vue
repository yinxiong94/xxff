<template>
  <div v-html="html"></div>
</template>

<script>
// import { videoPay } from '@/api/pay.js'
export default {
  data () {
    return {
      html: ''
    }
  },
  methods: {
    fetchVideoPay () {


      var UserId = localStorage.getItem('UserId')
      var OrderPrice = localStorage.getItem('OrderPrice')
      console.log(OrderPrice)
      let params = this.qs.stringify({
        action: "Zhifu",
        userid: UserId,
        OrderPrice: OrderPrice,
        type: 2
      });
      this.axios.post('GetUserData.ashx', params).then(res => {
        console.log(res);
        this.html = res.data.Result;
        this.$nextTick(() => {
          document.forms[0].submit()
        })
      });
    }
  },
  mounted () {
    this.fetchVideoPay()
  }
}
</script>
