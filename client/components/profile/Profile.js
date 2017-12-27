import React from 'react';
import { connect } from 'react-redux';
import {loadProfileRequest} from "../../actions/profileActions";
import ProfileForm from './ProfileForm';

class Profile extends React.Component{

    constructor(props){
        super(props);
        this.state={
            profile:{}
        }
    }

    componentDidMount() {
        this.props.loadProfileRequest().then(
            (response) => {
                this.setState({
                    profile:response.data
                });
            },
            ({data}) => {
            }
        );
    }


    render(){
        const {profile}=this.state;
        return(
            <div>
                <ProfileForm profile={profile}></ProfileForm>
            </div>
        );
    }
}

Profile.propTypes={
    loadProfileRequest:React.PropTypes.func.isRequired,
    profile:React.PropTypes.object.isRequired
}

export default connect(null,{loadProfileRequest})(Profile);