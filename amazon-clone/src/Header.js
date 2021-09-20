import React from 'react';
import 'Header.css';

function Header() {
    return (
        <div className="header">
            <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG1.png"></img>
            <div className="header_search">
                <input className="searchInput" type="text" />
                {/*logo*/}
            </div>
            <div className="header_nav">
                <div className="header_option">
                    <span className="header_option_line_one">Hello Guest</span>
                    <span className="header_option_line_two">Sign In</span>
                </div>
                <div className="header_option">
                    <span className="header_option_line_one">Returns</span>
                    <span className="header_option_line_two">& Orders</span>
                </div>
                <div className="header_option">
                    <span className="header_option_line_one">Your</span>
                    <span className="header_option_line_two">Prime</span>
                </div>
            </div>
        </div>
    )

}


export default Header;
