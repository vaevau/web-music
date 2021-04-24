<template>
<div id="app" class="container">  
  <player-index />
</div>

</template>

<script>
import PlayerIndex from './components/Index/index'

export default {
  name: 'App',
    components: {
        PlayerIndex,
      
    }
}
</script>
<style lang="scss">
  #app {
      width: 82vw;
      height: 90vh;
      color: #fff;
      background-color: #252525;
      margin: 30px auto;
      border-radius: 4px;
  }
</style>
