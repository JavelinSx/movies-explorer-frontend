import {urlApi} from './constant';

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
            url: 'beatfilm-movies',
            options: {
                method: 'GET',
                headers: this._headers,
            },
        })
    }
}

const MovieApi = new Api(urlApi,{
    "Content-Type": "application/json",
    Accept: "application/json",
    Origin: urlApi
})

export default MovieApi