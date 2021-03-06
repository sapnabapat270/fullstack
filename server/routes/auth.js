import express from 'express';
import Validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config';

import validateInput from '../shared/validations/login';

let router=express.Router();

router.post('/',(req,res)=>{
    const {identifier,password}=req.body;
    const{errors,isValid} =validateInput(req.body);
    console.log("at server");
        if(Validator.equals(req.body.identifier,'sapna') && Validator.equals(req.body.password,'sapna')){
            console.log("valid creds sapna");

                const token=jwt.sign({
                    id:"1",
                    username:req.body.identifier
                },config.jwtSecretSapna);

                res.json({token});

        }else if(Validator.equals(req.body.identifier,'niki') && Validator.equals(req.body.password,'niki')){
            console.log("valid creds niki");

            const token=jwt.sign({
                id:"2",
                username:req.body.identifier
            },config.jwtSecretNiki);

            res.json({token});

        }else{
          res.status(401).json({errors:{form:'Invalid Credentials'}});
        }
});


export default router;