
// import { reject, resolve } from 'core-js/fn/promise';
import { axiosPost} from '../libs/http';


function getBanner(type){
    return new Promise((resolve, reject) => {
        axiosPost({            
            url: '/api/banner',
            data: { type },
            success(data){
                resolve(data)
            },
            error(err){
                reject(err)
            }
        })
    })
}

function getPlaylist(limit){
    return new Promise((resolve, reject) => {
        axiosPost({
            url: '/api/personalized',
            data: { limit },
            
            success(data){
                resolve(data)
                
            },
            error(err){
                reject(err)
            }
        })
    })
}

function getExclusivelist( keywords ){
    return new Promise((resolve, reject) => {
        axiosPost({
            url: "/api/search",
            data: { keywords }, 
                      
            success(data){
                resolve(data)
                
            },
            error(err){
                reject(err)
            }

        })
    })
}

export{
    getBanner,
    getPlaylist,
    getExclusivelist
}