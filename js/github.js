'use strict'

class Github {
    constructor(){
        this._clientId = '7c55f2d7af345f500ff9';
        this._clientSecret = '5ecf2d38f0f46fd806f28743ee07ffa6c651e7a1';
    }

    async getUsers(user){
        //fetch profile
        const fetchUser = await fetch(`http://api.github.com/users/${user}?client_id=${this._clientId}&client_secret=${this._clientSecret}`);
        const profile = await fetchUser.json();
        //fetch repos
        const fetchRepos = await fetch(`http://api.github.com/users/${user}/repos?client_id=${this._clientId}&client_secret=${this._clientSecret}`);
        const repos = await fetchRepos.json()
        return {
            profile,
            repos
        }
    };
}