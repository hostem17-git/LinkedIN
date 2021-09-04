import React from 'react'
import './Feed.css'
import InputOption from './InputOption'
import CreateIcon from '@material-ui/icons/Create'
function Feed() {
    return (
        <div className="feed">
            <div className="feed_input_container">
                <div className="feed_input">
                    <CreateIcon />
                    <form>
                        <input type="text"></input>
                        <button type="submit">Post</button>
                    </form>
                </div>
                <div className="feed_input_options">
                    <InputOption />
                </div>
            </div>
        </div>
    )
}

export default Feed
