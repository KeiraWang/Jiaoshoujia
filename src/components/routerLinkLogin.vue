<template>
    <div>
        <div class="findAndOther">
            <router-link to="/otherloginmethods">使用其他方式登录&nbsp;&nbsp;&nbsp;&</router-link>
            <router-link to="/findpass">&nbsp;&nbsp;&nbsp;找回密码</router-link>
        </div>
        <div class="regAndDown">
            <router-link to="/registerdouban">注册豆瓣账号</router-link>
            <router-link to="/downloadapp">下载豆瓣App</router-link>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="" scoped>
    .findAndOther{
        display:flex;
        justify-content:center;
        
    }
    .findAndOther a{
        color:black;
    }
    .regAndDown{
        display:flex;
        justify-content:center;
        margin-top:0.2rem;
    }
    .regAndDown a{
        color:green;
    }
</style>