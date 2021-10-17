import React from 'react';
import './App.css';
import Header from "./Header"
import Sidebar from "./Sidebar"
import Feed from "./Feed"
import Login from './Login'
import LoginHeader from './LoginHeader';
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser)
  return (
    <div className={!user ? "login_app" : "app"}>
      {/* Header */}
      {!user ? (<LoginHeader />) : (<Header />)}
      {/* App Body */}

      {!user ? (<Login />) : (
        <div className="app_body">
          <Sidebar />
          {/* sidebar */}
          <Feed />
          {/* feed */}
          {/* widgets */}
        </div>

      )}



    </div>
  );
}

export default App;
