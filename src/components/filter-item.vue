<template>
    <span class="filter-item" @click="toggle" :class="{selected:rangeObject.selected}">{{rangeObject.value}}</span>
</template>

<script>
    export default {
        //接受调用时传来的数据
        props:['index','range-object','catagory'],
        methods: {
            //数据的点击事件
            toggle: function () {
                //判断单选多选 把点击的下标和状态传入vuex
                if(this.catagory == '高校层次'){
                    this.$store.commit('reset_school_range',{
                        index:this.index,
                        selected:!this.rangeObject.selected
                    })
                }else{
                    this.$store.commit('reset_school_area',{
                        index:this.index,
                        selected:!this.rangeObject.selected
                    })
                }
            }
        },
    }
</script>

<style>
    .selected{
        background:rgba(0, 160, 92, 1);
        color:#fff;
    }
</style>
