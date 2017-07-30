import Vue from 'vue'
export const order_load = 'order_load' 
export const order_update = 'order_update' 

export const order_order_load = 'order_order_load' 
export const order_order_save = 'order_order_save' 
export const order_hotels_load = 'order_hotels_load' 
export const order_hotel_load = 'order_hotel_load' 

import {Get,Post} from 'common/utils'
import _ from 'lodash'

var nulldata = {
        //宾馆状态
        hotels:[],
        //选中宾馆
        hotel:{},
        //订单内容
        order:{}
    };
export default {
    state:  _.cloneDeep(nulldata),
    mutations: {
        [order_load](state, data) {
            Object.assign(state, data)
        }
    },
    getters: {
        order_order:state =>{
            var order = state.order;
            _.each(order.form,function(v){
                var val = parseInt(v.number.normal);
                if(isNaN(val)){
                    val = 0;
                }
                var price =  parseFloat(v.price);
                if(isNaN(price)){
                    price = 0;
                }  
                var weight =  parseFloat(v.weight);
                if(isNaN(weight)){
                    weight = 0;
                }  
                v.countprice =  val * price;
                v.countweight = val * weight;
            })

            order.count = _.reduce(_.map(order.form,'countprice'),_.add);
            order.count=parseInt(order.count*100)/100
            order.countweight = _.reduce(_.map(order.form,'countweight'),_.add);
            order.countweight=parseInt(order.countweight*100)/100;

            order.countnumber=_.reduce(_.map(order.form,function({number}){
                
                return parseInt(number.backwashing)+parseInt(number.contaminated)+parseInt(number.damaged)+parseInt(number.normal)
            }),_.add)
            return order;
        }
    },
    actions: {
        async [order_hotels_load]({commit},params={}) {
            params.limit='all';
            var data =await Get('/api/hotel/listByStatus',params);
            data.list = _.sortBy(data.list,'_write')
            var hotels = data.list;
            
            commit(order_load, {hotels})
        },
        async [order_hotel_load]({commit},hotel){
            commit(order_load, {hotel})
        },
        async [order_order_load]({commit},params){
            var order =await Get('/api/order/init',{
                id:params._id
            })
            commit(order_load, {order})
        },
        async [order_order_save]({commit},params={}) {
            if(!params.name){
                toastr.error('请填写宾馆名称','失败');
                return;
            }
            $.showLoading('提交中')
            var order =await Post('/api/order/saveorder',params);
            $.hideLoading();
            if(order.errmsg){
                return {};
            }else{
                order._write=true;
                // commit(order_update, order)
                return order;
            }
        },
        [order_update]({commit},data){
            data._write=true;
            commit(order_update, data)
        }
    }
}


