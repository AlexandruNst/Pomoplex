import "./MusicButtons.scss"
import Button from '../../Util/Button/Button'
import { useState } from "react"

export default function MusicButtons() {

    const [channel, setChannel] = useState("spotify")

    function setChannelToSpotify() {
        setChannel("spotify")
    }

    function setChannelToYoutube() {
        setChannel("youtube")
    }

    return (
        <div className="music-buttons">
            {/* {channel === "spotify" &&
                <>
                    <Button
                        primary={true}
                        img={"spotify"}
                        handleClick={setChannelToSpotify}
                    />
                    <Button
                        primary={false}
                        img={"youtube"}
                        handleClick={setChannelToYoutube}
                    />
                </>
            }

            {channel === "youtube" &&
                <>
                    <Button
                        primary={false}
                        img={"spotify"}
                        handleClick={setChannelToSpotify}
                    />
                    <Button
                        primary={true}
                        img={"youtube"}
                        handleClick={setChannelToYoutube}
                    />
                </>
            } */}

            <Button
                primary={channel === "spotify" ? true : false}
                img={"spotify"}
                handleClick={setChannelToSpotify}
            />
            <Button
                primary={channel === "youtube" ? true : false}
                img={"youtube"}
                handleClick={setChannelToYoutube}
            />

            {/* <Button
                primary={false}
                img={"spotify"}
            />
            <Button
                primary={true}
                img={"youtube"}
            /> */}
        </div>
    )
}