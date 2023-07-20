import "./Music.scss"
import { Spotify } from "react-spotify-embed"

export default function Music() {
    return (
        <div className="music">
            <h2 className="title">Music</h2>
            <p>Work in Progress, coming soon!</p>
            <Spotify link="https://open.spotify.com/album/1pgFg0Ikr5FxCxkbHpDGjC?si=bAPGYj26Rl2KfctAz9ooqQ" />
        </div>
    )
}