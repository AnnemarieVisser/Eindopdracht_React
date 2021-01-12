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
        console.log(event.target.value);
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit(event) {
        event.preventDefault();
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
                        <option value="rock">Rock</option>
                        <option value="metal">Metal</option>
                        <option value="pop">Pop</option>
                        <option value="classic">Classic</option>
                        <option value="country">Country</option>
                    </select>

                    <select name="rating" value={this.state.value} onChange={this.handleChange}>
                        <option value="one">One Star</option>
                        <option value="two">Two Stars</option>
                        <option value="three">Three Stars</option>
                        <option value="four">Four Stars</option>
                        <option value="five">Five Stars</option>
                    </select>
                    <button type="submit">Add Song</button>
                </form>

            </div >
        )
    }
}


export default SongForm