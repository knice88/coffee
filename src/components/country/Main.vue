<template>
    <div class="container">
        <div class="container-img">
            <img src="@/assets/country/Logo.svg">
        </div>
        <div class="mask">
            <RouterView />
        </div>
    </div>
</template>

<style scoped>
.container {
    background-color: #111315;
    width: 100%;
    height: 100vh;
    background-image: url('@/assets/country/hero-image-wr.jpg');
    background-repeat: no-repeat;
    /* 不重复图片 */
    background-position: top;
    /* 背景图像设置为顶部 */
    background-size: contain;
    /* 使背景图像等比例缩放 */
    display: flex;
    justify-content: center;
    /* 水平居中 */
    align-items: center;
    /* 垂直居中 */
    flex-direction: column;
    /* 方向为垂直 */
}

.container-img {
    height: 25%;
    display: flex;
    justify-content: center;
    /* 水平居中 */
    align-items: center;
    /* 垂直居中 */
}

.mask {
    height: 75%;
    width: 80%;
    margin-bottom: 3%;
    background-color: #1B1D1F;
    border-radius: 10px;
}

@media screen and (max-width: 640px) {
    .mask {
        width: 100%;
        border-radius: 0;
    }
}
</style>
