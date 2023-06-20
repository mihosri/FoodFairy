import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getMessage } from '../features/messageFeatures/messageSlice.js';
import './MessageComponent.css';
import cookie from '../images/FortuneCookieFirst.png';

function MessageComponent() {

  const messageState = useSelector((state) => state.message);

  const dispatch = useDispatch();

  function getFortune() {

    var cookieImage = document.getElementById('cookie');
    cookieImage.classList.add('shake');
    
    setTimeout(()=>{
      cookieImage.classList.remove('shake');
    }, 500);

    dispatch(getMessage());
    
  }

  return (
    <>
      
      <div className='messageCom'>

      <h1>Welcome to Food Fairy Land!</h1>
      <p>You can get your fortune message from Food Fairy by clicking the cookie</p>
      
      <img id='cookie' src={cookie} alt='Fortune Cookie' onClick={() => {getFortune()}}/>

      <div>
        <pre>
          {messageState.fortune}
        </pre>
      </div>
      </div>
    </>
    
  );
};

export default MessageComponent;
