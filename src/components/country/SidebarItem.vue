<script setup>
defineProps({
    label: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <div class="container">
        <div class="label">
            {{ label }}
        </div>
        <slot></slot>
    </div>
</template>

<style scoped>
.container{
    margin: 20px 0;
}
.label {
    color: #6C727F;
    font-size: 12px;
}
</style>
