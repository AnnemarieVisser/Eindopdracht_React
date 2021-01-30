import React from 'react';

function SongListHeader(props) {
    return (
        <div>
            <table id='songsorting'>
                
                <tr>
                    <td>Title</td>   
                    <td>Artist</td>
                    <td>Genre</td>
                    <td>Rating</td>
                </tr>   
                             
                    {props.allSongs}
                                 
            </table>
        </div>
    )
}

export default SongListHeader