import React from 'react';
import './video.scss';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios'



const Video = ({fetch, data, onVideoSelected }) => {
  
  
  const selectVideo = (videoIdObj, snippet) => {
    
    const selectedVideo = {
      channel: snippet.channelTitle,
      videoTitle:snippet.title
    }
    
    axios.post('http://localhost:8080/videos/add', selectedVideo)

    window.scrollTo({
      top:0
    })
    onVideoSelected(videoIdObj.videoId);

  }

  const constructVideoTitles = (videosData) => {
    
    return <InfiniteScroll className="video-wrap" scrollableTarget="scrollableDiv" dataLength={data.length} next={()=> fetch()}  hasMore={true}>{videosData.map(({ snippet, id }, index) => {
      return (
        <div
          id={index}
          className="video"
          key={index}
          onClick={()=> selectVideo(id, snippet)}>
          <div className="image-bg" style={{backgroundImage: `url(${snippet.thumbnails.high.url})`}} key={index} />
          <p className="title">{snippet.title}</p>
        </div>
      )
  })}
  </InfiniteScroll>
  }
  return <>{constructVideoTitles(data)}</>;
};

export default Video