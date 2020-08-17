import React from 'react';
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <div className="right menu">
                <GoogleAuth />
            </div>
        </div>
    );
};

export default Header;