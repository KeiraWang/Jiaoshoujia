<template>
    <div>
        <router-link to="/cateyemovie">电影</router-link>
        <router-link to="/enjoy">娱乐</router-link>
        <router-link to="/foods">美食</router-link>
        <router-link to="/hotel">酒店</router-link>
        <router-link to="/waimai">外卖</router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="" scoped>

    div{
        width:100%;
        background-color:pink;
        display:flex;
    }
    /* router-link最终会被渲染成a标签 */
    div>a{
        flex:1;
        font-size:0.16rem;
    }
</style>