<template>
    <div class="song-info">
        <div class="song-img">
            <img src="https://p1.music.126.net/Nd86SOcyCxU5Qu7jdZn_MQ==/7725168696876736.jpg" alt="" />
        </div>
        <div class="song-name">
            <h6>拜月而梦  <span>- Aki-阿杰</span></h6>
            <div class="song-time">
                <span>00:00</span>
                <span>/</span>
                <span>04:26</span>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name:'SongsInfo'
}
</script>

<style lang="scss" scoped>
    .song-info{
        height: 40px;
        padding-left: 12px;
        margin-top: 8px;
        display: flex;
        .song-img {
            width: 40px;
            height: 40px;              
        }
        .song-img img {
            width: 100%;             
            border-radius: 4px;
        }
        .song-name {
            padding-left: 10px;
            color: #b8b6b6;            
        }        
    }
    .song-name {
            h6{
                font-weight: normal;
                font-size: 14px;
            }
            span {
                color: #9c9c9c; 
                font-size: 12px;
                padding-right: 8px;
            }
        }
</style>