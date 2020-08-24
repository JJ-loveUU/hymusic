import instance from './require';

export function getSongDetail(ids) {
    return instance({
        url: "/song/detail",
        params: {
            ids
        }
    })
}