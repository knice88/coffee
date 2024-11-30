<script setup>
defineProps({
    item: {
        type: Object,
        required: true
    }
})
// item: {"id":1,"name":"Cappuccino","image":"https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/cappuccino.jpg","price":"$5.20","rating":4.7,"votes":65,"popular":true,"available":true}
</script>
<template>
    <div class="card">
        <div class="img-container">
            <div class="popular-tag" v-if="item.popular">Popular</div>
            <img :src="item.image" class="card-img">
        </div>
        <div class="card-title">
            <span>{{ item.name }}</span>
            <span class="price">{{ item.price }}</span>
        </div>
        <div class="rating-and-votes" v-if="item.rating > 0">
            <img src="@/assets/Star_fill.svg">
            {{ item.rating }}
            <span class="votes">({{ item.votes }} votes)</span>
            <span class="sold-out-tag">{{ item.available ? '' : 'Sold out' }}</span>
        </div>
        <div class="rating-and-votes" v-else>
            <img src="@/assets/Star.svg">
            <span class="votes">No ratings</span>
            <span class="sold-out-tag">{{ item.available ? '' : 'Sold out' }}</span>
        </div>
    </div>
</template>

<style scoped>
.popular-tag{
    position: absolute;
    top: 6px;
    left: 6px;
    background-color: #F6C768;
    border-radius: 15px;
    padding: 5px 10px;
    z-index: 2000;
    font-size: 10px;
}

.img-container{
    display: flex;
    position: relative;
}

.votes {
    color: #6F757C;
}

.sold-out-tag {
    margin-left: auto;
    color: #ED735D;
}

.rating-and-votes {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #FEF7EE;
}

.price {
    display: inline-block;
    color: black;
    background-color: #BEE3CC;
    border-radius: 5px;
    padding: 2px 5px;
}

.card-title {
    display: flex;
    justify-content: space-between;
    color: #FEF7EE;
    margin: 5px 0;
}

.card-img {
    position: relative;
    border-radius: 10px;
    margin-bottom: 5px;
    z-index: 1000;
}

.card {
    width: 260px;
}
</style>