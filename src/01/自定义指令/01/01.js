//全局注册
Vue.directive('focus',{
    //指令选项
    inserted:function(el){
        //聚焦元素
        el.focus();
    }
});


//局部注册
var  app = new Vue({
    el:'#app',
    // directives:{
    //     focus:{
    //         //指令选项
    //     }
    // }
});