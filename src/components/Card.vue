<script setup>
defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>
<template>
    <div class="card">
            <slot></slot>
        <div class="title">{{ title }}</div>
    </div>
</template>

<style scoped>
.card {
    width: 100%;
    margin: 20px;
    max-height: 100%;
    border: #1B1D1F 1px solid;
    border-radius: 10px;
}

.title {
    font-size: 24px;
    color: #BEE3CC;
}
</style>