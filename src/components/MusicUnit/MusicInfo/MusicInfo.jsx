import "./MusicInfo.scss"

export default function MusicInfo(props) {
    const channel = props.channel === "spotify" ? "Spotify" : "Youtube"

    return (
        <aside className="music-info-wrapper">
            <p className="music-info">Listening on {channel}</p>
            {props.showInfo && <p className="music-info">Listen on {props.info}</p>}
        </aside>
    )
}