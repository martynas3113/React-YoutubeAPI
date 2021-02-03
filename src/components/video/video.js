import React from 'react';
import './video.scss';

function selectVideo(videoIdObj, onVideoSelected) {
  window.scrollTo({
    top:0
  })
  onVideoSelected(videoIdObj.videoId);
}

function constructVideoTitles(vidoesData, onVideoSelected) {
  return vidoesData.map(({ snippet, id }, index) => {
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
const Video = ({ data, onVideoSelected }) => {
  return <>{constructVideoTitles(data, onVideoSelected)}</>;
};

export default Video;