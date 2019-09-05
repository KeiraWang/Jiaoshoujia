<template>
<div class="con">
    <div class="slidera">
        <sliderzi v-for="(v,index) in sliderfuprops"  :key="index" :zislidertitle="v.title" :zisliderimgurl="v.imgurl"></sliderzi>
    </div>
</div>
</template>
<script>
import  sliderzi from './sliderzi';
export default {
    components:{
        sliderzi
    },
    props:{
        sliderfuprops:{
            type:Array,
            required:true
        }
    }
}
</script>
<style lang="" scoped>
    .slidera{
        display:flex;
    }
    .con{
        width:100%;
        overflow:auto;
    }
</style>