import React from 'react';
import VideoListItem from './video_list_item';


//those props object will arrive as an argument to the function
const VideoList = (props) => {
    // map over the videos array and save the results to 
    // videoItem variable
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem
                onVideoselect={props.onVideoselect}
                key={video.etag}
                video={video} />
        );
    });

    return (
        <ul classnmae="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;
