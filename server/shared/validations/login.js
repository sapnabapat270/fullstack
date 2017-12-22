import Validator from 'validator';
import isEmpty from 'lodash/isEmpty'

export default function validateInput(data) {

    console.log("validation called");
    let errors={};

    if(Validator.isNull(data.identifier)){
        errors.identifier="Username is Required";
    }

    if(Validator.isNull(data.password)){
        errors.password="Passsord is Required";
    }


    console.log("errors are");
    console.log(errors);


    return{
        errors,
        isValid:isEmpty(errors)
    }
}