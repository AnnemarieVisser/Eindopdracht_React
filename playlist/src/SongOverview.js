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
    }

    addSong = (song) => {
        console.log(song);
        this.setState(prevState => {
            const songs = [...prevState.songs, song];
            return { songs };
        })
    }

    render() {
        const allSongs = this.state.songs.map(item => <SongList key={item.id} artist={item.artist} title={item.title} genre={item.genre} rating={item.rating} />)
        return (
            <div>

                <SongForm addSongToList={this.addSong} />
                <SongSorting />
                {allSongs}
            </div>
        )
    }
}

export default SongOverview;