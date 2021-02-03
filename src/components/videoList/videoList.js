import React from 'react';
import Video from "../video/video";
import './VideoList.scss';

const VideoList = ({ data, onVideoSelected }) => {
    return (
      <div className="video-list">
        <div className="list-wrap" style={{ padding: "20px 0" }}>
          <h3 className="list-title">
            Search results
          </h3>
          <Video data={data} onVideoSelected={onVideoSelected} />
        </div>
      </div>
    );
  };
  
  export default VideoList;
