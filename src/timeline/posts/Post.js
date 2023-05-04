import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

function Post({user,postImage,like,timeStamp}) {
  return (
    <div className='post'>
      <div className='post_header'>
        <div className='post_headerauthor'>
            <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
           <div className='divuser'>{user}</div> . <span>{timeStamp}</span>
        </div>
        <MoreHorizIcon/>
      </div>
      <div className='post_image'>
        <img src={postImage}/>
      </div>
      <div className='post_footer'>
        <div className='post_footericons'>
            <div className='post_iconmain'>
                < FavoriteBorderIcon className='postIcon'/>
                < ChatBubbleOutlineIcon className='postIcon'/>
                < TelegramIcon className='postIcon'/>
            </div>
            <div className='post_inconsave'>
                <BookmarkBorderIcon className='postIcon'/>
            </div>
        </div>
        Liked by {like} people
      </div>

    </div>
  )
}

export default Post
