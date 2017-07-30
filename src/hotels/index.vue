<style scoped>
.active{
      background-color: #9ed99d;
}
</style>

<template>
<div>
  <div class="weui-search-bar" id="searchBar">
  <form class="weui-search-bar__form">
    <div class="weui-search-bar__box">
      <i class="weui-icon-search"></i>
      <input type="search" v-model="filter" class="weui-search-bar__input" id="searchInput" placeholder="搜索" required="">
      <a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
    </div>
    <label class="weui-search-bar__label" id="searchText">
      <i class="weui-icon-search"></i>
      <span>搜索</span>
    </label>
  </form>
  <a href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
</div>
<div class="weui-cells ">
    <a class="weui-cell weui-cell_access js_item" @click="click(item)" v-for="item in list" :class="{active:item._write}">
        <div class="weui-cell__bd">
            <p>{{item.fullname}}</p>
        </div>
        <div class="weui-cell__ft"></div>
    </a>
</div>
</div>
</template>

<script>
import order from '@/action/order'
export default {
  mixins: [order],
  mounted(){
    this.order_hotels_load();
  },
  computed:{
    list(){
      var filter = this.filter;
      var list = this.order_hotels;
      if(filter){
        filter = filter.toLocaleLowerCase();
        list = _.filter( this.order_hotels,function(item){        
          var redIndex =_.filter(item.py,function(v){
                  var i = v.toLocaleLowerCase().indexOf(filter);
                  return i>-1;
                 });
         
          
          return redIndex.length>0;
        })
      }
      return list;
    }
  },
  data(){
    return {
      filter:''
    }
  },
  methods:{
    click(item){
      this.order_hotel_load(item);
      this.$router.push({
        name:'order',
        params:{
          id:item._id
        }
      })
    }
  }
}
</script>

