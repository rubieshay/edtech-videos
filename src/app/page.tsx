import Link from "next/link";

export default function Home() {
    // Homepage will contain a list of videos from rubie_shay to view, and allow for navigation to create new content
    // currently this just includes sample hardcoded data
    return (
        <main id="video-list-page">
            <h2>Lessons from rubie_shay</h2>
            <section className="video-list">
                <Link href="/video_page" className="video-option">
                    <video className="video-thumbnail" src="sample_videos/sample_video_1.mp4#t=1">
                        An error occurred with the video player.
                    </video>
                    <article className="video-details">
                        <h3>Lesson One: Sample Lesson Title</h3>
                        <h4>rubie_shay</h4>
                        <p>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et nisl lorem. Phasellus a ipsum ut nunc elementum scelerisque. Sed sollicitudin quam eget semper viverra. Sed sollicitudin nunc sem. Ut eu est dolor. Suspendisse eu felis eget sem consequat ornare ac dignissim mauris. Phasellus vestibulum lorem at dui tristique, at ornare purus volutpat. Aliquam eget porta orci."}</p>
                    </article>
                </Link>
                <Link href="/video_page" className="video-option">
                    <video className="video-thumbnail" src="sample_videos/sample_video_2.mp4#t=1">
                        An error occurred with the video player.
                    </video>
                    <article className="video-details">
                        <h3>Lesson Two: Sample Lesson Title</h3>
                        <h4>rubie_shay</h4>
                        <p>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et nisl lorem. Phasellus a ipsum ut nunc elementum scelerisque. Sed sollicitudin quam eget semper viverra. Sed sollicitudin nunc sem. Ut eu est dolor. Suspendisse eu felis eget sem consequat ornare ac dignissim mauris. Phasellus vestibulum lorem at dui tristique, at ornare purus volutpat. Aliquam eget porta orci."}</p>
                    </article>
                </Link>
                <Link href="/video_page" className="video-option">
                    <video className="video-thumbnail" src="sample_videos/sample_video_3.mp4#t=1">
                        An error occurred with the video player.
                    </video>
                    <article className="video-details">
                        <h3>Lesson Three: Sample Lesson Title</h3>
                        <h4>rubie_shay</h4>
                        <p>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et nisl lorem. Phasellus a ipsum ut nunc elementum scelerisque. Sed sollicitudin quam eget semper viverra. Sed sollicitudin nunc sem. Ut eu est dolor. Suspendisse eu felis eget sem consequat ornare ac dignissim mauris. Phasellus vestibulum lorem at dui tristique, at ornare purus volutpat. Aliquam eget porta orci."}</p>
                    </article>
                </Link>
            </section>
            {/* Test video player */}
            {/* <video className="video-player" src="sample_videos/adhesion_tutorial.mp4" controls>
                An error occurred with the video player.
            </video> */}
        </main>
    );
}