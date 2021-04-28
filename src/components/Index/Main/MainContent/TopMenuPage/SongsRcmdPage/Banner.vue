<template>
    
        <swiper 
            :autoplay="swiper_option.autoplay"
            :loop="swiper_option.loop"
            :speed="swiper_option.speed"
            navigation
            :pagination="swiper_option.pagination"                                    
            :slidesPerView="3"   
            :centeredSlides="true"           
            :slideToClickedSlide="true"                                 
            :navbutton="swiper_option.navigation"            
        >
    
            <swiper-slide><img src="http://p1.music.126.net/Xxlldw81O5j1yBatVIv3RA==/109951165924748043.jpg" alt=""></swiper-slide>
           <swiper-slide><img src="http://p1.music.126.net/BPY4DfUDDeBZ8OW-V5OIZg==/109951165926113350.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="http://p1.music.126.net/Hs_nC5eCyIYMyy0aptil2w==/109951165924762652.jpg" alt=""></swiper-slide>
           <swiper-slide><img src="http://p1.music.126.net/hAUjm61v4R3cD2O7DBSokQ==/109951165924104424.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="http://p1.music.126.net/XdgcAe7FM4AsPF6JM2VXbg==/109951165925657310.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="http://p1.music.126.net/Livk-2kfx4YWXrsVxB8KJQ==/109951165925537472.jpg" alt=""></swiper-slide> -->
         </swiper>  

</template>

<script>

import { reactive } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Pagination, Autoplay, Navigation, EffectCoverflow, EffectFlip, EffectFade,EffectCube} from 'swiper';	
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/effect-coverflow/effect-coverflow.scss'
import 'swiper/components/effect-cube/effect-cube.scss'
import 'swiper/components/effect-fade/effect-fade.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/navigation/navigation.scss'

SwiperCore.use([Pagination, Autoplay, Navigation, EffectCoverflow,EffectFlip, EffectFade,EffectCube])


export default {    
    name:'banner',
    components: {
        Swiper,
        SwiperSlide,
    },
    setup(){
        const swiper_option = reactive({
            autoplay: {
                delay: 1000,
                disableOnInteraction: true,  
                parallax: true,  
                slidesPerView : 3,
                centeredSlides : true,
                centeredSlidesBounds: true,           
            },
                                
            loop: true,
            speed: 1000,
            pagination: {                
                clickable: true,
               
             }, 
          
              cubeEffect: {
                slideShadows: false,
                shadow: false,
                shadowOffset: 100,
                shadowScale: 0.6
  },
          
        })

        return{
            swiper_option
        }
    }
}
</script>
<style lang="scss" scoped>


  .swiper-slide{       
       width: 536px;
       height: 200px;
        img {
            width: 236px;
            height: 100%;
             
            border-radius: 6px; 
            transform: scaleY(0.9);
                                                                   
        }
    }
 .swiper-slide-active{        
        
        width: 536px;       
        z-index: 100; 
      
        img {
            width: 536px;
            margin-left: -120px;
            transform:scaleY(1);   
            border: 1px solid red;
                                  
        } 
    }
 .swiper-slide-prev{
      z-index: 1;   
      img{    
            width: 236px;
            height: 200px;             
            border-radius: 6px; 
            transform: scaleY(0.9); 
      } 
 }
  .swiper-slide-next{
       z-index: 1;   
      img{       
           width: 236px;
            height: 200px;               
            border-radius: 6px; 
            transform: scaleY(0.9);   
      } 
 }
 
 .swiper-container{
     height: 234px;     
    --swiper-theme-color: #ff6600;/* 设置Swiper风格 */
    --swiper-navigation-color: yellowgreen;/* 单独设置按钮颜色 */
    --swiper-navigation-size: 20px;/* 设置按钮大小 */
  }

</style>
