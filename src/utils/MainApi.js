class Api {
    constructor(baseUrl, headers){
        this._baseUrl = baseUrl;
        this._headers = headers
    }

    async _request({url, options}){
        const response = await fetch(this._baseUrl + url, options)
        if (response.ok){
            return await response.json()
        }
        else {
            return Promise.reject(await response.json())
        }

    }

    register(userInfo){
        return this._request({
            url: '/signup',
            options: {
                method: 'POST',
                credentials: 'include',
                headers: this._headers,
                body: JSON.stringify(userInfo),
            },
        })
    }

    login(userInfo){
        return this._request({
            url: '/signin',
            options: {
                method: 'POST',
                credentials: 'include',
                headers: this._headers,
                body: JSON.stringify(userInfo)
            },
        })
    }

    signout(){
        return this._request({
            url: '/signout',
            options: {
                method: 'GET',
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
                body: JSON.stringify(userInfo)
            },
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
                body: JSON.stringify(movieInfo)
            },
        })
    }

    deleteMovie(movieId){
        return this._request({
            url: `/movies/${movieId}`,
            options: {
                method: 'DELETE',
                credentials: 'include',
                headers: this._headers,
            },
        })
    }

}

const MainApi = new Api('api-javelin-movie.nomoredomains.club', {
                            "Content-Type": "application/json",
                            Accept: "application/json",
                            Origin: 'api-javelin-movie.nomoredomains.club'
                        })

export default MainApi