<script setup>
defineProps({
    repo: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="card">
        <div class="repo-name">
            {{ repo.name }}
        </div>
        <div class="repo-desc">
            {{ repo.desc }}
        </div>
        <div class="details">
            <!-- 开源协议 -->
            <div class="icon-text" v-if="repo.license">
                <img src="@/assets/github-profile/Chield_alt.svg">
                <div>{{ repo.license }}</div>
            </div>
            <!-- nesting -->
            <div class="icon-text">
                <img src="@/assets/github-profile/Nesting.svg">
                <div>{{ repo.nesting }}</div>
            </div>
            <!-- stars -->
            <div class="icon-text">
                <img src="@/assets/github-profile/Star.svg">
                <div>{{ repo.stars }}</div>
            </div>
            <!-- 更新时间 -->
            <div class="update-time">
                updated {{ repo.days }} days ago
            </div>
        </div>
    </div>
</template>

<style scoped>
.update-time {
    white-space: nowrap;
    font-size: 10px;
}

.icon-text {
    display: flex;
    align-items: center;
    margin-right: 10px;
}

.details {
    font-size: 12px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.repo-desc {
    font-size: 12px;
}

.repo-name {
    font-size: 16px;
    color: #CDD5E0;
}

.card {
    width: 90%;
    background: linear-gradient(to right, #111729, #1D1B48);
    padding: 10px 20px;
    border-radius: 10px;
    line-height: 30px;
}
</style>