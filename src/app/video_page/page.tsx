export default function VideoPage() {
    // VideoPage will contain the video player and comments
    // currently this just shows one sample video on all pages
    return (
        <main id="video-page">
            <section className="video-viewer">
                <h2 id="video-label">Lesson Sample: Sample Lesson Title</h2>
                <video className="video-player" src="sample_videos/sample_video_1.mp4" aria-labelledby="video-label" controls>
                    An error occurred with the video player.
                </video>
                <div className="description">
                    <h4>rubie_shay</h4>
                    <p>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et nisl lorem. Phasellus a ipsum ut nunc elementum scelerisque. Sed sollicitudin quam eget semper viverra. Sed sollicitudin nunc sem. Ut eu est dolor. Suspendisse eu felis eget sem consequat ornare ac dignissim mauris. Phasellus vestibulum lorem at dui tristique, at ornare purus volutpat. Aliquam eget porta orci."}</p>
                </div>
            </section>
            <section className="comments">
                <h3>Comments</h3>
                <ul>
                    <li>
                        <span>user_1234</span>
                        <p>This is my comment text</p>
                    </li>
                    <li>
                        <span>user_5678</span>
                        <p>This is a different comment text</p>
                    </li>
                </ul>
            </section>
        </main>
    );
}