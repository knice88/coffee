<script setup>
import { onMounted, ref, computed } from 'vue';
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
const countryList = ref([])
onMounted(() => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            countryList.value = data
        })
        .catch(error => {
            console.log(error)
        })
})
const beautifyNum = (num) => {
    // 千分位分隔
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
const searchKey = ref('')

// 根据不同的筛选条件，改变列表顺序
const filteredList = computed(() => {
    let list = countryList.value;
    if (!list) {
        return []
    }
    if (searchKey.value) {
        // 搜索
        const keyword = searchKey.value.toLowerCase()
        list = list.filter(item => {
            return item.name.common.toLowerCase().includes(keyword) ||
                item.region.toLowerCase().includes(keyword) ||
                (item.subregion ? item.subregion.toLowerCase().includes(keyword) : false)
        })
    }
    if (Object.keys(selectedRegion.value).filter(item => selectedRegion.value[item]).length > 0) {
        // 筛选区域
        list = list.filter(item => selectedRegion.value[item.region])
    }
    if (activeStatus.value[1]) {
        // Member of the United Nations
        list = list.filter(item => item.name.common.includes('United'))
    }
    if (activeStatus.value[2]) {
        // Independent
        list = list.filter(item => item.independent)
    }
    return list.sort((a, b) => {
        if (sortBy.value === 'Population') {
            return b.population - a.population
        } else if (sortBy.value === 'Name') {
            return a.name.common.localeCompare(b.name.common)
        } else if (sortBy.value === 'Region') {
            return a.region.localeCompare(b.region)
        }
    })
})
</script>
<template>
    <div class="mask-container">
        <!-- 顶部导航栏，包含查找结果、搜索框 -->
        <div class="header">
            <div class="search-result">Found {{ filteredList.length }} countries</div>
            <div class="search-box">
                <img src="@/assets/country/Search.svg" alt="">
                <input type="text" placeholder="Search by Name, Region, Subregion" class="search-input"
                    v-model="searchKey">
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
                        <div class="check-box" @click="handleStatusClick(1)"
                            :class="{ 'check-box-active': activeStatus[1] }"></div>
                        Member of the United Nations
                    </div>
                    <div class="status-item">
                        <div class="check-box" @click="handleStatusClick(2)"
                            :class="{ 'check-box-active': activeStatus[2] }"></div>
                        Independent
                    </div>
                </SidebarItem>
            </div>
            <!-- 列表 -->
            <div class="main-list">
                <span class="table-header" style="width: 10%">Flag</span>
                <span class="table-header flex-item">Name</span>
                <span class="table-header flex-item">Population</span>
                <span class="table-header flex-item">Area (km²)</span>
                <span class="table-header hidden-header">Region</span>
                <hr>
                <div class="data-container" v-for="item, index in filteredList" :key="index"
                    @click="$router.push('/views/country/info/' + item.ccn3)">
                    <span class="table-data" style="width: 10%">
                        <img :src="item.flags.png" style="width: 50%;">
                    </span>
                    <span class="table-data flex-item">{{ item.name.common }}</span>
                    <span class="table-data flex-item">{{ beautifyNum(item.population) }}</span>
                    <span class="table-data flex-item">{{ beautifyNum(item.area) }}</span>
                    <span class="table-data hidden-header">{{ item.region }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.data-container {
    width: 100%;
    display: flex;
    align-items: center;
}

.table-data {
    display: inline-block;
    color: #D2D5DA;
    font-size: 16px;
    margin: 10px 0;
    width: 22.5%;
}

.table-header {
    display: inline-block;
    color: #6C727F;
    font-size: 12px;
    margin-bottom: 10px;
    width: 22.5%;
}

.main-list>hr {
    background-color: #282B30;
    height: 1px;
    border: none;
}

.main-list {
    width: 85%;
    margin: 5px 20px 30px 30px;
    overflow-y: scroll;
    scrollbar-width: none;
    min-height: 800px;
}

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
    width: 20%;
}

.main-area {
    display: flex;
    margin: 10px 50px;
    overflow: hidden;
}

@media screen and (max-width: 1024px) {
    .main-area {
        flex-direction: column;
    }

    .sidebar {
        width: 100%;
    }

    .main-list {
        width: 100%;
    }
}

@media screen and (max-width: 1280px) {
    .hidden-header {
        display: none;
    }

    .flex-item {
        width: 30%;
    }
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
    margin: 20px 50px;
    color: #6C727F;
    height: 10%;
}

.mask-container {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 100%;
}
</style>
