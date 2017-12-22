import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {logout} from '../actions/authActions';

class NavigationBar extends React.Component{

    logout(e) {
        e.preventDefault();
        this.props.logout();
    }

    render() {
        const { isAuthenticated }=this.props.auth;

        const guestLinks=(
            <ul className="nav navbar-nav navbar-right">
                <li><Link to="/signup">Sign up</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        );

        const userLinks=(
            <ul className="nav navbar-nav navbar-right">
                <li><Link to="/articles">Articles</Link></li>
                <li><Link to="/settings">Settings</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><a href="#" onClick={this.logout.bind(this)}>Logout</a></li>
            </ul>
        );

        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a href="#" className="navbar-brand">Red Dice</a>
                    </div>

                    <div className="collapse navbar-collapse">
                        {isAuthenticated?userLinks:guestLinks}
                    </div>
                </div>
            </nav>
        );
    }
}

NavigationBar.propTypes={
    auth:React.PropTypes.object.isRequired,
    logout:React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return{
        auth:state.auth
    }
}

export default connect(mapStateToProps,{logout})(NavigationBar);