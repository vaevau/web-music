import { getBanner, getPlaylist, getExclusivelist } from './request';

export default async (apiFun, apiPara) => {
    let data = null;

    switch (apiFun){
        case 'type':
            data = await getBanner(apiPara);
            break;
        case 'playlist':
            data = await getPlaylist(apiPara)
            break;
        case 'keywords':
            data = await getExclusivelist(apiPara)
            break;
        
            default:
                break;
    }
    return data;
}