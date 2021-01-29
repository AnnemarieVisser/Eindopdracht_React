import React from 'react';

function SongList(props) {
    return (
        <div>
            <table id='songlist'>
                <tbody>
                    <tr>
                        <td>{props.title}</td>
                        <td>{props.artist}</td>
                        <td>{props.genre}</td>
                        <td>{props.rating}</td>
                    </tr>
                </tbody>
            </table>
        </div >
    )
}

export default SongList