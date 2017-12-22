import React from 'react';
import { render } from 'react-dom'
import {Router,browserHistory} from 'react-router';
import routes from './routes';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore,applyMiddleware} from 'redux';
import rootReducer from './rootReducer';
import setAuthorizationToken from "./utils/setAuthorizationToken";
import {setCurrentUser} from "./actions/authActions";
import jwt from 'jsonwebtoken';

const store=createStore(
    rootReducer,
    applyMiddleware(thunk)
);

if(localStorage.jwtToken){
    setAuthorizationToken(localStorage.jwtToken);
    store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)));
}

render(<Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
    </Provider>
    ,document.getElementById('app'));
