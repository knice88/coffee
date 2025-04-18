<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="ctn">
        <div class="title">{{ title }}</div>
        <div class="title right-part">{{ content }}</div>
    </div>
</template>

<style scoped>
.right-part {
    border-left: 1px solid #364153;
}

.title {
    font-size: 16px;
    padding: 6px;
    color: #CDD5E0;
    white-space: nowrap;
}

.ctn{
    display: flex;
    justify-content: center;
    padding: 10px;
    border-radius: 10px;
    background-color: #111729;
}
</style>