import React, { useEffect, useState } from 'react'
import './Feed.css'
import Post from './Post'
import InputOption from './InputOption'
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventIcon from '@material-ui/icons/Event';
import SubjectIcon from '@material-ui/icons/Subject';
import { db } from './firebase'
import firebase from 'firebase'

function Feed() {
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState('');
    useEffect(() => {
        db.collection("posts").orderBy('timestamp', "desc").onSnapshot((snapShot) => (
            setPosts(
                snapShot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        ))
    }, [])

    const sendPost = (e) => {
        e.preventDefault(); // Stops redirection/page-refresh on form submission \
        db.collection('posts').add({
            name: "VJ",
            description: "testing",
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput("")
    }
    return (
        <div className="feed">
            <div className="feed_input_container">
                <div className="feed_input">
                    <CreateIcon />
                    <form>
                        <input type="text" value={input} onChange={e => setInput(e.target.value)}></input>
                        <button onClick={sendPost} type="submit">Post</button>
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
            {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}

        </div>
    )
}

export default Feed
