import * as api from './api';
// import baseurl from '../ConnectionPath/baseurl'

// axios.defaults.baseURL = 'https://hacker-news.firebaseio.com/v0/';

var topLists = (data) => {
    let url = "topstories.json"
    return api.get(url, data, {}).then(data => {
        var response = data.data
        return response;
    }).catch(err => {
        return Promise.reject(err);
    })

}

var newLists = (data) => {
    let url = "topstories.json"
    return api.get(url, data, {}).then(data => {
        var response = data.data
        return response;
    }).catch(err => {
        return Promise.reject(err);
    })

}
var itemData = (data, id) => {
    let url = `/item/${id}/.json`;
    return api.get(url, data, {}).then(data => {
        var response = data.data
        return response;
    }).catch(err => {
        return Promise.reject(err);
    })

}
var showStories = (data) => {
    let url = "showstories.json"
    return api.get(url, data, {}).then(data => {
        var response = data.data
        return response;
    }).catch(err => {
        return Promise.reject(err);
    })

}
var topLists = (data) => {
    let url = "topstories.json"
    return api.get(url, data, {}).then(data => {
        var response = data.data
        return response;
    }).catch(err => {
        return Promise.reject(err);
    })

}
export default { topLists, newLists, showStories, itemData }