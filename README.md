## About the App

This app was created for a challenge on 10Fold (https://app.10foldhiring.com/).

The goal was to create an EdTech platform for finding, viewing, and commenting on videos. This included requirements for displaying a list of videos, being able to create new videos, add and view comments, include video controls for volume and playback speed, and have fullscreen playback capability.

This app starts with a demo login screen, and is then broken down into two pages: *Learn* and *Content Studio*. To login, you can use any username with a form of lowercase letter strings separated by underscores. *Ex: (firstname_lastname)*

On the *Learn* page, users can view videos from a searched username, and click on one to watch. Then they are taken to the video page with a fully customized video player and the comments section.

In the *Content Studio*, users can see videos they've uploaded and edit/delete existing videos or upload new videos. If you would like to test uploading a video, you can put your own local video files in the public folder as a demo and use the path url.

While using the demo, you can search for user "rubie_shay" to view the provided sample videos, or login as "rubie_shay" to view them in *Content Studio*.

The app is responsive to many different screen sizes, and has accessible functionality such as keyboard-input.


## Running the App

To run the app, open the directory and run the following commands:

1) npm install

2) npm run build

3) npm start

Then open http://localhost:3000 in your browser to see the result.


## Images

### Desktop

![Login Page (Desktop)](screenshots/desktop-login.png?raw=true "Login Page (Desktop)")
![Video Search (Desktop)](screenshots/desktop-video-search.png?raw=true "Video Search (Desktop)")
![Search Results (Desktop)](screenshots/desktop-video-results.png?raw=true "Search Results (Desktop)")
![Video Page (Desktop)](screenshots/desktop-video-page.png?raw=true "Video Page (Desktop)")
![Video Page (Narrow Video) (Desktop)](screenshots/desktop-video-page-narrow.png?raw=true "Video Page (Narrow Video) (Desktop)")
![Comments Section (Desktop)](screenshots/desktop-comments.png?raw=true "Comments Section (Desktop)")
![Add New Comment (Desktop)](screenshots/desktop-write-comment.png?raw=true "Add New Comment (Desktop)")
![Content Studio (Desktop)](screenshots/desktop-studio-videos.png?raw=true "Content Studio (Desktop)")
![Upload Video Page (Desktop)](screenshots/desktop-upload-form.png?raw=true "Upload Video Page (Desktop)")
![Edit Video Page (Desktop)](screenshots/desktop-edit-form.png?raw=true "Edit Video Page (Desktop)")
![Edit Success Page (Desktop)](screenshots/desktop-edit-success.png?raw=true "Edit Success Page (Desktop)")

### Mobile

![Login Page (Mobile)](screenshots/mobile-login.png?raw=true "Login Page (Mobile)")
![Video Search (Mobile)](screenshots/mobile-video-search.png?raw=true "Video Search (Mobile)")
![Search Results (Mobile)](screenshots/mobile-video-results.png?raw=true "Search Results (Mobile)")
![Video Page (Mobile)](screenshots/mobile-video-page.png?raw=true "Video Page (Mobile)")
![Video Page (Narrow Video) (Mobile)](screenshots/mobile-video-page-narrow.png?raw=true "Video Page (Narrow Video) (Mobile)")
![Comments Section (Mobile)](screenshots/mobile-comments.png?raw=true "Comments Section (Mobile)")
![Add New Comment (Mobile)](screenshots/mobile-write-comment.png?raw=true "Add New Comment (Mobile)")
![Content Studio (Mobile)](screenshots/mobile-studio-videos.png?raw=true "Content Studio (Mobile)")
![Upload Video Page (Mobile)](screenshots/mobile-upload-form.png?raw=true "Upload Video Page (Mobile)")
![Edit Video Page (Mobile)](screenshots/mobile-edit-form.png?raw=true "Edit Video Page (Mobile)")
![Edit Success Page (Mobile)](screenshots/mobile-edit-success.png?raw=true "Edit Success Page (Mobile)")

### Custom Video Element

![Video Controls](screenshots/video-controls.png?raw=true "Video Controls")
![Video Volume Control](screenshots/video-volume.png?raw=true "Video Volume Control")
![Video Playback Speed Control](screenshots/video-playback-speed.png?raw=true "Video Playback Speed Control")