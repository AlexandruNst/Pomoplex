import { Spotify } from "react-spotify-embed"
import "./SpotifyStream.scss"
import { useState } from "react";

export default function SpotifyStream() {
    const [inputText, setInputText] = useState("")
    const [link, setLink] = useState("https://open.spotify.com/album/1pgFg0Ikr5FxCxkbHpDGjC?si=bAPGYj26Rl2KfctAz9ooqQ")
    const [showForm, setShowForm] = useState(false)

    function handleChange(event) {
        setInputText(event.target.value);
    }

    function toggleForm() {
        setShowForm(oldShowForm => !oldShowForm)
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (/^(spotify:|https:\/\/[a-z]+\.spotify\.com\/)/.test(inputText)) {
            setLink(inputText)
            setInputText("")
        } else {
            alert("Please enter valid Spotify URL")
        }
    }

    return (
        <>
            <section className="spotify-stream-wrapper">
                <Spotify link={link} />
            </section>
            <div className="change-section-spotify" onClick={toggleForm}>
                <span>Change the music</span> <span class="material-symbols-outlined">
                    {showForm ? "expand_less" : "expand_more"}
                </span>
            </div>
            {showForm &&
                <form className="spotify-form" onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            name="spotifyPlaylist"
                            id="spotifyPlaylist"
                            placeholder="Enter Spotify URL here"
                            value={inputText}
                            onChange={handleChange}
                        />
                        <button>Listen</button>
                    </div>
                </form>
            }
        </>
    )
}