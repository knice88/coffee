<script setup>
import { ref } from 'vue';

const inputLang = ref('en');
const outputLang = ref('fr');
const inputText = ref('');
const outputText = ref('');
const inputLimit = ref(500);
const handleTranslate = () => {
    if (inputText.value === '') {
        outputText.value = 'Please input text to translate'
        return
    }
    if (inputLang.value === outputLang.value) {
        outputText.value = 'PLEASE SELECT TWO DISTINCT LANGUAGES'
        return
    }
    fetch(`https://api.mymemory.translated.net/get?q=${inputText.value}&langpair=${inputLang.value}|${outputLang.value}`)
        .then(response => response.json())
        .then(data => {
            if (data.responseStatus === 200 && data.responseData) {
                outputText.value = data.responseData.translatedText
            } else {
                outputText.value = 'No translation found'
            }
        })
        .catch(error => {
            console.log(error)
        })
}

const handleInputLang = (lang) => {
    inputLang.value = lang
}

const moreInputlang = ref({
    code: 'es', name: 'Spanish'
})

const handleMoreInputLang = (item) => {
    moreInputlang.value = item
    inputLang.value = item.code
    // 选择后关掉更多语言选项
    showMoreLang.value = false
}

const handleOutputLang = (lang) => {
    outputLang.value = lang
}

const moreOutputlang = ref({
    code: 'es', name: 'Spanish'
})

const handleMoreOutputLang = (item) => {
    moreOutputlang.value = item
    outputLang.value = item.code
    // 选择后关掉更多语言选项
    showMoreLangOut.value = false
}

const moreLangs = [
    { code: 'es', name: 'Spanish' },
    { code: 'zh', name: 'Chinese' },
    { code: 'ru', name: 'Russian' },
    { code: 'de', name: 'German' },
    { code: 'it', name: 'Italian' },
    { code: 'ja', name: 'Japanese' },
    { code: 'ko', name: 'Korean' },
    { code: 'pt', name: 'Portuguese' },
]

const showMoreLang = ref(false)
const showMoreLangOut = ref(false)

</script>

<template>
    <div class="translate-main">
        <!-- logo -->
        <div class="mask">
            <div class="logo">
                <img src="@/assets/translate/logo.svg">
            </div>
            <div class="boxs">
                <div class="box-item input-box">
                    <div class="input-box-header">
                        <div class="header-item">Detect Language</div>
                        <div class="header-item header-btn" :class="{ 'btn-active': inputLang === 'en' }"
                            @click="handleInputLang('en')">English</div>
                        <div class="header-item header-btn" :class="{ 'btn-active': inputLang === 'fr' }"
                            @click="handleInputLang('fr')">French</div>
                        <div class="header-item header-btn btn-more"
                            :class="{ 'btn-active': inputLang === moreInputlang.code }"
                            @click="showMoreLang = !showMoreLang" @mouseleave="showMoreLang = false">
                            <span v-if="!showMoreLang">{{ moreInputlang.name }}</span>
                            <div v-if="showMoreLang">
                                <div class="more-option" v-for="item in moreLangs" :key="item.code"
                                    @click.stop="handleMoreInputLang(item)">
                                    {{ item.name }}</div>
                            </div>
                            <img v-if="!showMoreLang" src="@/assets/translate/Expand_down.svg" />
                        </div>
                    </div>
                    <div class="input-area">
                        <textarea cols="30" rows="10" class="input-box-content" :maxlength="inputLimit"
                            v-model="inputText">
                    </textarea>
                        <div class="counter">{{ inputText.length }}/{{ inputLimit }}</div>
                    </div>
                    <div class="input-box-footer">
                        <!-- 两个图标按钮 -->
                        <div>
                            <img src="@/assets/translate/sound_max_fill.svg" class="img-btn">
                            <img src="@/assets/translate/Copy.svg" class="img-btn">
                        </div>
                        <!-- 翻译按钮 -->
                        <div class="btn-item" @click="handleTranslate">
                            <img src="@/assets/translate/Sort_alfa.svg">
                            Translate
                        </div>
                    </div>
                </div>
                <div class="box-item output-box">
                    <div class="input-box-header">
                        <div class="header-item header-btn" :class="{ 'btn-active': outputLang === 'en' }"
                            @click="handleOutputLang('en')">English</div>
                        <div class="header-item header-btn" :class="{ 'btn-active': outputLang === 'fr' }"
                            @click="handleOutputLang('fr')">French</div>
                        <div class="header-item header-btn btn-more"
                            :class="{ 'btn-active': outputLang === moreOutputlang.code }"
                            @click="showMoreLangOut = !showMoreLangOut" @mouseleave="showMoreLangOut = false">
                            <span v-if="!showMoreLangOut">{{ moreOutputlang.name }}</span>
                            <div v-if="showMoreLangOut">
                                <div class="more-option" v-for="item in moreLangs" :key="item.code"
                                    @click.stop="handleMoreOutputLang(item)">
                                    {{ item.name }}</div>
                            </div>
                            <img v-if="!showMoreLangOut" src="@/assets/translate/Expand_down.svg" />
                        </div>
                    </div>
                    <div class="input-area">
                        <textarea cols="30" rows="10" class="input-box-content" maxlength="500" readonly
                            v-model="outputText">
                    </textarea>
                    </div>
                    <div class="input-box-footer">
                        <!-- 两个图标按钮 -->
                        <div>
                            <img src="@/assets/translate/sound_max_fill.svg" class="img-btn">
                            <img src="@/assets/translate/Copy.svg" class="img-btn">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.input-area {
    position: relative;
}

