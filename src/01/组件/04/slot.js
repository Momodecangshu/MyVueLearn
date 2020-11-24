Vue.component('child-component',{
    template:`\
    <div class="container">\
    <slot msg="来自子组件的内容"></slot>\
    </div>`
});
var app = new Vue({
    el:'#app'
});