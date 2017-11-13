<template>
    <div class="school-area clear">
        <div class="left-title">高校地区：</div>
        <div class="right-area">
            <filter-item v-for="(value,index) in schoolAreaList" :catagory="'高校地区'" :index="index" :key="index" :range-object="value"></filter-item>
        </div>
        <div class="clear"></div> 
    </div>
</template>
<script>
    //引入filter-item
    import filter_item from './filter-item.vue';
    export default {
        name:'school-area',
        props:{
            //接收  传来的数居
            schoolAreaList:{
                type:Array,
                required: true
            }
        },
        components:{
            //渲染item
            "filter-item":filter_item
        }
    }
</script>
<style scoped>

</style>