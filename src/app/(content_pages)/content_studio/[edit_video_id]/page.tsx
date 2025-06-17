import ContentForm from "../content_form";
import testData from "../../../utils/test_data.json"

export default async function EditVideo({ params }: {params: Promise<{ edit_video_id: string }>}) {
    // EditVideo allows the user to edit one of their existing videos

    const editVideoID = (await params).edit_video_id;
    const editVideoData = testData.videos.find((video) => video.video_id === editVideoID);

    if (editVideoData) {
        return (
            <ContentForm existingVideoData={editVideoData}/>
        );
    }
}