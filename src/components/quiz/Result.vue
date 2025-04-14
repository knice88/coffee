<template>
    <div class="result-area">
        <img src="@/assets/quiz/congrats.png" alt="" class="congrats-image" />
        <div class="contrats-text">Congrats! You completed the quiz.</div>
        <div class="contrats-points">You answer {{ $route.params.points }}/10 correctly</div>
        <div class="contrats-button" @click="$router.push('/views/quiz')">Play again</div>
    </div>
</template>

<style scoped>
.congrats-image {
    margin: 30px 0;
}

.result-area {
    background-color: #343964;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    border-radius: 10px;
}

.contrats-button {
    background: linear-gradient(#E65895, #BC6BE8);
    border-radius: 10px;
    padding: 18px 60px;
    margin: 60px 0;
}

.contrats-points {
    font-size: 14px;
}

.contrats-text {
    font-size: 24px;
    margin: 20px 40px;
}
</style>