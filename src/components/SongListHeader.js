import React from 'react';

function SongListHeader(props) {
    return (
        <div>
            <table className="listofsongs">
                <thead>
                    <tr className="subjects">
                        <td>Title</td>
                        <td>Artist</td>
                        <td>Genre</td>
                        <td>Rating</td>
                    </tr>
                </thead>
                <tbody>
                    {props.allSongs}
                </tbody>
            </table>
        </div>
    )
}

export default SongListHeader