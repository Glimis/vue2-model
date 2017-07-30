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
<div class="weui-cells__title">{{order_order.fullname}}</div>
<div class="weui-cells__title">总价:{{order_getter_order.count}}/总重:{{order_getter_order.countweight}}/总数{{order_getter_order.countnumber}}</div>
<div class="weui-cells weui-cells_form">
  <div class="weui-cell" v-for="item in order_getter_order.form">
    <div class="weui-cell__hd"><label class="weui-label">{{item.name}}</label></div>
    <div class="weui-cell__bd">
      <input class="weui-input" type="number" @focus="focus" v-model="item.number.normal">
    </div>
  </div>
  <div class="weui-form-preview__ft">
    <a class="weui-form-preview__btn weui-form-preview__btn_default" href="javascript:" @click="submit">确定</a>
    <button type="submit" class="weui-form-preview__btn weui-form-preview__btn_primary" href="javascript:" @click="cancle">取消</button>
  </div>
</div>


</div>
</template>

<script>
import order from '@/action/order'

export default {
  mixins: [order],
  mounted(){
    this.order_order_load({
      _id:this.$route.params.id
    })
  },
  methods:{
    focus(e){
      e.target.select()
    },
    cancle(){
      this.$router.push({
        name:'hotels'
      })
    },
    async submit(){
      var data =await this.order_order_save(this.order_getter_order);
      
      if(data._id){
        this.$router.push({
          name:'ordershow'
        })
      }else{
        $.alert("保存失败,请重试");
      }
    }
  }
}
</script>

