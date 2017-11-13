import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
//实例vuex
let store = new Vuex.Store({
    state: {
        school_range_obj: [],
        school_area_obj: []
    },
    mutations: { //定义方法
        update_school_range: function(state, list) {
            // console.log(list)
            state.school_range_obj = list;
        },
        update_school_area: function(state, list) {
            state.school_area_obj = list;
        },
        //单选   通过改变数据
        reset_school_range: function(state, item) {
            // console.log(item)
            let arr = state.school_range_obj.map((value, index) => {
                value.selected = false;
                if (item.index == index) {
                    value.selected = item.selected;
                }
                return value;
            })
            let selected_none = true;
            arr.forEach(value => {
                if (value.selected) {
                    selected_none = false;
                }
            })
            if (selected_none) {
                arr[0].selected = true;
            }
            state.school_range_obj = arr;
        },
        //多选
        reset_school_area: function(state, item) {
            // console.log(item)
            state.school_area_obj[0].selected = false;
            if (item.index == 0) {
                state.school_area_obj.map((value, index) => {
                    value.selected = (index == 0);
                    return value;
                })
                return;
            }

            let arr = state.school_area_obj.map((value, index) => {
                    if (index == item.index) {
                        value.selected = item.selected;
                    }
                    return value;
                })
                //全部没有就不显示  控制是否全选的开关，如果没有任何被选中，不限要高亮
            let selected_none = true;
            arr.forEach(value => {
                if (value.selected) { //遍历数据如果有选中的，说明不限不需要高亮
                    selected_none = false;
                }
            })
            if (selected_none) {
                arr[0].selected = true;
            }
            state.school_area_obj = arr;
        },
        //清除 已选条件清除数组中的选中状态
        clear_range: function(state) {
            state.school_range_obj.forEach((value, index) => {
                if (index == 0) {
                    value.selected = true;
                } else {
                    value.selected = false;
                }
            })
        },
        clear_area: function(state) {
            state.school_area_obj.forEach((value, index) => {
                if (index == 0) {
                    value.selected = true;
                } else {
                    value.selected = false;
                }
            })
        }
    },
    //已选条件渲染
    getters: {
        selected_range: function(state) {
            let str = '';
            state.school_range_obj.map(item => {
                if (item.selected) {
                    str += item.value;
                }
            })
            return str;
        },
        selected_area: function(state) {
            let arr = [];
            state.school_area_obj.map(item => {
                if (item.selected) {
                    arr.push(item.value);
                }
            })
            return arr.join(' , ');
        }
    }
})

export default store;