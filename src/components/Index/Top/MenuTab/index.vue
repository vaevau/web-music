<template>          
        <div class="menu-tab">
            <ul>
                <li class="active">个性推荐</li>
                <li>歌单</li>
                <li>电台主播</li>
                <li>排行榜</li>
                <li>歌手</li>
                <li>最新音乐</li>
            </ul>
        </div>   
</template>

<script>
export default {
    name: 'MenuTab'
}
</script>

<style lang="scss" scoped>
   .menu-tab {
       width: 50%;  
       margin-left: 16px;       
       color: rgb(167, 161, 161);
       font-size: 14px;
       .active {
           color: #fff;
       }
       ul {
           display: flex;
           justify-content: space-around;
       }
       li:hover {
           color: rgb(199, 195, 195);
       }
   }
</style>