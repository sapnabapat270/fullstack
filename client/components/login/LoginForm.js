import React from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import validateInput from '../../../server/shared/validations/login';
import {addFlashMessage} from "../../actions/flashMessages";

class LoginForm extends React.Component{

    constructor(props){
    super(props);
    this.state={
      identifier:'',
      password:'',
      errors:{},
      isLoading:false
    };

    this.onSubmit=this.onSubmit.bind(this);
    this.onChange=this.onChange.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    isValid(){
        const {errors,isValid}=validateInput(this.state);
        if(!isValid){
            this.setState({errors});
        }
        return isValid;
    }

    onSubmit(e){
        e.preventDefault();
        console.log("Request Submitted");
        if(this.isValid()) {
            this.setState({errors: {}, isLoading: true});
            this.props.userLoginRequest(this.state).then(
                () => {
                    console.log("login successful");
                    this.props.addFlashMessage({
                        type:'success',
                        text:'Logged in!'
                    });
                    //this.context.router.push('/');
                },
                ({data}) => {
                    console.log("error response");
                    console.log(data);
                    this.setState({errors: data, isLoading: false})
                }
            );
        }    }

    render(){
        const {errors}=this.state;
        return(
            <form onSubmit={this.onSubmit}>
                <h1>Login</h1>

                {errors.form && <div className="alert alert-danger">{errors.form}</div>}
                <TextFieldGroup
                    error={errors.identifier}
                    label="Username"
                    onChange={this.onChange}
                    value={this.state.identifier}
                    field="identifier"
                />
                <TextFieldGroup
                    error={errors.password}
                    label="Password"
                    onChange={this.onChange}
                    value={this.state.password}
                    field="password"
                    type="password"
                />

                <div className="form-group">
                    <button className="btn btn-primary btn-lg" disabled={this.state.isLoading}>Login</button>
                </div>

            </form>
        );
    }
}


LoginForm.propTypes={
    userLoginRequest:React.PropTypes.func.isRequired,
    addFlashMessage:React.PropTypes.func.isRequired
}

export default LoginForm;