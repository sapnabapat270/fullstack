import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev';
import users from './routes/users';
import auth from './routes/auth';
import bodyParser from 'body-parser';

let app=express();

app.use(bodyParser.json())
app.use('/api/users',users);
app.use('/api/auth',auth);

app.use(webpackMiddleware(webpack(webpackConfig)));

app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./index.html'));
});


app.listen(3000,()=>console.log('Running on localhost:3000'));