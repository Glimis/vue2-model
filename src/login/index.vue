<style scoped>

</style>

<template>
<div class="weui-cells weui-cells_form">
  <div class="weui-cell">
    <div class="weui-cell__hd"><label class="weui-label">用户名</label></div>
    <div class="weui-cell__bd">
      <input class="weui-input" v-model="name"  placeholder="用户名">
    </div>
  </div>
  <div class="weui-cell">
    <div class="weui-cell__hd"><label class="weui-label">密码</label></div>
    <div class="weui-cell__bd">
      <input class="weui-input" type="password" v-model="password"  placeholder="密码">
    </div>
  </div>
    <div class="weui-btn-area">
      <a class="weui-btn weui-btn_primary" @click="submit">确定</a>
    </div>
</div>
</template>

<script>
import {Post} from 'common/utils'
export default {
  data(){
    return {
        name:'',
        password:''
    }
  },
  methods:{
    async submit(){
      $.showLoading('提交中')
      var data = await Post('/api/user/login',{
        name:this.name,
        password:this.password
      })
      $.hideLoading();
      if(data.errmsg){
        $.alert(data.errmsg);
      }else{
        sessionStorage.setItem('user',JSON.stringify(data));
        this.$router.push({
          name:'hotels'
        })
      }
    }
  }
}
</script>

