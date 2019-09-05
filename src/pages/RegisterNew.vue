<template>
    <div>
        <h1>欢迎加入豆瓣</h1>
        <input type="email" placeholder="     邮箱" v-model="textEmail">
        <div class="tokenDiv1" v-if="bool">
            <input type="text" placeholder="     Token" v-model="textPass">
            <span class="token1" @click="bool=false"></span>
        </div>
         <div class="tokenDiv2" v-else>
            <input type="password" placeholder="     Token" v-model="textPass">
            <span class="token2" @click="bool=true"></span>
        </div>
        <input type="text" placeholder="    用户名" v-model="textName">
        <button @click="fun()">立即注册</button>
        <span>点击「注册」代表你已阅读并同意用户使用协议</span>
        <down></down>
    </div>
</template>
<script>
import  Down from '../components/Down';
export default {
    components:{
        Down
    },
    data(){
        return {
            textEmail:"",
            textPass:"",
            textName:"",
            bool:false
        }
    },
    methods:{
        fun(){
            var param=new URLSearchParams();
            param.append("textEmail",this.textEmail);
            param.append("textPass",this.textPass);
            param.append("textName",this.textName);
            this.axios({
                method:"post",
                url:"http://localhost:3000/register",
                data:param
            }).then((success)=>{
                console.log(success);
                if(success.data.linkId==9){
                    alert("用户名已存在");
                }else if(success.data.linkId==8){
                    alert("注册成功");
                }else if(success.data.linkId==0){
                    alert("注册失败");
                }else{
                    alert("连接超时，请稍后重试");
                }
            });  
        }
    }



}
</script>
<style lang="" scoped>
    div{
        text-align:center;
    }
    h1{
        font-size:0.32rem;
        color:green;
    }
    input{
        outline:none;
        width:3.2rem;
        height:0.5rem;
    }
     .tokenDiv1{
        position:relative;
    }
    .tokenDiv2{
        position:relative;
    }
    .token1{
        display:inline-block;
        width:0.27rem;
        height:0.27rem;
        background:url(../../static/img/show.png) no-repeat;
        background-size:100%;
        position:absolute;
        top:0.1rem;
        right:0.5rem; 
    }
    .token2{
        display:inline-block;
        width:0.27rem;
        height:0.27rem;
        background:url(../../static/img/hide.png) no-repeat;
        background-size:100%;
        position:absolute;
        top:0.1rem;
        right:0.5rem;
    }
    button{
        background:green;
        outline:none;
        width:3.2rem;
        height:0.5rem;
        border-radius:0.1rem;
        margin-top:0.1rem;
        margin-bottom:0.3rem;
        font-size:0.25rem;
        color:white;
    }
    span{
        display:inline-block;
        margin-bottom:0.3rem;
    }
</style>