//注册组件
Vue.component('my-component',{
    template:'<div>这里是组件内容</div>'
});

Vue.component('my-component2',{
    template:'<div>{{message}}</div>',
    data:function(){
        return {
            message:'组件内容'
        };
    }
});

// Vue.component('my-component3',{
//     template:'<button @click="counter++"> {{counter++}} </button>',
//     data:function(){
//       return {
//         counter:0
//       }
//     }
// });
//局部注册组件
var Child = {
    template:'<div>局部注册组件内容</div>'
};
var app = new Vue({
    el:'#app',
    components:{
        'my-component':Child
    }

});