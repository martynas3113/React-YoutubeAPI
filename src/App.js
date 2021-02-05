import React, { useState } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/search/search';
import VideoList from './components/videoList/videoList';
import youtubeApi from './components/api/youtube';
import Videoplayer from './components/videoPlayer/videoplayer';
import { Col, Container, Row } from 'react-bootstrap';



const App = () => {
  const [videosMetaInfo, setVideosMetaInfo] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [token, setToken] = useState("");
  const [title, setTitle] = useState("");
  const [isError, setIsError] = useState(false);

const  onVideoSelected = (videoId) => {
      setSelectedVideoId(videoId)
  }

  const fetchData = async () => {
    setIsError(false);
    try {
      const response = await youtubeApi.get("/search", {
        params: {
          pageToken: token,
          q: title
        }
      });
      setVideosMetaInfo((prevData) => [
        ...prevData,
        ...response.data.items
      ])
      setToken(response.data.nextPageToken)
    } catch (err) {
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 5000);
    }
    
   
  }

  const onSearch = async keyword => {
    setIsError(false);
    try {
      const response = await youtubeApi.get("/search", {
        params: {
          q: keyword
        }
      });
        setVideosMetaInfo(response.data.items)
        setTitle(keyword);
        setSelectedVideoId(response.data.items[0].id.videoId);
        setToken(response.data.nextPageToken)
    } catch (err) {
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 5000);
    }
    
  };

  const renderError = () => {
    if (isError) {
        return (
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
                Unable to get videos, please try again in a few minutes
            </div>
        )
    }
}
  return (
    <Container fluid className="App">
      {renderError()}
          <Row className="app-wrap">
            <Col lg={8} className="left-side">
          <Search onSearch={onSearch} />
          <Videoplayer videoId={selectedVideoId} />        
            </Col>
            <Col lg={4} className="rights-side">
            <VideoList
            fetch={fetchData}
          onVideoSelected={onVideoSelected}
          data={videosMetaInfo}
        /></Col>
          </Row>
        </Container>
  )
}

export default App

