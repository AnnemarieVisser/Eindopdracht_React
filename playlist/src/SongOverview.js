import React from "react";
import SongList from "./SongList";
import listOfSongs from "./listOfSongs";
import SongForm from "./SongForm";


class SongOverview extends React.Component {

    constructor() {
        super();
        this.state = {
            songs: listOfSongs
        }
        this.addSong = this.addSong.bind(this);
    }

    addSong = (song) => {
        console.log('addSong');
        song.preventDefault();
    }


    render() {
        const allSongs = this.state.songs.map(item => <SongList key={item.id} artist={item.artist} title={item.title} genre={item.genre} rating={item.rating} />)
        return (
            <div>
                <SongForm addSong={this.addSong} />
                {allSongs}
            </div>
        )
    }
}

export default SongOverview;