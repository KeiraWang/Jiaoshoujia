<template>
    <div>
        foods
        <back></back>
        <button @click="fun()">点我使用axios请求数据</button>
        <table>
            <tr v-for="(v,index) in arr" :key="index">
                <td>{{v.commentTxt}}</td>
                <td>{{v.createAt}}</td>
                <td>{{v.userName}}</td>
            </tr>
            <tr></tr>
        </table>
    </div>
</template>
<script>
import  back from '../components/back';
export default {
    components:{
        back
    },
    data(){
        return {
            arr:[]
        }
    },
    methods:{
        fun(){
            //axios请求数据
            // this.axios({
            //     url:"http://api.artgoer.cn:8084/artgoer/api/v1/user/324380/v3/topic/topicHomeByLabel?pageIndex=1&token=b544cd63-6d42-46fe-a96c-3cf96bae3113&topicId=62187",
            //     method:"get",
            //     params:{
            //         name:"xixi"
            //     }
            // }).then((ok)=>{
            //     console.log(ok);
            //     console.log(ok.data.data.commentList);
            //     this.arr=ok.data.data.commentList;
            // });


            // this.axios({
            //     url:"/xiaoming/xiaohong",
            //     method:"get"
            // }).then((ok)=>{
            //     console.log(ok);
            // });


            this.axios({
                url:"/hehe",
                method:"post"
            }).then((ok)=>{
                console.log(ok);
            });

            // var param=new URLSearchParams;
            // param.append("name","xixi");
            // this.axios({
            //     url:"http://localhost:8080/post",
            //     method:"post"
            // }).then((ok)=>{
            //     console.log(ok);
            // });
        }
    }
}
</script>
<style lang="" scoped>
    
</style>