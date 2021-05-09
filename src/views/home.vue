<template>
    <div>{{ name }}</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
    name: 'App',
    setup() {
        const name = ref('我是首页')
        return { name }
    }
})
</script>

<style></style>
