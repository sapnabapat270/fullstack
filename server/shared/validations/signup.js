import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';


export default function validateInput(data) {
    let errors={};

    if(Validator.isNull(data.username)){
        errors.username='Username is Required';
    }
    if(Validator.isNull(data.email)){
        errors.email='Email is Required';
    }
    if(!Validator.isEmail(data.email)){
        errors.email='Email is invalid';
    }
    if(Validator.isNull(data.password)){
        errors.password='Password is Required';
    }
    if(Validator.isNull(data.confirmPassword)){
        errors.confirmPassword='Confirm Password is Required';
    }
    if(!Validator.equals(data.password,data.confirmPassword)){
        errors.confirmPassword='Confirm password is not equal to password';
    }
    return{
        errors,
        isValid:isEmpty(errors)
    }
}
