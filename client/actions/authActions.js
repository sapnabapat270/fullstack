import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from'jsonwebtoken';
import {SET_CURRENT_USER} from "./types";


export function setCurrentUser(user) {
    return{
        type:SET_CURRENT_USER,
        user
    }
}

export function logout() {
    return dispatch=>{
        localStorage.removeItem('jwtToken');
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}));
    }
}

export function userLoginRequest(user) {
    console.log("in login action");
    return dispatch=>{
        return axios.post('/api/auth',user).then(res=>{
            const token=res.data.token;
            localStorage.setItem('jwtToken',token);
            setAuthorizationToken(token);
            dispatch(setCurrentUser(jwt.decode(token)));
        });
    }
}