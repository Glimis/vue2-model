<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

<template>
<div>
  <div class="weui-msg">
    <div class="weui-msg__icon-area"><i class="weui-icon-success weui-icon_msg"></i></div>
    <div class="weui-msg__text-area">
      <h2 class="weui-msg__title">操作成功</h2>
      <p class="weui-msg__desc">{{order_order.fullname}} 总价:{{order_getter_order.count}}/总重:{{order_getter_order.countweight}}</a></p>
    </div>
    <div class="weui-msg__opr-area">
      <div class="weui-cells weui-cells_form">
        <div class="weui-cell" v-for="item in order_getter_order.form">
          <div class="weui-cell__hd"><label class="weui-label">{{item.name}}</label></div>
          <div class="weui-cell__bd">
            <input class="weui-input" type="number" v-model="item.number.normal">
          </div>
        </div>
      </div>
    </div>
    <div class="weui-msg__opr-area">
      <p class="weui-btn-area">
        <a href="javascript:;" class="weui-btn weui-btn_default"  @click="cancle">返回</a>
      </p>
    </div>
  <!--   <div class="weui-msg__extra-area">
      <div class="weui-footer">
        <p class="weui-footer__links">
          <a href="javascript:void(0);" class="weui-footer__link">底部链接文本</a>
        </p>
        <p class="weui-footer__text">Copyright © 2008-2016 weui.io</p>
      </div>
    </div> -->
  </div>
</div>
</template>

<script>
import order from '@/action/order'

export default {
  mixins: [order],
  methods:{
  
    cancle(){
      this.$router.push({
        name:'hotels'
      })
    }
  }
}
</script>

