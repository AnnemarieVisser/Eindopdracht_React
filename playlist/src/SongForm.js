import React from 'react'

function SongForm(change) {
    return (
        <div>
            <form>
                <input
                    type="text"
                    name="title"
                    placeholder="Song Title"
                />

                <input
                    type="text"
                    name="artist"
                    placeholder="Artist"
                />

                <select name="genre">
                    <option value="rock">Rock</option>
                    <option value="metal">Metal</option>
                    <option value="pop">Pop</option>
                    <option value="classic">Classic</option>
                    <option value="country">Country</option>
                </select>

                <select name="rating">
                    <option value="one">One Star</option>
                    <option value="two">Two Stars</option>
                    <option value="three">Three Stars</option>
                    <option value="four">Four Stars</option>
                    <option value="five">Five Stars</option>
                </select>
                <button type="submit" onClick={() => change.addSong()}>Add Song</button>
            </form>

        </div>
    )
}

export default SongForm