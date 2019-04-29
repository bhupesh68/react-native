import React from 'react';
import {
  Image,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import YouTube from 'react-native-youtube';

import Card from './Card';
import CardSection from './CardSection';

const VideoItem = ({ video, onVideoSelect }) => {
  console.log(video.snippet.title);
  return (
    <Card>
      <CardSection>
        <View>
          <Image
            style={styles.thumbnailStyle}
            source={{ uri: video.snippet.thumbnails.medium.url }}
          />
        </View>
      </CardSection>
      <CardSection>
        <Text>{video.snippet.title}</Text>
      </CardSection>
    </Card>
  );
};

const styles = {
  thumbnailStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default VideoItem;
