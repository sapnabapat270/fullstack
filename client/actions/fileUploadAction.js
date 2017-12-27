export function uploadFile(file) {
    return dispatch=>{
        return axios.post('/api/articles/editArticle',file)
    }
}