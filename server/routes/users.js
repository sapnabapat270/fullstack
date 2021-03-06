import express from 'express';

import validateInput from '../shared/validations/signup';

let router=express.Router();

export let users=[{
    username:'sapna',
    email:'sapna@gmail.com',
    password:'sapna',
    confirmPassword:'sapna',
},{
    username:'niki',
    email:'niki@gmail.com',
    password:'niki',
    confirmPassword:'niki',
}
];


router.post('/',(req,res)=>{
    const{errors,isValid} =validateInput(req.body);

    console.log("errors on server");
    console.log("isValid:  "+isValid);
    if(!isValid){
        console.log("in if");
        res.status(400).json(errors);
    }else{
        users.push(req.body);
        console.log("list users");
        console.log(users);
        res.status(200).json({});
    }
});


export default router;