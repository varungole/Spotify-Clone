import React from 'react'
import Playlist from './Playlist'
import first from '../images/1.jpeg';
import second from '../images/2.jpeg';
import third from '../images/3.png';
import fourth from '../images/4.jpeg';

function MadeForMe() {
  return (
    <div className='made-for-me'>
       Made For Varun
        <Playlist name='Daily Mix 1' image={first}/>
        <Playlist name='Daily Mix 2' image={second}/>
        <Playlist name='Daily Mix 3' image={third}/>
        <Playlist name='Daily Mix 4' image={fourth}/>
    </div>
  )
}

export default MadeForMe