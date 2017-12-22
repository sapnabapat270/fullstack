import axios from 'axios';

export function userLoginRequest(user) {
    console.log("in login action");
    return dispatch=>{
        return axios.post('/api/auth',user);
    }
}