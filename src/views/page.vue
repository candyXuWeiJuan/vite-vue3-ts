<template>
	<div>{{ name }}</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
	name: 'App',
	setup() {
		const assd = 1
		const name = ref('我是page1')
		return { name }
	},
})
</script>

<style></style>
