<template>
  <div id="app">
    <!-- 猫的列表 -->
    <list-item
      :items="cats"
      :active-idx="catIndex"
      :on-item-click="setCatIndex"
    ></list-item>

    <!-- 猫的详情
      cats 和 index 为需要传递给孙级组件的数据
    -->
    <cat-view
      :cats="cats"
      :index="catIndex"

      :cat="getCurCat"
      v-on:cat-click="updateClicks"
    ></cat-view>

    <!-- 表单 -->
    <form-item
      :fields="getCurCat"
      v-on:save-form="updateCat"
    ></form-item>
  </div>
</template>

<script>
import ListItem from './components/list.vue'
import CatView from './components/cat-view.vue'
import FormItem from './components/form.vue'

export default {
  name: 'app',
  components: {
    ListItem,
    CatView,
    FormItem
  },
  data() {
    return {
      cats: [
        {
          name: 'Sweet',
          imgUrl: 'cat_picture1.jpg',
          clicks: 0
        }, {
          name: 'Tough',
          imgUrl: 'cat_picture2.jpeg',
          clicks: 0
        }, {
          name: 'Yummy',
          imgUrl: 'cat_picture3.jpeg',
          clicks: 0
        }, {
          name: 'Ghost',
          imgUrl: 'cat_picture4.jpeg',
          clicks: 0
        }, {
          name: 'Flora',
          imgUrl: 'cat_picture5.jpeg',
          clicks: 0
        }
      ],
      catIndex: 0
    }
  },
  computed: {
    // 获取当前的猫
    getCurCat: function() {
      return this.cats[this.catIndex];
    }
  },
  methods: {
    setCatIndex: function(idx) {
      // 直接改变数据，视图会随之更新
      this.catIndex = idx;
    },

    // 更新点击数
    updateClicks() {
      this.cats[this.catIndex].clicks++;
    },

    // 更新当前的猫
    updateCat(data) {
      let idx = this.catIndex;
      this.cats[idx] = Object.assign(this.cats[idx], data);
    }
  }
}
</script>

<style>
  @import './App.css';
</style>
