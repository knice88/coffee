<script setup>
import { ref } from 'vue';
import SidebarItem from './SidebarItem.vue';
const expandMenu = ref(false);
const sortList = ['Population', 'Name', 'Region'];
const sortBy = ref(sortList[0]);
const handleMenuClick = (value) => {
    sortBy.value = value;
    expandMenu.value = false;
    // 选中的元素移到最前面
    const selectIndex = sortList.indexOf(value);
    sortList.splice(selectIndex, 1);
    sortList.unshift(value);
}

const regions = ['Americas', 'Antarctic', 'Africa', 'Asia', 'Europe', 'Oceania']
const selectedRegion = ref({})
const handleRegionClick = (item) => {
    if (selectedRegion.value[item]) {
        selectedRegion.value[item] = false
    } else {
        selectedRegion.value[item] = true
    }
}
const activeStatus = ref({})
const handleStatusClick = (item) => {
    if (activeStatus.value[item]) {
        activeStatus.value[item] = false
    } else {
        activeStatus.value[item] = true
    }
}
</script>
<template>
    <div class="mask-container">
        <!-- 顶部导航栏，包含查找结果、搜索框 -->
        <div class="header">
            <div class="search-result">Found 234 countries</div>
            <div class="search-box">
                <img src="@/assets/country/Search.svg" alt="">
                <input type="text" placeholder="Search by Name, Region, Subregion" class="search-input">
            </div>
        </div>
        <!-- 侧边栏，包含排序、区域、状态 -->
        <div class="main-area">
            <div class="sidebar">
                <SidebarItem label="Sort by">
                    <!-- 下拉框 -->
                    <div class="dropdown-menu" v-if="!expandMenu" @click="expandMenu = true">
                        {{ sortBy }}
                        <img src="@/assets/country/Expand_down.svg">
                    </div>
                    <div class="other-menu" v-else>
                        <div class="dropdown-menu" v-for="item in sortList" :key="item" @click="handleMenuClick(item)">
                            {{ item }}
                        </div>
                    </div>
                </SidebarItem>
                <SidebarItem label="Region">
                    <!-- 大洲列表 -->
                    <div class="region-list">
                        <div class="region-item" v-for="item in regions" :key="item" @click="handleRegionClick(item)"
                            :class="{ 'region-item-active': selectedRegion[item] }">
                            {{ item }}
                        </div>
                    </div>
                </SidebarItem>
                <SidebarItem label="Status">
                    <!-- 状态 -->
                    <div class="status-item">
                        <div class="check-box" @click="handleStatusClick(1)" :class="{ 'check-box-active': activeStatus[1] }"></div>
                        Member of the United Nations
                    </div>
                    <div class="status-item">
                        <div class="check-box" @click="handleStatusClick(2)" :class="{ 'check-box-active': activeStatus[2] }"></div>
                        Independent
                    </div>
                </SidebarItem>
            </div>
            <!-- 列表 -->
        </div>
    </div>
</template>

<style scoped>
.check-box-active {
    background-color: #4E80EE;
    background-image: url(@/assets/country/Done_round.svg);
}

.check-box {
    border-radius: 5px;
    width: 24px;
    height: 24px;
    border: #6C727F 2px solid;
    margin: 10px 10px 10px 0;
}

.status-item {
    display: flex;
    color: #D2D5DA;
    font-size: 16px;
    align-items: center;
}

.region-item {
    color: #6C727F;
    padding: 8px;
    margin: 8px;
    cursor: pointer;
    border-radius: 10px;
}

.region-item-active {
    color: #D2D5DA;
    background-color: #282B30;
}

.region-list {
    display: flex;
    flex-wrap: wrap;
}

.dropdown-menu:hover {
    background-color: #6C727F;
}

.dropdown-menu {
    border-radius: 8px;
    border: #282B30 1px solid;
    color: #D2D5DA;
    font-size: 16px;
    padding: 15px;
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}

.sidebar {
    width: 15%;
}

.main-area {
    display: flex;
    margin: 10px 50px;
}

.search-input {
    background-color: transparent;
    /* 背景透明 */
    border-width: 0;
    padding: 0;
    margin: 0;
    color: #D2D5DA;
    outline: none;
    font-size: 16px;
    font-family: 'DM Sans', sans-serif;
    line-height: 30px;
    width: 380px;
    padding-left: 10px;
}

.search-box {
    display: flex;
    align-items: center;
    background-color: #282B30;
    border-radius: 10px;
    padding: 10px;
}

.search-result {
    font-size: 16px;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    margin: 0 50px;
    color: #6C727F;
}

.mask-container {
    display: flex;
    flex-direction: column;
}
</style>
