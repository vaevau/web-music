<template>
<div id="app" class="container">  
  <router-view></router-view>

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

</style>
