import React from 'react'
import './Sidenav.css'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar } from '@mui/material';
import { auth } from '../firebase';
import { logoutUser } from '../features/userSlice';
import { signOut } from 'firebase/auth';


function Sidenav() {
  const user = useSelector((state)=> state.data.user.user);
const dispatch = useDispatch();
const handlelogout=()=> {
  dispatch(logoutUser());
  signOut(auth);
}

  return (
    <div className='sidenav'>
        <img className='sidenav_logo'
         src = 'data:image/jpeg;base64,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'
         />
         <div className='sidenav_buttons'>
          <button className='sidenav_button'>
            <HomeIcon/>
            <span>Home</span>
          </button>
          <button className='sidenav_button'>
            <SearchIcon/>
            <span>Search</span>
          </button>
          <button className='sidenav_button'>
            <ExploreIcon/>
            <span>Explore</span>
          </button>
          <button className='sidenav_button'>
            <SlideshowIcon/>
            <span>Reels</span>
          </button>
          <button className='sidenav_button'>
            <ChatIcon/>
            <span>Messages</span>
          </button>
          <button className='sidenav_button'>
            <FavoriteIcon/>
            <span>Notifications</span>
          </button>
          <button className='sidenav_button'>
            <AddCircleOutlineIcon/>
            <span>Create</span>
          </button>
          <button className='sidenav_button'>
            <Avatar>
              {user.username ? user.username.charAt(0).toUpperCase() : "R" }
            </Avatar>
            <span>{user.username} <button onClick={handlelogout} className='logout_button'>Log out</button></span>
          </button>
         </div>
         <div className='sidenav_more'>
          <button className='sidenav_button'>
            <MenuIcon/>
            <span>More</span>
          </button>
         </div>
    </div>
  )
}

export default Sidenav
