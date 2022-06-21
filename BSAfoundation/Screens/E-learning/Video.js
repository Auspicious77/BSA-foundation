import React, {useState, useEffect} from 'react'
import { ScrollView,Text, StyleSheet, View, Dimensions } from 'react-native';
// import VideoPlayer from 'react-native-video-controls';
const Players =({navigation, route}) => {
  const {width, height} = Dimensions.get("screen");
  const [postdata, setPostdata] = useState(route.params.data);
  useEffect(()=>{
    var post_data = route.data
    console.log(post_data)
  }, [])
  return (
    <ScrollView style={styles.mainplayerView}>
        <View style={{height: height/3, backgroundColor: 'gray', width: '100%'}}></View>
        
        <View>
          <Text>{postdata.tittle}</Text>
        </View>
        
        
        {/* <VideoPlayer
  source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
  // navigator={this.props.navigator}
/>; */}
        </ScrollView>
  )
}

export default Players
const styles = StyleSheet.create({
mainplayerView: {
  flex: 1
},
videoview: {

}
})
