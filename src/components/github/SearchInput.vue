<script setup>
import { ref } from 'vue'
const searchKey = ref('')
</script>

<template>
    <div class="search">
        <!-- 图标 -->
        <img src="@/assets/github-profile/Search.svg" alt="" class="search-icon">
        <!-- 输入框 -->
        <input type="text" placeholder="username" class="search-input" v-model="searchKey">
    </div>
</template>

<style scoped>
.search-input {
    background-color: transparent;
    /* 背景透明 */
    border-width: 0;
    padding: 0;
    margin: 0;
    color: #CDD5E0;
    outline: none;
    font-size: 16px;
    font-family: 'DM Sans', sans-serif;
    line-height: 30px;
    width: 380px;
    padding-left: 10px;
}

.search {
    display: flex;
    align-items: center;
    background-color: #20293A;
    border-radius: 10px;
    padding: 10px;
}
</style>