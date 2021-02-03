import React from 'react';
import './video.scss';

const Video = ({ data, onVideoSelected }) => {

  const selectVideo = (videoIdObj, onVideoSelected) => {
    window.scrollTo({
      top:0
    })
    onVideoSelected(videoIdObj.videoId);
  }

  const constructVideoTitles = (videosData, onVideoSelected) => {
    return videosData.map(({ snippet, id }, index) => {
      return (
        <div
          className="video"
          key={index}
          onClick={() => selectVideo(id, onVideoSelected)}>
          <div className="image-bg" style={{backgroundImage: `url(${snippet.thumbnails.high.url})`}} key={index} />
          <p className="title">{snippet.title}</p>
        </div>
      );
    });
  }
  return <>{constructVideoTitles(data, onVideoSelected)}</>;
};

export default Video;