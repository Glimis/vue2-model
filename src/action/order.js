import { mapState,mapActions } from 'vuex'
import {order_hotels_load,order_hotel_load,order_order_load,order_order_save} from '../store/order'

export default {
    methods:{...mapActions([order_hotels_load,order_hotel_load,order_order_load,order_order_save])},
    computed: mapState({ 
                         order_hotels:state =>state.order.hotels,
                         order_hotel:state => state.order.hotel,
                         order_order:state => state.order.order,
                         order_getter_order: (state,getter)=> getter.order_order })
}