import React from 'react'
import './Suggestion.css'
import { Avatar } from '@mui/material'

function Suggestion() {
  return (
    <div className='suggestions'>
      <div className='suggestions_title'>Suggestion for you</div>
      <div className='suggestions_usernames'>
        <div className='suggestions_username'>
          <div className='username_left'>
            <span className='avatar'>
              <Avatar>R</Avatar>
            </span>
            <div className='username_info'>
              <span className='username'>New User__</span>
              <span className='relation'>New to Instagram</span>
            </div>
          </div>
          <div className='follow_button'>Follow</div>
        </div>
      </div>
      <div className='suggestions_usernames'>
        <div className='suggestions_username'>
          <div className='username_left'>
            <span className='avatar'>
              <Avatar>P</Avatar>
            </span>
            <div className='username_info'>
              <span className='username'>Second User__</span>
              <span className='relation'>New to Instagram</span>
            </div>
          </div>
          <div className='follow_button'>Follow</div>
        </div>
      </div>
      <div className='suggestions_usernames'>
        <div className='suggestions_username'>
          <div className='username_left'>
            <span className='avatar'>
              <Avatar>S</Avatar>
            </span>
            <div className='username_info'>
              <span className='username'>Third User__</span>
              <span className='relation'>New to Instagram</span>
            </div>
          </div>
          <div className='follow_button'>Follow</div>
        </div>
      </div>
    </div>

)
}

export default Suggestion
