import React from "react";
import SongList from "./SongList";
import listOfSongs from "./listOfSongs";
import SongForm from "./SongForm";
import SongSorting from "./SongSorting"


class SongOverview extends React.Component {

    constructor() {
        super();
        this.state = {
            songs: listOfSongs
        }
        this.addSong = this.addSong.bind(this);
        this.deleteAllSongs = this.deleteAllSongs.bind(this);
        this.sortSongsByGenre = this.sortSongsByGenre.bind(this);
    }

    addSong = (song) => {
        this.setState(prevState => {
            const songs = [...prevState.songs, song];
            return { songs };
        })
    }

    deleteAllSongs() {
        this.setState({ songs: [] });
    }

    sortSongsByGenre() {
        console.log('sortsongs');
        this.setState(prevState => {
            const sortedSongs = prevState.songs.sort((a, b) => (a.genre > b.genre) ? 1 : -1)
                .map(song =>
                    <SongList key={song.id} artist={song.artist} title={song.title} genre={song.genre} rating={song.rating} deleteSong={this.deleteSong}
                    />);
            return { sortedSongs };
        })
    }

    render() {
        const allSongs = this.state.songs.map(item => <SongList key={item.id} artist={item.artist} title={item.title} genre={item.genre} rating={item.rating} deleteSong={this.deleteSong} />)
        return (
            <div>
                <SongForm addSongToList={this.addSong} />
                <SongSorting />
                {allSongs}
                <button id='deletebutton' type="submit" onClick={this.deleteAllSongs}>Delete All Songs</button>
                <button id='sortsongs' type="submit" onClick={this.sortSongsByGenre} > Sort songs by genre</button>
            </div>
        )
    }
}

export default SongOverview;