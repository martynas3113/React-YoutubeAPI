import React from 'react';
import Video from "../video/video";
import './VideoList.scss';



const VideoList = ({fetch, data, onVideoSelected }) => {

    
    return (
      <div id="scrollableDiv" className="video-list">
        <h3 className="list-title">
            Search results
          </h3>
        <div className="list-wrap">
          <Video fetch={fetch} data={data} onVideoSelected={onVideoSelected} />
        </div>
      </div>
      
    );
  };
  
  export default VideoList;
