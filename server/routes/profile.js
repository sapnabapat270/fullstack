import express from 'express';
import {users} from './users';
import {articles} from './articles';

let router=express.Router();

router.post('/',(req,res)=>{
    let profile={
        username:'',
        email:'',
        articles:[]
    }
    profile.username='sapna';
    profile.email='sapna@gmail.com';
    profile.articles=articles;
    console.log(articles);
    res.json(profile);

});


export default router;