import React, { useState } from 'react';
import './video.scss';
import youtubeApi from '../api/youtube';
import InfiniteScroll from 'react-infinite-scroll-component';


const Video = ({ pageToken ,data, onVideoSelected }) => {

  const [videoData, setVideoData] = useState({data});

  const fetchData = async () => {
    const response = await youtubeApi.get("/search", {
      params: {
        pageToken: pageToken,
      }
    });
    console.log(videoData)
  }
  const selectVideo = (videoIdObj, onVideoSelected) => {
    window.scrollTo({
      top:0
    })
    onVideoSelected(videoIdObj.videoId);
  }

  const constructVideoTitles = (videosData, onVideoSelected) => {
    
    return <InfiniteScroll scrollableTarget="scrollableDiv" dataLength={data.length} next={()=> fetchData()} hasMore={true}>{videosData.map(({ snippet, id }, index) => {
      return (
        <div
          className="video"
          key={index}
          onClick={() => selectVideo(id, onVideoSelected)}>
          <div className="image-bg" style={{backgroundImage: `url(${snippet.thumbnails.high.url})`}} key={index} />
          <p className="title">{snippet.title}</p>
        </div>
      )
  })}
  </InfiniteScroll>
  }
  return <>{constructVideoTitles(data, onVideoSelected)}</>;
};

export default Video