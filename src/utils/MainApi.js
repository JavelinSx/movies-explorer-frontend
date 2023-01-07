class Api {
    constructor(baseUrl, headers){
        this._baseUrl = baseUrl;
        this._headers = headers
    }

    _request({url, options}){
        return fetch(url, options).then(this._pasrseResponse)
    }

    _pasrseResponse(res){
        if(res.ok){
            return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    }

    register(userInfo){
        return this._request({
            url: '/signup',
            options: {
                method: 'POST',
                credentials: 'include',
                headers: this._headers,
            },
            body: JSON.stringify(userInfo),
        })
    }

    login(userInfo){
        return this._request({
            url: '/signin',
            options: {
                method: 'POST',
                credentials: 'include',
                headers: this._headers,
            },
            body: JSON.stringify(userInfo)
        })
    }

    signout(){
        return this._request({
            url: '/signout',
            options: {
                method: 'POST',
                credentials: 'include',
                headers: this._headers,
            },
        })
    }

    getUserInfo(){
        return this._request({
            url: '/users/me',
            options: {
                method: 'GET',
                credentials: 'include',
                headers: this._headers,
            },
        })
    }

    updateUserInfo(userInfo){
        return this._request({
            url: '/users/me',
            options: {
                method: 'PATCH',
                credentials: 'include',
                headers: this._headers,
            },
            body: JSON.stringify(userInfo)
        })
    }

    getSavedMovies(){
        return this._request({
            url: '/movies',
            options: {
                method: 'GET',
                credentials: 'include',
                headers: this._headers,
            },
        })
    }

    addMovie(movieInfo){
        return this._request({
            url: '/movies',
            options: {
                method: 'POST',
                credentials: 'include',
                headers: this._headers,
            },
            body: JSON.stringify(movieInfo)
        })
    }

    deleteMovie(movieId){
        return this._request({
            url: '/movies',
            options: {
                method: 'DELETE',
                credentials: 'include',
                headers: this._headers,
            },
            body: JSON.stringify(movieId)
        })
    }

}

const MainApi = new Api('http://localhost:3001', {
                            "Content-Type": "application/json",
                            Accept: "application/json",
                            Origin: "http://localhost:3001"
                        })

export default MainApi