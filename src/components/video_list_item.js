import React from 'react';

const VideoListItem = ({ video, onVideoselect }) => {
    // const video = video.props;
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li onClick={() => onVideoselect(video)} className=" col-md-4 list-group-item">
            <div className="video-list medis ">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;
