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
        border-bottom: 1px solid #212121;          
            .menu-left {
                width: 200px;
                height: 450px;                
                background-color: #202020;                
                overflow: auto; 
            }
            .main-content {
                width: 800px;
                height: 450px;              
                overflow: auto;
            }
    }
</style>