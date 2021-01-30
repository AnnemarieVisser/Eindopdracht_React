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

/* sortSongs(sortField) {
    this.setState(prevState => {
        const sortedSongs = prevState.songs.sort((a, b) => (a[sortField] > b[sortField]) ? 1 : -1)
            .map(song =>
                <SongList key={song.id} artist={song.artist} title={song.title} genre={song.genre} rating={song.rating} deleteSong={this.deleteSong}
                />);
        return { sortedSongs };
    })
}

sortSongsReversed(sortField) {
    this.setState(prevState => {
        const sortedSongs = prevState.songs.sort((a, b) => (b[sortField] > a[sortField]) ? 1 : -1)
            .map(song =>
                <SongList key={song.id} artist={song.artist} title={song.title} genre={song.genre} rating={song.rating} deleteSong={this.deleteSong}
                />);
        return { sortedSongs };
    })
} */