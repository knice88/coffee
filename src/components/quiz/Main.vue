<template>
    <div class="container">
        <RouterView />
    </div>
</template>
<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url('@/assets/quiz/bg.jpg');
    background-size: cover;
    color: #E2E4F3;
    height: 100vh;
    width: 100%;
}

</style>