import { useState } from "react"
import MusicButtons from "../MusicButtons/MusicButtons"
import MusicInfo from "../MusicInfo/MusicInfo"
import "./Music.scss"
import { Spotify } from "react-spotify-embed"
import SpotifyStream from "../SpotifyStream/SpotifyStream"
import YoutubeStream from "../YoutubeStream/YoutubeStream"

export default function Music() {
    const [channel, setChannel] = useState("youtube")
    const [showInfo, setShowInfo] = useState(false)
    const [info, setInfo] = useState("Spotify")

    function setChosenChannel(chosenChannel) {
        setChannel(chosenChannel)
    }

    function displaySpotifyInfo() {
        setShowInfo(true)
        setInfo("Spotify")
    }

    function displayYoutubeInfo() {
        setShowInfo(true)
        setInfo("Youtube")
    }

    function undisplayInfo() {
        setShowInfo(false)
    }


    return (
        <div className="music">
            <section className="music-title-section">
                <h2 className="title">Music</h2>
                <MusicButtons
                    channel={channel}
                    setChosenChannel={setChosenChannel}
                    displaySpotifyInfo={displaySpotifyInfo}
                    displayYoutubeInfo={displayYoutubeInfo}
                    undisplayInfo={undisplayInfo}
                />
            </section>
            <MusicInfo
                channel={channel}
                showInfo={showInfo}
                info={info}
            />
            {channel === "spotify" ? <SpotifyStream /> : <YoutubeStream />}

        </div>
    )
}