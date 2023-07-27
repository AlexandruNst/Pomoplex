import "./MusicButtons.scss"
import Button from '../../Util/Button/Button'

export default function MusicButtons(props) {
    return (
        <div className="music-buttons">
            <Button
                primary={props.channel === "spotify" ? true : false}
                img={"spotify"}
                handleClick={() => props.setChosenChannel("spotify")}
                displayInfo={props.displaySpotifyInfo}
                undisplayInfo={props.undisplayInfo}
            />
            <Button
                primary={props.channel === "youtube" ? true : false}
                img={"youtube"}
                handleClick={() => props.setChosenChannel("youtube")}
                displayInfo={props.displayYoutubeInfo}
                undisplayInfo={props.undisplayInfo}
            />
        </div>
    )
}