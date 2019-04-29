import React, { Component } from 'react';
import {
  Image,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import YouTube from 'react-native-youtube';
import YTSearch from 'youtube-api-search';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import YouTubeVideo from './YouTubeVideo';
import SearchBar1 from './SearchBar1';
import SignOut from './SignOut';

const apiKey = 'AIzaSyDrlhIANSw09owhM8L4xAeqR6Ret2yIbWc'

class Main extends Component {

  static navigationOptions = ({ navigation }) => ({
      backgroundColor: '#000',
    headerLeft: (
      <TouchableOpacity>
        <Image
          style={{height: 22, width: 98, color: '#fff', marginLeft: 25}}
          source={require('./images/logo.png')} />
      </TouchableOpacity>
    ),
    headerRight: (
      <View style={{ flexDirection: 'row', marginRight: 20 }}>
        <TouchableOpacity style={{paddingHorizontal: 5}}>
          <Icon name='cast-connected' size={25} color={'#555'} />
        </TouchableOpacity>
        <TouchableOpacity style={{paddingHorizontal: 5}}>
          <Icon name='videocam' size={25} color={'#555'} />
        </TouchableOpacity>
        <TouchableOpacity
            style={{paddingHorizontal: 5}}
            onPress={() => navigation.navigate('SearchBar1',
                            { onTermSubmit: () => this.onTermSubmit })}>
            <Icon name='search' size={25} color={'#555'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{paddingHorizontal: 5}}
          onPress={() => navigation.navigate('SignOut')}
          >
          <Icon name='account-circle' size={25} color={'#555'}/>
        </TouchableOpacity>
      </View>
    )
    })

  constructor(props){
    super(props)
    this.state = {
    //  data: []
      videos: [], selectedVideo: null
    }
  }

  componentDidMount(){
      this.onTermSubmit('surfboards');
  }

  onTermSubmit = term => {
    console.log('term');
    YTSearch({ key: apiKey, term },
              (videos) => this.setState({ videos, selectedVideo: videos[0] }));
  }

  render() {
    const {navigate} = this.props.navigation
    return   (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.body}>
            {this.state.videos.map(video =>
           	<TouchableHighlight
              key={video.id.videoId}
              onPress={() => navigate('YouTubeVideo', {youtubeId: video.id.videoId})}>
              {/* onPress={() => this.props.navigation.navigate('YoutubeVideo', {youtubeId: item.id.videoId})}> */}
              <View style={styles.vids}>
                <Image
                  source={{uri: video.snippet.thumbnails.medium.url}}
                  style={{width: 320, height: 180}}/>
                <View style={styles.vidItems}>
                  <Image
                    source={require('./images/NightKing.jpg')}
                    style={{width: 40, height: 40, borderRadius: 20, marginRight: 5}}/>
                  <Text style={styles.vidText}>{video.snippet.title}</Text>
                  <Icon name='more-vert' size={20} color='#555'/>
                </View>
              </View>
            </TouchableHighlight>
            )}
          </View>
        </ScrollView>
        <View style={styles.tabBar}>
          <TouchableOpacity style={styles.tabItems}>
            <Icon name='home' size={25} color='#444'/>
            <Text style={styles.tabTitle}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItems}>
            <Icon name='whatshot' size={25} color='#444'/>
            <Text style={styles.tabTitle}>Trending</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItems}>
            <Icon name='subscriptions' size={25} color='#444'/>
            <Text style={styles.tabTitle}>Subscriptions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItems}>
            <Icons name='bell' size={25} color='#444'/>
            <Text style={styles.tabTitle}>Activity</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItems}>
            <Icon name='folder' size={25} color='#444'/>
            <Text style={styles.tabTitle}>Library</Text>
          </TouchableOpacity>
        </View>
	    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  body: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 30
  },
  vids: {
    paddingBottom: 30,
    width: 320,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderBottomWidth: 0.6,
    borderColor: '#aaa'
  },
  vidItems: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10
  },
  vidText: {
    padding: 20,
    color: '#000'
  },
  tabBar: {
    backgroundColor: '#fff',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 0.5,
    borderColor: '#bbb'
  },
  tabItems: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5
  },
  tabTitle: {
    fontSize: 11,
    color: '#333',
    paddingTop: 4,
    textDecorationLine: 'underline'
  }
});

const screens = createStackNavigator({
  Home: { screen: Main },
  SignOut: { screen: SignOut },
  YouTubeVideo: { screen: YouTubeVideo },
  SearchBar1: { screen: SearchBar1 }
});

const AppContainer = createAppContainer(screens);

export default AppContainer;
