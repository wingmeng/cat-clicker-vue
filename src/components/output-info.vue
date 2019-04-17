<template>
	<p>
		共 {{ cats.length }} 只猫咪，当前为第 {{ index + 1 }} 只，被点击了 {{ clicks }} 次
	</p>
</template>

<script>
export default {
	name: 'OutputInfo',
	props: {
		cats: Array,
		index: Number,
		clicks: Number
	}
}
</script>
