<template>
    <div class="player-index">
        NeteaseMusic
        <Top />
        <Main />
        <Bottom />
    </div>
</template>

<script>

import Top from './Top'
import Main from './Main'
import Bottom from './Bottom'

export default {
    name: 'PlayerIndex',
    components: {
        Top,
        Main,
        Bottom
    }
}
</script>

<style lang="scss" scoped>
   .player-index {
        width: 76vw;
        height: 90vh;
        color: #fff;
        background-color: #333;
        margin: 30px auto;
        border-radius: 4px;
   }
</style>