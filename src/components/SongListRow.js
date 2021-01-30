import React from 'react';

function SongListRow(props) {
    return (

        <tr>
            <td>{props.title}</td>
            <td>{props.artist}</td>
            <td>{props.genre}</td>
            <td>{props.rating}</td>
        </tr>

    )
}

export default SongListRow