<template>
    <div>
        <router-link to="/yingyuanreying">影院热映</router-link>
        <router-link to="/oumeixindiebang">欧美新碟榜</router-link>
        <router-link class="reg" to="/registernew">注册账号</router-link>
        <router-link class="log" to="/loginnew">登录豆瓣</router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="" scoped>
    div{
        display:flex;
        flex-wrap:wrap;
        margin-top:0.25rem;
        margin-bottom:0.25rem;
    }
    div>a{
        width:48%;
        height:0.5rem;
        background:red;
        font-size:0.16rem;
        text-align:center;
        line-height:0.5rem;
        background:rgb(246,246,246);
        color:black;
    }
    div>a:nth-child(2n+1){
        margin-right:4%;
    }
    .reg,.log{
        margin-top:0.1rem;
    }
</style>