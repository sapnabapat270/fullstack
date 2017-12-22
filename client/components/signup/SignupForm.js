import React from 'react';
import validateInput from '../../../server/shared/validations/signup';
import {addFlashMessage} from "../../actions/flashMessages";
import TextFieldGroup from '../common/TextFieldGroup';

class SignupForm extends React.Component{

    constructor(props){
        super(props);
        this.state={
            username:'',
            email:'',
            password:'',
            confirmPassword:'',
            errors:{},
            isLoading:false
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value});
        //console.log(this.state);
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
        if(this.isValid()) {
            console.log("is valid in client");
            this.setState({errors: {}, isLoading: true});
            this.props.userSignupRequest(this.state).then(
                () => {
                    console.log("successful");
                    this.props.addFlashMessage({
                        type:'success',
                        text:'You signed up successfully. Welcome!'
                    });
                    //this.context.router.push('/');
                },
                ({data}) => {
                    console.log("error response");
                    console.log(data);
                    this.setState({errors: data, isLoading: false})
                }
            );
        }
    }

    render(){
        const {errors} = this.state;
        return(
            <form onSubmit={this.onSubmit}>
               <h1>Join Us</h1>
                <TextFieldGroup
                    error={errors.username}
                    label="Username"
                    onChange={this.onChange}
                    value={this.state.username}
                    field="username"
                />

                <TextFieldGroup
                    error={errors.email}
                    label="Email"
                    onChange={this.onChange}
                    value={this.state.email}
                    field="email"
                />

                <TextFieldGroup
                    error={errors.password}
                    label="Password"
                    onChange={this.onChange}
                    value={this.state.password}
                    field="password"
                    type="password"
                />

                <TextFieldGroup
                    error={errors.passwordConfirmation}
                    label="Password Confirmation"
                    onChange={this.onChange}
                    value={this.state.confirmPassword}
                    field="confirmPassword"
                    type="password"
                />

                <div className="form-group">
                    <button className="btn btn-primary btn-lg" disabled={this.state.isLoading}>Sign Up</button>
                </div>

            </form>
        );
    }
}

SignupForm.propTypes={
    userSignupRequest:React.PropTypes.func.isRequired,
    addFlashMessage:React.PropTypes.func.isRequired
}

export default SignupForm;