import { Avatar } from '@material-ui/core';
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import "./HeaderOption.css";


function HeaderOption({ avatar, Icon, title, onClick }) {

    const user = useSelector(selectUser);

    return (
        <div className="header_option" onClick={onClick}>
            {Icon && <Icon className="header_option_icon" />}
            {avatar && (
                <Avatar className="header_option_icon" src={user?.photoUrl} >{user?.email[0]}</Avatar>
            )}
            <p className="header_option_title">{title}</p>
        </div>
    )
}

export default HeaderOption
