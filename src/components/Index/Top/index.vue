<template>
    <header>              
      <div class="container">
          <MacDot />
          <MenuTab />
          <Search />
      </div>
    </header>
</template>

<script>

import MacDot from './MacDot'
import MenuTab from './MenuTab'
import Search from './Search'

export default {
    name: 'Top',
    components: {
        MacDot,
        MenuTab,
        Search
    }
}
</script>

<style lang="scss" scoped>
    header {   
        width: 100%;        
        height: 54px;                 
        color: #fff;
        background-color: #2d2d2d; 
        border-radius: 4px;
            .container {                                               
                height: 56px;
                line-height: 56px;                               
                display: flex;
                align-self: center;
                justify-content: space-between;          
            }
    }
</style>