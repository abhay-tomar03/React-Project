/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import {Link} from 'react-router-dom'
import {auth} from '../config/firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import {signOut} from 'firebase/auth'

const Nav = () => {
  const [user] = useAuthState(auth);

  const signUserOut =  async()=>{
    await signOut(auth);
  }
  return (
    <div className='navbar'>
      <div className='links'>
        <Link to="/">Home</Link>
        {/* integrating firebase database */}
        { !user ?(<Link to="/login">Login</Link>)
        : (<Link to="/createpost">Create Post</Link>)}
      </div>
      <div className='user'>
        { user && (
            <>
              <p>{user?.displayName} </p>
              <img src={user?.photoURL || "" } width='40' height='40'  />
              <button onClick={signUserOut} > Log Out</button>
            </>
        )
        }
      </div>
    </div>
  )
};

export default Nav