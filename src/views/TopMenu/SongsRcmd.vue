<template>
    <div class="container">
        <SongsRcmd />
        <Banner />
    </div>
</template>

<script>


import { getBanner, getPlaylist, getExclusivelist } from '../../services/request';
import getData from '../../services'

import SongsRcmd from '../../components/Index/Main/MainContent/TopMenuPage/SongsRcmdPage/index'
import Banner from '../../components/Index/Main/MainContent/TopMenuPage/SongsRcmdPage/Banner'
import { onMounted } from 'vue';


export default {
    name: 'RcmdPage',
    components: {
        SongsRcmd,
        Banner
    },
    setup(){
        onMounted(() => {
            getData('type', '0')
            getData('playlist', 20)
            getData('keywords', 'aki阿杰')
        });
    }

}
</script>

<style lang="scss" scoped>
   .container {
   }
</style>