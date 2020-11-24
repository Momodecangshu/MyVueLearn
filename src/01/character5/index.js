var app = new Vue({
    el:"#app",
    data:{
        list:[
            {
                id:1,
                name:'iphone7',
                price:6188,
                count:1
            },
            {
                id:2,
                name:'Ipad Pro',
                price:5888,
                count:1
            },
            {
                id:3,
                name:'MacBook Pro',
                price:21488,
                count:1
            }
            
        ],
        listids:[
           
        ],
        isChecked:false
    },
    computed:{
        totalPrice:function(){
            var total = 0;
            for(var i = 0;i < this.list.length;i++){
                var item = this.list[i];
                if(this.listids.indexOf(item.id) > -1){
                    total += item.price * item.count;
                }
            }
            return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
        }
    },
    methods:{
        handleReduce:function(index){
            if(this.list[index].count === 1){
                return;
            }
            this.list[index].count--;
        },
        handleAdd:function(index){
            this.list[index].count++;
        },
        handleRemove:function(index){
            this.list.splice(index,1);
        },
        slelectAll:function(){
           this.isChecked = !this.isChecked;
           if(this.isChecked){
                this.listids= [];
                for(var i = 0;i < this.list.length;i++){
                    this.listids.push(this.list[i].id);
                }
           }else{
               this.listids = [];
           }
        },
        checkOne:function(id){
            var idx = this.listids.indexOf(id);
            if(idx > -1){
                this.listids.splice(idx,1);
            }else{
                this.listids.push(id);
            }

        }
    }
});