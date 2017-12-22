import React from 'react';

export default ()=>{
    return(
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a href="#" className="navbar-brand">Red Dice</a>
                </div>

                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="signup">Sign Up</a></li>
                        <li><a href="login">Login</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}