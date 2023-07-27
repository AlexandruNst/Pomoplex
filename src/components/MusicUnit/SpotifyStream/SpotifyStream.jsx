import { Spotify } from "react-spotify-embed"
import "./SpotifyStream.scss"

export default function SpotifyStream() {
    return (
        <section className="spotify-stream-wrapper">
            <Spotify link="https://open.spotify.com/album/1pgFg0Ikr5FxCxkbHpDGjC?si=bAPGYj26Rl2KfctAz9ooqQ" />
        </section>
    )
}