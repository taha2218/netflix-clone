import React from 'react'
import { auth } from '../../../utils/firebase/firebase.utils';
import Nav from '../Nav/Nav';
import './ProfileScreen.css';

function ProfileScreen() {

  const LogOutHandler = () => {
    auth.signOut();
  }

  return (
    <div className='profileScreen' >
      <Nav />
      <div className='profileScreen__body'>
        <h1>Edit Profile</h1>
        <div className='profileScreen__details'>
          <img 
          className='profileScreen__avatar'
          src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png' 
          />
          <div className='profileScreen__data'>
            <div className='mail'>ta.22.ha.18.s@gmail.com</div>
            <div className='profileScreen__plans'>
              <div className='plans__header'>Plans</div>
              <div className='plans__'>
                <h3>Netflix Standard<br/> <span className='price' >$0.80/month</span></h3>
                <button>Subscribe</button>
              </div>
              <div className='plans__'>
                <h3>Netflix Basic <br/> <span className='price' >$1.50/month</span> </h3>
                <button>Subscribe</button>
              </div>
              <div className='plans__'>
                <h3>Netflix Premium<br/> <span className='price' >$2.90/month</span></h3>
                <button>Subscribe</button>
              </div>
            </div>
            <button 
            className='profileScreen__logout'
            onClick={LogOutHandler}>Sign Out</button>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default ProfileScreen