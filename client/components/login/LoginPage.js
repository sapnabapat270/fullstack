import React from 'react';
import LoginForm from './LoginForm';
import {userLoginRequest} from "../../actions/authActions";
import {addFlashMessage} from "../../actions/flashMessages";
import {connect} from 'react-redux';

class LoginPage extends React.Component{
    render(){
        const {userLoginRequest,addFlashMessage}=this.props;
        return(
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <LoginForm userLoginRequest={userLoginRequest} addFlashMessage={addFlashMessage}/>
                </div>
            </div>
        );
    }
}

LoginPage.propTypes={
    userLoginRequest:React.PropTypes.func.isRequired,
    addFlashMessage:React.PropTypes.func.isRequired
}

export default connect(null,{userLoginRequest,addFlashMessage})(LoginPage);