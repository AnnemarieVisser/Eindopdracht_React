import React from 'react';

function SongList(props) {
    return (
        <div>
            <p>{props.title}, {props.artist}, {props.genre}, {props.rating}</p>

        </div>
    )
}

export default SongList