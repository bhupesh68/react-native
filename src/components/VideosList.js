import React from 'react';
import { View } from 'react-native';
import VideoItem from './VideoItem';

//import axios from 'axios';

const VideosList = props => {
  //const { textStyle, viewStyle } = styles;
  //state = { albums: [] };
  // axios.get('https://rallycoding.herokuapp.com/api/music_albums')
  //      .then(response => this.setState({ albums: response.data }));
  //then is the promise to run the code inside when HTTP request is compelte
  return props.videos.map(video => (
      <View>
          <VideoItem
            key={video.id.videoId}
            video={video}
            onVideoSelect={this.onVideoSelect}
          />
      </View>
    ));
};
export default VideosList;
