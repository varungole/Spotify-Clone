import React from 'react'

function Playlist({name , image}) {
  return (
    <div className='playlist'>
        <img src={image} alt='playlist' className='playlist-image' ></img>
        <h3 className='playlist-title'>{name}</h3>
        <button className='play-playlist'></button>
    </div>
  )
}

export default Playlist