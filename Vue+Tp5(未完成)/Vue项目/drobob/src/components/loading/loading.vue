<template>
    <div class="loading">
        <div class="loading-content">
            <div class="loading-circle">
                <div class="loading-item"></div>
            </div>
            <div class="loading-circle">
                <div class="loading-item"></div>

            </div>
            <div class="loading-circle">
                <div class="loading-item"></div>

            </div>
            <div class="loading-circle">
                <div class="loading-item"></div>

            </div>
            <div class="loading-circle">
                <div class="loading-item"></div>

            </div>
            <div class="loading-circle">
                <div class="loading-item"></div>

            </div>
            <div class="loading-circle">
                <div class="loading-item"></div>

            </div>
            <div class="loading-circle">
                <div class="loading-item"></div>

            </div>
            <div class="loading-circle">
                <div class="loading-item"></div>

            </div>
            <div class="loading-circle">
                <div class="loading-item"></div>

            </div>
            <div class="loading-circle">
                <div class="loading-item"></div>

            </div>
            <div class="loading-circle">
                <div class="loading-item"></div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "loading"
    }
</script>

<style scoped>

    .loading{
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 999;
        align-items: center;
        justify-content: center;
    }
    .loading > .loading-content{
        position: relative;
        width: 200px;
        height: 200px;
    }
    .loading-content > .loading-circle{
        position: relative;
        width: 100%;
        height: 100%;
    }
    .loading-circle > .loading-item{

    }


</style>