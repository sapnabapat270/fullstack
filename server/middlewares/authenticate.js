import jwt from 'jsonwebtoken';
import config from '../config';

export default (req,res,next)=>{
    console.log("in authentication");
    const authorizationHeader=req.headers['authorization'];

    let token;
    if(authorizationHeader){
        token=authorizationHeader.split(' ')[1];
    }

    if(token){
        jwt.verify(token,config.jwtSecretSapna,(err,decoded)=>{
            if(err){
                res.status(401).json({error:'Failed to authenticate'});
            }else{
                req.body.id=1;
                next();
            }
        });

    }else{
        res.status(403).json({
           errors:'No token provided'
        });
    }
}