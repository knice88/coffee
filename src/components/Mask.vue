<script setup>
import Card from './Card.vue'
import { onMounted, ref, computed } from 'vue'
const cliAll = () => {
    activeTag.value = 'all'
}
const cliAvailable = () => {
    activeTag.value = 'available'
}
const activeTag = ref('all')
const list = ref([])
onMounted(() => {
    fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
        .then(response => response.json())
        .then(data => {
            list.value = data
        })
        .catch(error => {
            console.log(error)
        })
})
const filteredList = computed(() => {
    if (activeTag.value === 'all') {
        return list.value
    } else {
        return list.value.filter(item => item.available)
    }
})
</script>
<template>
    <div class="content"><!-- 这是遮罩层 -->
        <div class="describe-area">
            <div class="title-heading">Our Collection</div>
            <div class="title-body">Introducing our Coffee Collection, a selection of unique coffees from different
                roast
                types and origins, expertly roasted in small batches and shipped fresh weekly.</div>
        </div>
        <div class="btn-container">
            <div class="btn" @click="cliAll" :class="{ 'btn-active': activeTag === 'all' }">All Products</div>
            <div class="btn" @click="cliAvailable" :class="{ 'btn-active': activeTag === 'available' }">Available Now
            </div>
        </div>
        <div class="product-list">
            <Card v-for="item in filteredList" :key="item.id" :item="item"></Card>
        </div>
    </div>
</template>
<style scoped>
.content {
    display: flex;
    flex-direction: column;
    /* 设置为列方向，使子元素沿 Y 轴排列 */
    align-items: center;
    /* 控制子元素在横轴上的对齐方式，这里是居中 */
    justify-content: center;
    /* 控制子元素在纵轴上的对齐方式，这里是居中 */
}

.product-list {
    display: grid;
    width: 80%;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    justify-items: center;
    margin-bottom: 10%;
}

.btn {
    padding: 10px;
    margin: 10px;
    font-size: 14px;
    color: #FEF7EE;
    cursor: pointer;
    border-radius: 10px;
}

.btn-active {
    background-color: #6F757C;
}

.btn-container {
    display: flex;
    margin: 16px 0;
}

.title-heading {
    font-size: 32px;
    color: #FEF7EE;
    text-align: center;
    margin-bottom: 10px;
}

.title-body {
    font-size: 16px;
    color: #6F757C;
}

.describe-area {
    background-image: url('../assets/vector.svg');
    background-repeat: no-repeat;
    background-position: top right;
    display: flex;
    flex-direction: column;
    width: 480px;
    height: 20%;
    padding-top: 4%;
    margin-top: 6%;
}

@media screen and (max-width: 1024px) {
    .describe-area {
        width: 270px;
    }
}
</style>