import React from 'react'
import folklore from '../images/folklore.png'
function CurrentSong() {
  return (
    <div className='current-song-bar'>
        <div className='song-details'>
            <img className='song-image' src={folklore} alt='song-logo'></img>
            <h3 className='song-name'>The 1</h3>
            <h5 className='song-singer'>Taylor Swift</h5>
        </div>

        <div className='song-manipulation-buttons'>
            <button className='previous-song'>Back</button>
            <button className='play-song'>Play/Pause</button>
            <button className='next-song'>Next</button>
        </div>

    </div>
  )
}

export default CurrentSong