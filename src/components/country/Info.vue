<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const countryInfo = ref({})
fetch(`https://restcountries.com/v3.1/alpha/${route.params.code}`)
    .then(response => response.json())
    .then(data => {
        countryInfo.value = data[0]
    })
    .catch(error => {
        console.log(error)
    })
const beautifyNum = (num) => {
    // 千分位分隔
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
</script>
<template>
    <div class="info-container" v-if="countryInfo.flags">
        <div class="info-img-ctn">
            <img :src="countryInfo.flags.png" class="info-img">
        </div>
        <div class="info-name-ctn">
            {{ countryInfo.name.common }}
        </div>
        <div class="info-official-ctn">
            {{ countryInfo.name.official }}
        </div>
        <div class="pop-area-ctn">
            <div class="pop-area">Population&nbsp;&nbsp;&nbsp;&nbsp;{{ beautifyNum(countryInfo.population) }}</div>
            <div class="pop-area">Area (km²)&nbsp;&nbsp;&nbsp;&nbsp;{{ beautifyNum(countryInfo.population) }}</div>
        </div>
        <div class="field-value-ctn">
            <div>Capital</div>
            <div>{{countryInfo.capital[0]}}</div>
        </div>
        <div class="field-value-ctn">
            <div>Subregion</div>
            <div>{{countryInfo.subregion}}</div>
        </div>
        <div class="field-value-ctn">
            <div>Language</div>
            <div>{{Object.keys(countryInfo.languages).map(key => countryInfo.languages[key]).join(', ')}}</div>
        </div>
        <div class="field-value-ctn">
            <div>Currencies</div>
            <div>{{Object.keys(countryInfo.currencies).map(key => countryInfo.currencies[key])[0].name}}</div>
        </div>
        <div class="field-value-ctn">
            <div>Continents</div>
            <div>{{countryInfo.continents[0]}}</div>
        </div>
    </div>
</template>

<style scoped>

.field-value-ctn {
    width: 96%;
    padding: 20px 2%;
    border-top:  #282B30 1px solid;
    display: flex;
    justify-content: space-between;
}

.pop-area{
    padding: 15px 18px;
    background-color: #282B30;
    margin: 40px 20px;
    border-radius: 10px;
}

.pop-area-ctn{
    display: flex;
    font-size: 16px;
}

.info-official-ctn {
    font-size: 16px;
}

.info-name-ctn {
    font-size: 32px;
}

.info-img {
    border-radius: 10px;
}

.info-img-ctn {
    display: flex;
    justify-content: center;
    width: 30%;
    position: relative;
    top: -40px;
}

.info-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #D2D5DA;
}
</style>