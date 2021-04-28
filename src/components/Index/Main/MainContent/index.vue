<template>
    <div class="content-wrapper">
        <router-view></router-view>
    
    </div>
</template>

<script>

import RcmdPage from '../../../../views/TopMenu/SongsRcmd';

export default {
    name: 'MainContent',
    components: {
        
    }
}
</script>

<style lang="scss" scoped>
    .content-wrapper {
        width: 92%;
        margin: 20px auto;      
    }
</style>