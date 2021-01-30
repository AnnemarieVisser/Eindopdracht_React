import React from 'react'

function Buttons(props) {
    return (
        <div className="buttonswrapper">
            
            <button className='sortsongbutton' id="deletebutton" type="submit" onClick={() => props.deleteAllSongs()}>Delete All Songs</button>
            
            <button className='sortsongbutton' type="submit" onClick={() => props.sortSongs('title')}> Sort Title A-Z)</button>
            <button className='sortsongbutton rev' type="submit" onClick={() => props.sortSongsReversed('title')} > Sort Title Z-A</button>

            <button className='sortsongbutton' type="submit" onClick={() => props.sortSongs('artist')} > Sort Artist A-Z</button>
            <button className='sortsongbutton rev' type="submit" onClick={() => props.sortSongsReversed('artist')} > Sort Artist Z-A</button>

            <button className='sortsongbutton' type="submit" onClick={() => props.sortSongs('genre')} > Sort Genre A-Z</button>
            <button className='sortsongbutton rev' type="submit" onClick={() => props.sortSongsReversed('genre')} > Sort Genre Z-A</button>

            <button className='sortsongbutton' type="submit" onClick={() => props.sortSongs('rating')} > Sort Rating 1-5</button>
            <button className='sortsongbutton rev' type="submit" onClick={() => props.sortSongsReversed('rating')} > Sort Rating 5-1</button> 
        </div>
    )
}

export default Buttons