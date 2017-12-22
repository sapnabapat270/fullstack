import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './components/App';
import Greetings from './components/Greetings';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
import Articles from './components/articles/Articles';
import EditArticle from './components/articles/EditArticle';
import Settings from './components/settings/Settings';
import Profile from './components/profile/Profile';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Greetings}/>
        <Route path="signup" component={SignupPage}/>
        <Route path="login" component={LoginPage}/>
        <Route path="articles" component={Articles}/>
        <Route path="editArticle" component={EditArticle}/>
        <Route path="settings" component={Settings}/>
        <Route path="profile" component={Profile}/>
    </Route>
)