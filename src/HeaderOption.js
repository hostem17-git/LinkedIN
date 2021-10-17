import { Avatar } from '@material-ui/core';
import React from 'react'
import "./HeaderOption.css";

function HeaderOption({ avatar, Icon, title, onClick }) {
    return (
        <div className="header_option" onClick={onClick}>
            {Icon && <Icon className="header_option_icon" />}
            {avatar && (
                <Avatar className="header_option_icon" src={avatar} />
            )}
            <p className="header_option_title">{title}</p>
        </div>
    )
}

export default HeaderOption
