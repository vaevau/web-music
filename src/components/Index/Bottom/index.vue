<template>
    <footer>                
        <div class="player">
            <song-info></song-info>
            <player-ui></player-ui>
           <!-- <audio controls="controls" id="audio1" >
                <source src="https://music.163.com/song/media/outer/url?id=30352891.mp3">
            </audio> -->
        </div>
    </footer>
</template>

<script>

import SongInfo from './SongInfo';
import PlayerUi from './PlayerUi';

export default {
    name: 'Bottom',
    components: {
        SongInfo,
        PlayerUi
    }

}
</script>

<style lang="scss" scoped>
    footer {
        height: 54px;
        width: 100%;        
        background-color: #252525;       
       .player {           
            display: flex; 
                      
       }   
    }
</style>