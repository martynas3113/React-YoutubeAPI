import React from 'react';
import Video from "../video/video";
import './VideoList.scss';



const VideoList = ({pageToken, data, onVideoSelected }) => {

    
    return (
      <div id="scrollableDiv" className="video-list">
        <div className="list-wrap">
          <h3 className="list-title">
            Search results
          </h3>
          <Video pageToken={pageToken} data={data} onVideoSelected={onVideoSelected} />
        </div>
      </div>
      
    );
  };
  
  export default VideoList;
