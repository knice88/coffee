<script setup>
import Card from './Card.vue'
</script>

<template>
    <div class="home">
        <div class="page">
            <div class="title">本站用于完成 <a class="title-link"
                    href="https://devchallenges.io/">https://devchallenges.io/</a>
                的任务, <a class="title-link" href="https://github.com/knice88/coffee">点此查看源码</a>, 目前实现以下页面:</div>
            <div class="cards">
                <Card @click="$router.push('/views/coffee')" title="Coffee">
                    <img src="@/assets/coffee.png" class="trumb-img">
                </Card>
                <Card @click="$router.push('/views/translate')" title="Translate">
                    <img src="@/assets/translate.png" class="trumb-img">
                </Card>
                <Card @click="$router.push('/views/country')" title="Country">
                    <img src="@/assets/country.png" class="trumb-img">
                </Card>
            </div>
        </div>
    </div>
</template>

<style scoped>
.cards {
    width: 90%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    justify-items: center;
    margin-bottom: 10px;
}

.title-link {
    font-size: 16px;
    color: #FEF7EE;
}

.title {
    margin: 20px 0;
    font-size: 16px;
    color: #FEF7EE;
}

.trumb-img {
    max-width: 100%;
    border-radius: 10px;
}

.trumb-img:hover {
    cursor: pointer;
    border: #BEE3CC 1px solid;
}

.home {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-image: url(@/assets/bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
}

.page {
    width: 50%;
    min-width: 300px;
    background-color: #1B1D1F;
    border-radius: 10px;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
