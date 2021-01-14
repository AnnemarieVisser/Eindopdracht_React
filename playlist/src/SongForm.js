import React from 'react'


class SongForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            artist: "",
            genre: "",
            rating: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addSongToList(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Song Title"
                        value={this.state.title}
                        onChange={this.handleChange}
                    />

                    <input
                        type="text"
                        name="artist"
                        placeholder="Artist"
                        value={this.state.artist}
                        onChange={this.handleChange}
                    />

                    <select name="genre" value={this.state.value} onChange={this.handleChange}>
                        <option value=" ">Select Genre</option>
                        <option value="Rock">Rock</option>
                        <option value="Metal">Metal</option>
                        <option value="Pop">Pop</option>
                        <option value="Classic">Classic</option>
                        <option value="Country">Country</option>
                    </select>

                    <select name="rating" value={this.state.value} onChange={this.handleChange}>
                        <option value=" ">Select Rating</option>
                        <option value="1">One Star</option>
                        <option value="2">Two Stars</option>
                        <option value="3">Three Stars</option>
                        <option value="4">Four Stars</option>
                        <option value="5">Five Stars</option>
                    </select>
                    <button type="submit" id="addsongbutton">Add Song</button>
                </form>

            </div >
        )
    }
}


export default SongForm