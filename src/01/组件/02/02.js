Vue.component('my-component',{
    props:['message'],
    template:'<div> {{ message }} </div>'
});

var app = new Vue({
    el:'#app',
    data:{
        parentMessage:''
    }
});