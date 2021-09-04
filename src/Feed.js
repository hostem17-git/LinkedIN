import React from 'react'
import './Feed.css'
import InputOption from './InputOption'
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventIcon from '@material-ui/icons/Event';
import SubjectIcon from '@material-ui/icons/Subject';

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
                    <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
                    <InputOption Icon={YouTubeIcon} title="Video" color="#7fc15e" />
                    <InputOption Icon={EventIcon} title="Event" color="#e7a33e" />
                    <InputOption Icon={SubjectIcon} title="Write Article" color="#fc9295" />
                </div>
            </div>

            {/* Posts */}

        </div>
    )
}

export default Feed
