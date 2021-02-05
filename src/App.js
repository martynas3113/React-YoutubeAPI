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

const  onVideoSelected = (videoId) => {
      setSelectedVideoId(videoId)
  }

  const fetchData = async () => {
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
   
  }

  const onSearch = async keyword => {
    const response = await youtubeApi.get("/search", {
      params: {
        q: keyword
      }
    });
      setVideosMetaInfo(response.data.items)
      setTitle(keyword);
      setSelectedVideoId(response.data.items[0].id.videoId);
      setToken(response.data.nextPageToken)
  };
  return (
    <Container fluid className="App">
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

