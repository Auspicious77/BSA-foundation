import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, ScrollView, Image } from "react-native";
import images from '../../constants/images'
// import icons from '../../constants/icons'
const img1 = require('../../assets/icons/aboutelearning.gif')
const img2 = require('../../assets/icons/available.gif')
const img3 = require('../../assets/icons/elearning.png')
const img4 = require('../../assets/icons/howtouse.gif')




const DATA = [
  {
    id: 1,
    img: img1,
    title: 'My Profile',
    url:'Profile'
  },
  {
    id: 2,
    img: img2,
    title: 'Edit Profile',
    url:'EditProfile'

  },
  //  {
  //   id: 3,
  //   img: img3,
  //   title: 'Available Courses ',
  //   url:'Listofcourses'
  // },
];

export default function Index({navigation}) {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item,  }) => {
    // console.log(item)
    return (
  
      
      <View>
    
        <TouchableOpacity onPress={()=>navigation.navigate(item.url)}>
      
      <View style={styles.card}>
        <Image source={item.img}
          style={{ width: 70, height: 70 }}
        />
        <Text style={{color:"black"}}>{item.title}</Text>

      </View>
    </TouchableOpacity>
      </View>

    );
  };

  return (
    <View style={styles.container}>

      <View style={{alignItems:"center"}}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        numColumns={2}
      />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
 },

  card: {
    width: 140,
    backgroundColor: '#fff',
    elevation: 10,
    height: 150,
    marginHorizontal: 10,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 60,
    borderTopLeftRadius: 10
  },



});



//   return (
//     <ScrollView>
//     <Text>Administration</Text>
//     </ScrollView>
//   );

