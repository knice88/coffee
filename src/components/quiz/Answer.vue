<script setup>
import router from '@/router'
import { ref } from 'vue'

const countryInfo = ref([])
const question = ref({})

fetch('https://restcountries.com/v3.1/all?limit=10')
    .then(response => response.json())
    .then(data => {
        countryInfo.value = data
        question.value = generateQuestion()
    })
    .catch(error => {
        console.log(error)
    })

const points = ref(0)
const quesTotal = ref(10) // 问题总数
const quesSolved = ref(0) // 已解决问题数

// 根据国家信息，生成随机问题
const generateQuestion = () => {
    // 随机读取4个国家信息，以ccn3字段为key，确保国家信息不同
    let countries = []
    let options = []
    for (; countries.length < 4;) {
        const randomIndex = Math.floor(Math.random() * countryInfo.value.length)
        let country = countryInfo.value[randomIndex]
        if (country.capital.length != 1) {
            // 排除首都数量不是唯一的国家
            continue
        }
        let existed = false
        for (let index = 0; index < countries.length; index++) {
            existed = existed || countries[index].ccn3 === country.ccn3
        }
        if (!existed) {
            countries.push(country)
            options.push(country.capital[0])
        }
    }
    const correctOption = Math.floor(Math.random() * countries.length)
    let question = `What is the capital of ${countries[correctOption].name.common}?`
    return { question, options, correctOption }
}

const selectedOption = ref(-1) // 记录用户选择的选项
const checkAnswer = (index) => {
    if (selectedOption.value !== -1) {
        return
    }
    selectedOption.value = index
    if (index === question.value.correctOption) {
        points.value += 1
    }
    setTimeout(() => {
        quesSolved.value += 1
        selectedOption.value = -1
        // 如果所有问题都已解决，则显示结果页面
        if (quesSolved.value === quesTotal.value) {
            // 显示结果页面   
            router.push(`/views/quiz/result/${points.value}`)
            return
        }
        question.value = generateQuestion()
    }, 800)
}
</script>

<template>
    <div class="top-bar">
        <div class="title">Country Quiz</div>
        <div class="points">
            {{ points }}/10 Points
        </div>
    </div>
    <div class="answer-area">
        <!-- 序号1-10 -->
        <div class="ques-no-bar">
            <div v-for="i in quesTotal" class="ques-no" :key="i" :class="{ 'ques-solved': i <= quesSolved + 1 }">
                {{ i }}
            </div>
        </div>
        <!-- 问题 -->
        <div class="question" v-if="question">
            {{ question.question }}
        </div>
        <!-- 选项 -->
        <div class="options">
            <div class="option" v-for="option, i in question.options" :key="i"
                :class="[i === selectedOption ? 'selected-option' : 'not-selected-option']" @click="checkAnswer(i)">
                {{ option }}
                <img src="@/assets/quiz/Check_round_fill.svg" alt=""
                    v-if="selectedOption !== -1 && i === question.correctOption" style="margin-left: 10px;">
                <img src="@/assets/quiz/Close_round_fill.svg" alt=""
                    v-if="selectedOption === i && i !== question.correctOption" style="margin-left: 10px;">
            </div>
        </div>
    </div>
</template>

<style scoped>
.not-selected-option {
    background: #393F6E;
}

.selected-option {
    background: linear-gradient(#E65895, #BC6BE8);
}

.option:hover {
    cursor: pointer;
    background: linear-gradient(#E65895, #BC6BE8);
}

.option {
    width: 36%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    padding: 18px 30px;
    margin: 0 12px;
    border-radius: 10px;
}

.options {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 80%;
    height: 40%;
}

.question {
    font-size: 20px;
    margin-bottom: 5%;
}

.ques-no {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #393F6E;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
}

.ques-solved {
    background: linear-gradient(#E65895, #BC6BE8);
}

.ques-no-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5% 0;
    width: 60%;
}

.answer-area {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #343964;
    height: 60%;
    margin-top: 2%;
    border-radius: 10px;
}

.points {
    background: linear-gradient(#E65895, #BC6BE8);
    padding: 8px 15px;
    border-radius: 15px;
}

.title {
    font-size: 24px;
}

.top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
}
</style>