import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/search/search';
import VideoList from './components/videoList/videoList';
import youtubeApi from './components/api/youtube';
import Videoplayer from './components/videoPlayer/videoplayer';
import { Col, Container, Row } from 'react-bootstrap';

export default class App extends React.Component {

  state = {
      videosMetaInfo: [],
      selectedVideoId: null
    };

    onVideoSelected = videoId => {
      this.setState({
        selectedVideoId: videoId
      })
    }
    onSearch = async keyword => {
      const response = await youtubeApi.get("/search", {
        params: {
          q: keyword
        }
      });
      this.setState({
        videosMetaInfo: response.data.items,
        selectedVideoId: response.data.items[0].id.videoId
      });
    };

   render() {
      return (
        <Container fluid className="App">
          <Row className="app-wrap">
            <Col lg={8} className="left-side">
          <Search onSearch={this.onSearch} />
          <Videoplayer videoId={this.state.selectedVideoId} />        
            </Col>
            <Col lg={4} className="rights-side">
            <VideoList
          onVideoSelected={this.onVideoSelected}
          data={this.state.videosMetaInfo}
        /></Col>
          </Row>
        </Container>
      );
    }
  
  }

// export default App;
