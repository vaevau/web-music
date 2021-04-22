<template>
    <main>        
        <div class="menu-left">
            <MenuLeft />
        </div>
        <div class="main-content">
            右侧主内容区域
        </div>
    </main>
</template>

<script>

import MenuLeft from './MenuLeft'

export default {
    name: 'Main',
    components: {
        MenuLeft
    }
    
}
</script>

<style lang="scss" scoped>
    main {
        width: 100%;
        height: 450px;
        display: flex;
        justify-content: space-between;   
          
            .menu-left {
                width: 20%;
                height: 100%;                
                background-color: #202020;                
                overflow: auto; 
            }
    }
</style>