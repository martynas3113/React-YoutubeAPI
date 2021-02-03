import React from 'react';
import './video.scss';

function selectVideo(videoIdObj, videoSelected) {
    videoSelected(videoIdObj.videoId);
  }

  function videoCards (data, videoSelected) {
    return data.map(({ snippet, id }, index) => {
      return (
        <div
          className="video"
          key={index}
          onClick={() => selectVideo(id, videoSelected)}>
          <div className="image-bg" style={{backgroundImage: `url(${snippet.thumbnails.high.url})
          `}} key={index} />
          <p className="title">{snippet.title}</p>
        </div>
      );
    });
  }
  const Video = ({ data, videoSelected }) => {
    return <>{videoCards(data, videoSelected)}</>;
  };

export default Video
