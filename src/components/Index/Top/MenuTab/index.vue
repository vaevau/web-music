<template>          
        <div class="menu-tab">
            <ul>
                <li class="active"><router-link to="/">个性推荐</router-link></li>
                <li><router-link to="/Playlist">歌单</router-link></li>
                <li><router-link to="/Radio">主播电台</router-link></li>
                <li><router-link to="/Ranking">排行榜</router-link></li>
                <li><router-link to="/singer">歌手</router-link></li>
                <li><router-link to="/NewMusic">最新音乐</router-link></li>
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
       ul {
           display: flex;
           justify-content: space-around;
       }
       li:hover {
           color: rgb(199, 195, 195);
       }
       li a {
           color: #b1b1b1;
       }
       .router-link-active {
           color: #fff;
       }
   }
</style>