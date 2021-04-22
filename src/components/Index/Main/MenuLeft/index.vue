<template>
    <div class="menu-text">
        <UserLogin />
         <Others />
         <MyMusic />
         <CreatePlaylist />
         <CollectPlaylist />
    </div>
</template>


<script>

import UserLogin from './UserLogin'
import Others from './Others';
import MyMusic from './MyMusic';
import CollectPlaylist from './CollectPlaylist';
import CreatePlaylist from './CreatePlaylist';

export default {
    name: 'MenuLeft',
    components: {
        UserLogin,
        Others,
        MyMusic,
        CollectPlaylist,
        CreatePlaylist
    }
}
</script>


<style lang="scss" scoped>
    .menu-text{
      
    }
</style>