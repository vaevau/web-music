<template>
    <div class="player-index">       
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
       width: 1000px;
   }
</style>