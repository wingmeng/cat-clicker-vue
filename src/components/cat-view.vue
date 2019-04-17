<template>
	<div class="cat-view">
		<!-- 猫的名称和点击数 -->
		<p>
			<strong>{{ cat.name }}</strong>{{' '}}
			<span class="cat-clicks">{{ cat.clicks }}</span> clicks
		</p>

		<!-- 猫的照片 -->
		<img :src="`images/${cat.imgUrl}`" :alt="cat.name"
			@click="onCatClick"
		/>

		<!-- 从父级获取需要的参数 -->
		<output-info
			:cats="cats"
			:index="index"
			:clicks="cat.clicks"
		></output-info>
	</div>
</template>

<script>
import OutputInfo from './output-info.vue'

export default {
	name: 'CatView',
	components: {
    OutputInfo
  },
	props: {
		cat: Object,
		cats: Array,
		index: Number
	},
	methods: {
		onCatClick: function() {
			this.$emit('cat-click');
		}
	}
}
</script>
