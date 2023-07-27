import { useState } from "react";
import "./YoutubeStream.scss"

export default function YoutubeStream() {
    const [inputText, setInputText] = useState("")
    const [link, setLink] = useState("jfKfPfyJRdk")
    const [showForm, setShowForm] = useState(false)

    function handleChange(event) {
        setInputText(event.target.value);
    }

    function toggleForm() {
        setShowForm(oldShowForm => !oldShowForm)
    }

    function handleSubmit(event) {
        event.preventDefault()
        const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
        const match = inputText.match(regExp)
        if (match && match[2].length == 11) {
            const id = match[2]
            console.log(id)
            setLink(id)
            setInputText("")
        } else {
            alert("Please enter a valid Youtube URL")
        }
    }
    return (
        <>
            <section className="youtube-stream-wrapper">
                <iframe className='video'
                    title='Youtube player'
                    sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                    frameborder='0'
                    src={`https://youtube.com/embed/${link}?autoplay=0`}
                    onload="this.style.height=(this.contentWindow.document.body.scrollHeight+20)+'px';"
                    allowFullScreen>
                </iframe>
            </section>
            <div className="change-section-youtube" onClick={toggleForm}>
                <span>Change the music</span> <span class="material-symbols-outlined">
                    {showForm ? "expand_less" : "expand_more"}
                </span>
            </div>
            {showForm &&
                <form className="youtube-form" onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            name="youtubePlaylist"
                            id="youtubePlaylist"
                            placeholder="Enter Youtube URL here"
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