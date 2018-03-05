/**
 * Created by Administrator on 2018/3/5 0005.
 */
export default (state = 0,action)=>{ /*默认函数定义state,reducers对action值的接受*/
    state = state || {counter:0}; /*当第一次调用的时候，会做一个初始化 ; 这个实例是对web一个小的计数器进行加减操作*/
    switch(action.type){
        case 'ADD': /*如果传过来的action是加就ADD，就加1*/
            return{counter:state.counter + 1};

        case 'SUB': /*如果传过来的action是减就SUB，就减1*/
            return{counter:state.counter - 1};

        default: /*如果没有就default*/
            return state;
    }
};