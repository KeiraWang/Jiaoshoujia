<template>
    <div class="_home">
        <router-link-home></router-link-home>
        <!-- <div class="line"></div> -->
        <router-link-second></router-link-second>
        <!-- <div>{{arrhomedata}}</div> -->
        <home-data></home-data>

        <!-- <em>home</em>   -->
        <router-link-nav></router-link-nav>
        <!-- <ww></ww> -->
        <!-- <sliderfu :sliderfuprops="arr"></sliderfu> -->
        <sliderfu :sliderfuprops="arra"></sliderfu>
        <sliderfu :sliderfuprops="arrb"></sliderfu>
    </div>
</template>
<script>
import  HomeData from '../components/HomeData';
import  routerLinkSecond from '../components/routerLinkSecond';
import  routerLinkHome from '../components/routerLinkHome';
import  routerLinkNav from '../components/routerLinkNav';
import  sliderfu from '../components/slider/sliderfu';
export default {
    components:{
        // ww:routerLinkNav
        routerLinkNav,
        sliderfu,
        routerLinkHome,
        routerLinkSecond,
        HomeData
    } ,
    data(){
        return {
            // arr:[
            //     {title:"狮子王一",imgurl:"../../../static/img/001.jpg"},
            //     {title:"狮子王一",imgurl:"../../../static/img/002.jpg"},
            //     {title:"狮子王一",imgurl:"../../../static/img/003.jpg"},
            //     {title:"狮子王一",imgurl:"../../../static/img/004.jpg"},
            //     {title:"狮子王一",imgurl:"../../../static/img/005.jpg"},
            //     {title:"狮子王一",imgurl:"../../../static/img/006.jpg"},
            //     {title:"狮子王一",imgurl:"../../../static/img/007.jpg"},
            //     {title:"狮子王一",imgurl:"../../../static/img/008.jpg"},
            //     {title:"狮子王一",imgurl:"../../../static/img/009.jpg"},
            //     {title:"狮子王一",imgurl:"../../../static/img/010.jpg"}
            // ]
            arr:[],
            arrhomedata:[]
        }
    },
    created(){
        this.axios({
            method:"get",
            url:"http://localhost:3000/get"
        }).then((data)=>{
            console.log(data);
            this.arr=data.data.data;
        });
        // this.axios({
        //     method:"get",
        //     url:"/homedata"
        // }).then((data)=>{
        //     console.log(data);
        //     this.arrhomedata=data;
        // });
    },
    computed:{
        arra(){
            var demoa=this.arr.filter((v,index)=>{//filter是数组同级
                if(v.id<=10){
                    return this.arr[index];//return的是个新数组
                }
            });
            return demoa;//这个return是计算属性的return
        },
        arrb(){
            var demoa=this.arr.filter((v,index)=>{//filter是数组同级
                if(v.id>10){
                    return this.arr[index];
                }
            });
            return demoa;
        }
    }
}
</script>
<style lang="" scoped>
    ._home{
        padding:0 0.2rem;
        box-sizing:border-box;
    }
    /* .line{
        width:100%;
        height:0.01rem;
        border-bottom:0.01rem solid black;
    } */
</style>