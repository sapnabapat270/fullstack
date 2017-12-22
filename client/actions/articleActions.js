import axios from 'axios';

export function addArticleRequest(article){
    return dispatch=>{
        return axios.post('/api/articles/editArticle',article)
    }
}

export function getArticles(){
    console.log("in get Articles actions");
    return dispatch=>{
        return axios.post('/api/articles',null)
    }
}