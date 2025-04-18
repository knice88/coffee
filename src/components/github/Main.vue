<script setup>
import SearchInput from './SearchInput.vue'
import ProfileTag from './ProfileTag.vue'
import Repos from './Repos.vue'
</script>

<template>
    <div class="bg">
        <div class="top-part">
            <SearchInput class="search-input"></SearchInput>
        </div>
        <div class="comps-ctn">
            <div class="head-icon">
                <img src="https://avatars.githubusercontent.com/u/91933388?s=48&v=4">
            </div>
            <div class="tags">
                <ProfileTag class="ptag" title="Followers" content="27839"></ProfileTag>
                <ProfileTag class="ptag" title="Following" content="0"></ProfileTag>
                <ProfileTag class="ptag" title="Location" content="San Francisco, CA"></ProfileTag>
            </div>
            <div class="describe-1">
                Github
            </div>
            <div class="describe-2">
                How people build software.
            </div>
            <div class="grid-ctn">
                <Repos
                    :repo="{ name: '.github', desc: 'Community health files for the @GitHub organization', stars: 703, nesting: '2,369', days: 4 }">
                </Repos>
                <Repos
                    :repo="{ name: 'accessibility-alt-text-bot', desc: 'An action to remind users to add alt text on lssues, Pull Requests, and Discussions', license: 'MIT', stars: 50, nesting: 7, days: 3 }">
                </Repos>
                <Repos
                    :repo="{ name: 'accessibilityjs', desc: 'Client side accessibility error scanner.', license: 'MIT', stars: 2181, nesting: 72, days: 4 }">
                </Repos>
                <Repos
                    :repo="{ name: 'actions-cheat-sheet', desc: 'A cheat sheet for GitHub Actions', license: 'MIT', stars: 194, nesting: 26, days: 4 }">
                </Repos>
            </div>
            <div class="view-all">
                View all repositories
            </div>
        </div>
    </div>
</template>

<style scoped>
.view-all {
    color: #CDD5E0;
    margin: 40px 0;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.grid-ctn {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    justify-items: left;
    align-items: start;
}

.describe-2 {
    font-size: 12px;
    margin: 10px 10px 30px 10px;
    color: #CDD5E0;
}

.describe-1 {
    font-size: 20px;
    margin: 10px;
    color: #CDD5E0;
}

.ptag {
    margin-left: 30px;
}

.tags {
    display: flex;
    margin: 20px 120px;
}

.head-icon>img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
}

.head-icon {
    position: absolute;
    width: 100px;
    height: 100px;
    top: -40px;
    left: 8%;
    padding: 10px;
    background-color: #20293A;
    border-radius: 16px;
}

.comps-ctn {
    position: absolute;
    background-color: #20293A;
    width: 84%;
    padding: 0 8%;
    min-height: calc(100vh - 100vw * 3 / 20);
}

.search-input {
    margin-top: 1%;
    width: 40%;
}

.top-part {
    width: 100%;
    height: calc(100vw * 3 / 20);
    background-image: url('@/assets/github-profile/hero-image-github-profile.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

.bg {
    color: #97A3B6;
}

@media screen and (max-width: 800px) {
    .comps-ctn {
        width: 90%;
        padding: 0 5%;
    }

    .tags {
        margin: 90px 0 20px 0;
        flex-wrap: wrap;
    }

    .ptag {
        margin: 10px 30px 5px 0;
    }

    .search-input {
        width: 90%;
    }

    .grid-ctn {
        grid-template-columns: repeat(auto-fill, minmax(90%, 1fr));
    }

    .top-part {
        background-image: url('@/assets/github-profile/hero-image-github-profile-sm.jpg');
        padding: 20px 0 80px;
    }
}
</style>