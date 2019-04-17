<template>
  <ul class="list">
    <li v-for="(item, idx) in items"
      :key="idx"
      :class="{'active': activeIdx === idx}"
      @click="onItemClick(idx)"
    >{{ item.name }}</li>
  </ul>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    items: Array,
    activeIdx: Number,
    onItemClick: Function
  }
}
</script>
