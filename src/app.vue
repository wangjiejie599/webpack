<template>
    <div class="container">
        <p class="comments">*由于2020年拟在京招生普通高校专业（类）选考科目范围尚未公布，暂时调用2018年拟在浙招生普通高校专业（类）选考科目范围，该数据仅供参考，正式文件公布后即时替换！</p>
        <ul>
            <router-link class="filter-item" :to="{name:'overall'}" tag="li">综合检索</router-link>
            <router-link class="filter-item" :to="{name:'college'}" tag="li">高校检索</router-link>
            <router-link class="filter-item" :to="{name:'major'}" tag="li">专业检索</router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
//抛出这个模板
    export default {
        name: 'app',
        data(){
            return {}
        }
    }
</script>

<style scoped>
    .container{
        min-width:1200px;
        max-width: 95%;
        margin: 0 auto;
    }
    .comments{
        font-size:14px;
        line-height: 34px;
        color:red;
        text-indent: 10px;
    }
    .container ul{
        width: 100%;
        /* font-size: 0; */
        border-bottom: 1px solid #ccc;
    }
    .filter-item{
        display: inline-block;
        min-width: 70px;
        height: 35px;
        color: #333333;
        text-align: center;
        line-height: 35px;
        cursor: pointer;
        font-size: 16px;
        margin: 0;
    }
    .router-link-active,.filter-item:hover{
        background: rgba(0, 160, 92, 1);
        color: #fff;
    }
</style>
