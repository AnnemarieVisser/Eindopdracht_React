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
        this.sortSongs = this.sortSongs.bind(this);
        this.sortSongsReversed = this.sortSongsReversed.bind(this);
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

    sortSongs(sortField) {
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
    }

    render() {
        const allSongs = this.state.songs.map(item => <SongList key={item.id} artist={item.artist} title={item.title} genre={item.genre} rating={item.rating} deleteSong={this.deleteSong} />)
        return (
            <div>
                <SongForm addSongToList={this.addSong} />
                <SongSorting />
                {allSongs}
                <button id='deletebutton' type="submit" onClick={this.deleteAllSongs}>Delete All Songs</button>
                <button className='sortsongbutton' type="submit" onClick={() => this.sortSongs('title')} > Sort songs by title (A-Z)</button>
                <button className='sortsongbutton' type="submit" onClick={() => this.sortSongsReversed('title')} > Sort songs by title (Z-A)</button>
                <button className='sortsongbutton' type="submit" onClick={() => this.sortSongs('artist')} > Sort songs by artist (A-Z)</button>
                <button className='sortsongbutton' type="submit" onClick={() => this.sortSongsReversed('artist')} > Sort songs by artist (Z-A)</button>
                <button className='sortsongbutton' type="submit" onClick={() => this.sortSongs('genre')} > Sort songs by genre (A-Z)</button>
                <button className='sortsongbutton' type="submit" onClick={() => this.sortSongsReversed('genre')} > Sort songs by genre (Z-A)</button>
                <button className='sortsongbutton' type="submit" onClick={() => this.sortSongs('rating')} > Sort songs by rating(lowest first)</button>
                <button className='sortsongbutton' type="submit" onClick={() => this.sortSongsReversed('rating')} > Sort songs by rating(highest first)</button>
            </div>
        )
    }
}

export default SongOverview;