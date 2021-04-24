<template>
    <main>        
        <div class="menu-left">
            <MenuLeft />
        </div>
        <div class="main-content">
            <MainContent />
        </div>
    </main>
</template>

<script>

import MenuLeft from './MenuLeft'
import MainContent from './MainContent';

export default {
    name: 'Main',
    components: {
        MenuLeft,
        MainContent
    }
    
}
</script>

<style lang="scss" scoped>
    main {
        width: 100%;
        height: 450px;
        display: flex;
         
          
            .menu-left {
                width: 20%;
                height: 100%;                
                background-color: #202020;                
                overflow: auto; 
            }
    }
</style>