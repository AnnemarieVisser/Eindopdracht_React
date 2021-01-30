import React from "react";
import SongListRow from "./components/SongListRow";
import listOfSongs from "./components/listOfSongs";
import SongForm from "./components/SongForm";
import SongListHeader from "./components/SongListHeader"
import Buttons from "./components/Buttons"


class SongOverview extends React.Component {

    constructor() {
        super();
        this.state = {
            songs: listOfSongs
        }

        this.addSong = this.addSong.bind(this);
        this.deleteAllSongs = this.deleteAllSongs.bind(this);
        this.sortSongs = this.sortSongs.bind(this);
        this.sortSongsReversed = this.sortSongsReversed.bind(this);
    }

    addSong = (song) => {
        this.setState(prevState => {
            const songs = [...prevState.songs];
            songs.push({
                id: song.title,
                title: song.title,
                artist: song.artist,
                genre: song.genre,
                rating: song.rating
            })
            return { songs };
        })
    }

    deleteAllSongs() {
        this.setState({ songs: [] });
    }

    sortSongs(sortField) {
        this.setState(prevState => {
            const sortedSongs = prevState.songs.sort((a, b) => (a[sortField].toUpperCase() > b[sortField].toUpperCase()) ? 1 : -1)
                .map(song =>
                    <SongListRow key={song.id} artist={song.artist} title={song.title} genre={song.genre} rating={song.rating} deleteSong={this.deleteSong}
                    />);
            return { sortedSongs };
        })
    }

    sortSongsReversed(sortField) {
        this.setState(prevState => {
            const sortedSongs = prevState.songs.sort((a, b) => (b[sortField].toUpperCase() > a[sortField].toUpperCase()) ? 1 : -1)
                .map(song =>
                    <SongListRow key={song.id} artist={song.artist} title={song.title} genre={song.genre} rating={song.rating} deleteSong={this.deleteSong}
                    />);
            return { sortedSongs };
        })
    }

    render() {
        const allSongs = this.state.songs.map(item => <SongListRow key={item.id} artist={item.artist} title={item.title} genre={item.genre} rating={item.rating} deleteSong={this.deleteSong} />)
        return (
            <div>
                <Buttons deleteAllSongs={this.deleteAllSongs} sortSongs={this.sortSongs} sortSongsReversed={this.sortSongsReversed} />
                <SongForm addSongToList={this.addSong} />
                <SongListHeader allSongs={allSongs} />
            </div>
        )
    }
}

export default SongOverview;