import express from 'express';

let router=express.Router();

export let articles=[];

router.post('/',(req,res)=>{
    console.log("in listing articles server");
    res.json(articles);
});

router.post('/editArticle',(req,res)=>{
        console.log("in edit article server console");
        console.log(req.body);
        articles.push(req.body);
        res.status(200);
});



export default router;