import './Button.scss'
import spotify_primary from '../../../assets/spotify-primary.svg'
import youtube_primary from '../../../assets/youtube-primary.svg'
import spotify_secondary from '../../../assets/spotify-secondary.svg'
import youtube_secondary from '../../../assets/youtube-secondary.svg'

const symbolNames = {
    pause: "pause",
    start: "play_arrow",
    reset: "replay",
    tune: "tune",
    add: "add",
    close: "close"
}

export default function Button(props) {
    return (
        <button
            className={
                `bttn ${props.primary ?
                    "bttn-primary" :
                    "bttn-secondary"}`
            }
            onClick={props.handleClick}
            onMouseMove={props.displayInfo}
            onMouseLeave={props.undisplayInfo}
        >
            {props.buttonSymbol &&
                <span className="material-symbols-outlined">
                    {props.alternative ?
                        symbolNames[props.buttonSymbolAlternative] :
                        symbolNames[props.buttonSymbol]}
                </span>
            }

            {props.img &&
                (props.primary ?
                    (props.img === "spotify" ?
                        <img src={spotify_primary} alt="" />
                        :
                        <img src={youtube_primary} alt="" />
                    )
                    :
                    (props.img === "spotify" ?
                        <img src={spotify_secondary} alt="" />
                        :
                        <img src={youtube_secondary} alt="" />
                    )
                )
            }

        </button>
    )
}