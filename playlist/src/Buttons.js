import React from 'react'

function Buttons(props) {
    return (
        <div>
            <button id='deletebutton' type="submit" onClick={() => props.deleteAllSongs()}>Delete All Songs</button>
            <button className='sortsongbutton' type="submit" onClick={() => props.sortSongs('title')}> Sort songs by title (A-Z)</button>
            <button className='sortsongbutton' type="submit" onClick={() => props.sortSongsReversed('title')} > Sort songs by title (Z-A)</button>
            <button className='sortsongbutton' type="submit" onClick={() => props.sortSongs('title')} > Sort songs by artist (A-Z)</button>
            <button className='sortsongbutton' type="submit" onClick={() => props.sortSongsReversed('title')} > Sort songs by artist (Z-A)</button>
            <button className='sortsongbutton' type="submit" onClick={() => props.sortSongs('title')} > Sort songs by genre (A-Z)</button>
            <button className='sortsongbutton' type="submit" onClick={() => props.sortSongsReversed('title')} > Sort songs by genre (Z-A)</button>
            <button className='sortsongbutton' type="submit" onClick={() => props.sortSongs('title')} > Sort songs by rating(lowest first)</button>
            <button className='sortsongbutton' type="submit" onClick={() => props.sortSongsReversed('title')} > Sort songs by rating(highest first)</button>
        </div >
    )
}

export default Buttons