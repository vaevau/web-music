<template>
    <div class="container">
        个性推荐页面
    </div>
</template>

<script>


import { getBanner, getPlaylist, getExclusivelist } from '../../services/request';
import getData from '../../services'



import { onMounted } from 'vue';

export default {
    name: 'RcmdPage',
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
    
</style>