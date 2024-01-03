import React from 'react';
import profilepicture from '../images/download.jpeg';
import logo from '../images/spotify.png';
function Navbar() {
  return (
    <navbar className='navbar'>
        <img src={logo} alt='logo' className='spotify-logo'></img>
        <ul className='unordered-list'>
            <li className='list-item'>Home</li>
            <li className='list-item'>Playlist</li>
            <li className='list-item'>Settings</li>
            <div className='profile-display'>
                <h5 className='profile-name'>Varun Gole</h5>
                <img src={profilepicture} alt='profile' className='profile-picture'></img>
            </div>
        </ul>
    </navbar>
  )
}

export default Navbar