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
        <div class="trumb-img">
            <slot></slot>
        </div>
        <div class="title">{{ title }}</div>
    </div>
</template>

<style scoped>
.card {
    width: 100%;
    margin: 20px;
    height: 210px;
    border: #1B1D1F 1px solid;
}

.card:hover{
    cursor: pointer;
    border: #BEE3CC 1px solid;
}

.trumb-img {
    border-radius: 10px;
}

.title {
    font-size: 24px;
    color: #BEE3CC;
}
</style>