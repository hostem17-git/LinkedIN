import React from 'react'
import "./HeaderOption.css";
function HeaderOption({ Icon, title }) {
    return (
        <div className="header_option">
            {Icon && <Icon className="header_option_icon" />}
            <p className="header_option_title">{title}</p>
        </div>
    )
}

export default HeaderOption
