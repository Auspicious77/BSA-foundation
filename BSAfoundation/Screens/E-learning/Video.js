import React from 'react'
import { ScrollView,Text } from 'react-native';
// import VideoPlayer from 'react-native-video-controls';
export default function Video({navigation}) {
  return (
    <ScrollView>
        <Text>
          Video
        </Text>
        {/* <VideoPlayer
  source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
  // navigator={this.props.navigator}
/>; */}
        </ScrollView>
  )
}
