import React from 'react'
import Playlist from './Playlist'
import lavie from '../images/lavie.jpeg';
import florida from '../images/florida.jpeg';
import coldplay from '../images/coldplay.jpeg';
import folklore from '../images/folklore.png';

function Playlists() {
  return (
    <div className='Playlists'>
        Your Playlists
        <Playlist name='Cest la vie' image={lavie}/>
        <Playlist name='Unhinged music' image={florida}/>
        <Playlist name='Coldplay hits' image={coldplay}/>
        <Playlist name='Folklore' image={folklore}/>
    </div>
  )
}

export default Playlists