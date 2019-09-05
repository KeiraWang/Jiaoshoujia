<template>
    <div class="header"> 
       <div class="left">
             <router-link to="/homedouban" class="hdb">豆瓣</router-link>
       </div>
      <div class="right">
          <router-link to="/movie" class="mov">电影</router-link>
          <router-link to="/book " class="bo">图书</router-link>
          <router-link to="/radio" class="rad">广播</router-link>
          <router-link to="/group" class="gro">小组</router-link>
          <router-link to="/tubiao" class="tb">图标</router-link>
      </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="" scoped>
     .header{
          width:100%;
          height:0.5rem;
          /* background:red; */
          display:flex;
          justify-content:space-between;
          border-bottom:0.01rem solid black;
     }
     .left{
          font-size:0.24rem;
          line-height:0.5rem;
          /* margin-left:0.16rem; */
     }
     .right{
          /* margin-right:0.16rem; */
          line-height:0.5rem;
     }
     .right>a{
          margin-right:0.1rem;
          font-size:0.16rem;
     }
    .hdb{
        color:rgb(5,181,18);
    }
   .mov{
        color:rgb(66,189,86);
   }
   .bo{
        color:rgb(159,120,96);
   }
   .rad{
        color:rgb(228,168,19);
   }
   .gro{
        color:rgb(42,184,204);
   }
   .tb{
        color:rgb(5,181,18);
   }
</style>