<template>
    <div>
       <ul>
           <li v-for="(v,index) in arrhomedata" :key="index">
                <dl>
                    <dt>{{v.title}}</dt>
                    <dd>{{v.content|aa}}</dd>
                </dl>
                <img :src="v.image" alt="">
           </li>
       </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            arrhomedata:[]
        }
    },
    created(){
        this.axios({
            method:"get",
            url:"/homedata"
        }).then((data)=>{
            console.log(data.data.shouye);
            this.arrhomedata=data.data.shouye;
        });
    },
   filters:{
       aa(val){
           return val.substring(0,20)
       }
   }
}
</script>
<style lang="" scoped>
    li{
        width:100%;
        height:1.5rem;
        /* border-bottom:0.01rem solid rgb(246,246,246); */
         border-bottom:0.01rem solid black;
        display:flex;
        overflow:hidden;
        padding-top:0.2rem;
        padding-bottom:0.2rem;
        box-sizing:border-box;
    }
    dl{
        width:65%;
        margin-right:10%;
    }
    img{
        width:25%;
        height:1.1rem;
        
    }
</style>