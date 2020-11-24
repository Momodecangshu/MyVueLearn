Vue.component('my-component',{
    template:`\
    <div>\
        <button @click="handleIncrease">+1</button>\
         <button @click="handleReduce">-1</button>\
    </div>`,
    data:function(){
        return {
            counter:0
        }
    },
    methods:{
        handleIncrease:function(){
            this.counter++;
            this.$emit('increase',this.counter);
        },
        handleReduce:function(){
            this.counter--;
            this.$emit('reduce',this.counter);
        }
    }
});

var app = new Vue({
    el:'#app',
    data:{
        total:0
    },
    methods:{
        handleGetTotal:function(total){
            this.total = total;
        }
    }
});