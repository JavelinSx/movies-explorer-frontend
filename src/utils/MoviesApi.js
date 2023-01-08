import {urlBeatFilm} from './constant';

class Api {
    constructor(baseUrl, headers){
        this._baseUrl = baseUrl;
        this._headers = headers
    }

    _request({url, options}){
        return fetch(this._baseUrl + url, options).then(this._pasrseResponse)
    }

    _pasrseResponse(res){
        if(res.ok){
            return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    }

    getMovies(){
        return this._request({
            url: '/movies',
            options: {
                method: 'GET',
                credentials: 'include',
                headers: this._headers,
            },
        })
    }
}

const MovieApi = new Api(urlBeatFilm,{
    "Content-Type": "application/json",
    Accept: "application/json",
    Origin: urlBeatFilm
})

export default MovieApi