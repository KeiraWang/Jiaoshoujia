<template>
    <div>
        <p @click="fun()">&lt;</p>
    </div>
</template>
<script>
export default {
    methods:{
        fun(){
            // 回退上一个历史纪录
            this.$router.go(-1);
        }
    }
}
</script>
<style lang="" scoped>
    p{
        font-size:30px;
        cursor:pointer;
    }
</style>