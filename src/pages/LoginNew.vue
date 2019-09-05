<template>
    <div>
        <!-- Login -->
        <span @click="fun()" class="cancel">取消</span>
        <h3>登录豆瓣</h3>
        <input type="email" placeholder="     邮箱" v-model="textEmail">
        <div class="tokenDiv1" v-if="bool">
            <input type="password" placeholder="     Token"  v-model="textPass" >
            <span class="token1" @click="bool=false"></span>
        </div>
        <div class="tokenDiv2" v-else>
            <input type="text" placeholder="     Token"  v-model="textPass" >
            <span class="token2" @click="bool=true"></span>
        </div>
        
        <button v-on:click="funlog()">登录</button>
        <router-link-login></router-link-login>   
    </div>
</template>
<script>
import  routerLinkLogin from '../components/routerLinkLogin';
export default {
    components:{
        routerLinkLogin,
    },
    data(){
        return {
            textEmail:"",
            textPass:"",
            bool:true
        }  
    },
    methods:{
        fun(){
            this.$router.go(-1);
        },
        funlog(){
            var param=new URLSearchParams();
            param.append("textEmail",this.textEmail);
            param.append("textPass",this.textPass);
            this.axios({
                method:"post",
                // url:"http://localhost:3000/login",
                url:"/apis/login",
                data:param
            }).then((success)=>{
                // console.log(success);
                if(success.data.linkId==1){
                    window.localStorage.setItem("newToken",success.data.newToken);
                    alert("登录成功");
                    window.location.href="/home";//跳转地址有问题
                }else if(success.data.linkId==2){
                    alert("邮箱或者密码错误，请重新输入");
                }else{
                    alert("连接超时，请稍后重试");
                }
            });  
        }
    }
}
</script>
<style lang="" scoped>
    .cancel{
        color:green;
        cursor:pointer;
    }
    h3{
        text-align:center;
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
        background:url(../../static/img/hide.png) no-repeat;
        background-size:100%;
        position:absolute;
        top:0.1rem;
        right:0.5rem; 
    }
    .token2{
        display:inline-block;
        width:0.27rem;
        height:0.27rem;
        background:url(../../static/img/show.png) no-repeat;
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
    div{
        text-align:center;
        position:relative;
    }
</style>