import express from 'express';
import authenticate from "../middlewares/authenticate";

let router=express.Router();

export let articles=[{
    articleName:"Art 1",
    content:"Art 1 content",
    id:"art1id"
}];

router.post('/',(req,res)=>{
    console.log("in listing articles server");
    console.log(articles);
    res.json(articles);
});

router.post('/editArticle',authenticate,(req,res)=>{
        console.log("in edit article server console");
        console.log(req.body);
        articles.push(req.body);
        res.status(200);
});



export default router;