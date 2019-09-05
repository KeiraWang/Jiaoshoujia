<template>
    <div>
        <img :src="zisliderimgurl" alt="">
        <br>
        <span>{{zislidertitle}}</span>
    </div>
</template>
<script>
export default {
  props:{
      zislidertitle:{
          type:String,
          required:true
      },
      zisliderimgurl:{
        //   type:String,
          required:true
      }
  }
}
</script>
<style lang="" scoped>
    div{
        font-size:0;
    }
   img{
       width:1rem;
       height:1rem;
   }
   span{
       font-size:0.16rem;
   }
</style>