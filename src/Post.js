import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentRoundedIcon from '@material-ui/icons/CommentRounded';
import InputOption from './InputOption';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Post({ name, description, message, photoUrl }) {
    const user = useSelector(selectUser)
    return (
        <div className="post">
            <div className="post_header">
                <Avatar src={user.photoUrl}>{user.email[0]}</Avatar>
                <div className="post_info">
                    <h4> {name}</h4>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post_body">
                <p> {message} </p>
            </div>
            <div className="post_buttons">
                <InputOption Icon={ThumbUpIcon} title="Like" color="#727272" />
                <InputOption Icon={CommentRoundedIcon} title="Comment" color="#727272" />
                <InputOption Icon={ShareIcon} title="Share" color="#727272" />
                <InputOption Icon={SendIcon} title="Send" color="#727272" />
            </div>
        </div>
    )
}

export default Post
