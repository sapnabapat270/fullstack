import axios from 'axios';


export function loadProfileRequest(){
    return dispatch=>{
        return axios.post('/api/profile',null)
    }
}