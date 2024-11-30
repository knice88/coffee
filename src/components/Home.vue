<script setup>
const pageList = [
    {
        title: 'Coffee Listing',
        route: '/views/coffee',
    }
]
</script>
<template>
    <div v-for="page in pageList" :key="page.route">
        <router-link :to="page.route">{{ page.title }}</router-link>
    </div>
</template>