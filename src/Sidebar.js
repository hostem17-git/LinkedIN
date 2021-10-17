import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import "./Sidebar.css"
function Sidebar() {
    const user = useSelector(selectUser);


    const recentItem = (topic) => (
        <div className="sidebar_recent">
            <p><span className="sidebar_hash">#</span>
                {topic}</p>
        </div>
    )
    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80" alt="sidebar_bg" />
                <Avatar src={user.photoUrl} className="sidebar_avatar" >{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed your Profile</p>
                    <p className="sidebar_stat_number">2000</p>
                </div>

                <div className="sidebar_stat">
                    <p>Views on your posts</p>
                    <p className="sidebar_stat_number">2000</p>
                </div>
            </div>

            <div className="sidebar_bottom">
                <p className="sidebar_bottom_heading">Recent</p>
                <hr />
                {recentItem("react.js")}
                {recentItem("competetiveProgramming")}
                {recentItem("webdev")}
                {recentItem("programing")}
                {recentItem("softwareDevelopment")}
            </div>
        </div>
    )
}

export default Sidebar
