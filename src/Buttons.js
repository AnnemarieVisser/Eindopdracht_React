import React from 'react'

function Buttons(props) {
    return (
        <div className="buttonswrapper">
            <button id='deletebutton' type="submit" onClick={() => props.deleteAllSongs()}>Delete All Songs</button>

            <button className='sortsongbutton' type="submit" onClick={() => props.sortSongs('title')}> Sort songs by title (A-Z)</button>
            <button className='sortsongbutton' type="submit" onClick={() => props.sortSongsReversed('title')} > Sort songs by title (Z-A)</button>

            <button className='sortsongbutton' type="submit" onClick={() => props.sortSongs('artist')} > Sort songs by artist (A-Z)</button>
            <button className='sortsongbutton' type="submit" onClick={() => props.sortSongsReversed('artist')} > Sort songs by artist (Z-A)</button>

            <button className='sortsongbutton' type="submit" onClick={() => props.sortSongs('genre')} > Sort songs by genre (A-Z)</button>
            <button className='sortsongbutton' type="submit" onClick={() => props.sortSongsReversed('genre')} > Sort songs by genre (Z-A)</button>

            <button className='sortsongbutton' type="submit" onClick={() => props.sortSongs('rating')} > Sort songs by rating(lowest first)</button>
            <button className='sortsongbutton' type="submit" onClick={() => props.sortSongsReversed('rating')} > Sort songs by rating(highest first)</button> 
        </div>
    )
}

export default Buttons