.counter {
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 12px;
    color: #666;
}

.btn-item {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    background-color: #3662E3;
    color: #F9FAFB;
    padding: 0 20px;
    margin: 8px 0;
    border-radius: 10px;
    border: #7CA9F3 solid 1px;
}

/* 点击选择之后，鼠标还是悬浮在按钮上， 又一次触发悬浮事件，导致选择框不消失*/

.btn-item:hover {
    cursor: pointer;
}

.more-option {
    padding: 5px 0;
}

.img-btn {
    width: 30px;
    border: #4D5562 solid 3px;
    padding: 3px;
    border-radius: 10px;
    margin: 5px;
}

.input-box-footer {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
}

.input-box-content {
    background-color: transparent;
    /* 背景透明 */
    border-width: 0;
    padding: 0;
    margin: 0;
    color: #F9FAFB;
    outline: none;
    /* 去掉聚焦时的轮廓 */
    resize: none;
    /* 禁止调整大小，去掉右下角的图标 */
    height: 70%;
    width: 100%;
    font-size: 16px;
    font-family: 'DM Sans', sans-serif;
    line-height: 30px;
}

.btn-more>span {
    vertical-align: middle;
}

.btn-more>img {
    vertical-align: middle;
}

.btn-more {
    z-index: 1500;
    position: relative;
}

.header-btn {
    cursor: pointer;
}

.btn-active {
    color: #F9FAFB;
    background-color: #4D5562;
}

.header-btn:hover {
    color: #F9FAFB;
    background-color: #4D5562;
}

.header-item {
    display: inline-block;
    margin: 20px 2px;
    padding: 8px;
    border-radius: 10px;
}

.input-box-header {
    margin-bottom: 20px;
    width: 100%;
    height: 60px;
    font-size: 16px;
    color: #4D5562;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #4D5562;
}

.output-box {
    background-color: #121826cc;
    padding: 2.5%;
}

.input-box {
    background-color: #212936cc;
    padding: 2.5%;
}

.box-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 45%;
    height: 400px;
    border-radius: 20px;
    margin: 100px 1% 0 1%;
}

.boxs {
    display: flex;
    justify-content: center;
    width: 90%;
}

@media screen and (max-width: 1024px) {
    .boxs {
        flex-direction: column;
        align-items: center;
    }

    .box-item {
        width: 80%;
    }
}

.mask {
    width: 100%;
    position: absolute;
    top: 200px;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.translate-main {
    background-image: url('@/assets/translate/hero_img.jpg');
    background-repeat: no-repeat;
    background-size: contain;
    background-color: #040711;
    height: 100vh;
}
</style>