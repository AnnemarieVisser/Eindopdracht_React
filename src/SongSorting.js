import React from 'react';

function SongSorting() {
    return (
        <div>
            <table id='songsorting'>
                <tbody>
                    <tr>
                        <td>Title</td>
                        <td>Artist</td>
                        <td>Genre</td>
                        <td>Rating</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default SongSorting

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