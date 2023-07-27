import "./YoutubeStream.scss"

export default function YoutubeStream() {
    return (
        <section className="youtube-stream-wrapper">
            <iframe className='video'
                title='Youtube player'
                sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                frameborder='0'
                src={`https://youtube.com/embed/jfKfPfyJRdk?autoplay=0`}
                onload="this.style.height=(this.contentWindow.document.body.scrollHeight+20)+'px';"
                allowFullScreen>
            </iframe>
        </section>
    )
}