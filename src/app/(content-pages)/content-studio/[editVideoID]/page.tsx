import ContentForm from "../content-form";
import testData from "../../../utils/test-data.json"

export default async function EditVideo({ params }: {params: Promise<{ editVideoID: string }>}) {
    // EditVideo allows the user to edit one of their existing videos or "delete" it
    // Since there isn't a delete api call, we can edit the video to a blank video and filter based on this

    const editVideoID = (await params).editVideoID;
    const editVideoData = testData.videos.find((video) => video.video_id === editVideoID);

    if (editVideoData) {
        return (
            <ContentForm existingVideoData={editVideoData}/>
        );
    }
}