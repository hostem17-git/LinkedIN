import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Header from "./Header"
import Sidebar from "./Sidebar"
import Feed from "./Feed"
import Login from './Login'
import LoginHeader from './LoginHeader';
import Widgets from './Widgets';
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice';
import { auth } from './firebase';
import { login, logout } from "./features/userSlice"
function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();
  useEffect(() => { //to save login session
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //logged in   
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL,
        }))
      }
      else {
        //logged out
        dispatch(logout());
      }
    })
  })

  return (
    <div className={!user ? "login_app" : "app"}>
      {/* Header */}
      {!user ? (<LoginHeader />) : (<Header />)}
      {/* App Body */}

      {!user ? (<Login />) : (
        <div className="app_body">
          {/* sidebar */}
          <Sidebar />
          {/* feed */}
          <Feed />
          {/* widgets */}
          <Widgets />
        </div>

      )}



    </div>
  );
}

export default App;
