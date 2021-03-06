import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, ScrollView, Image } from "react-native";
import images from '../../constants/images'
// import icons from '../../constants/icons'
const img1 = require('../../assets/icons/aboutelearning.gif')
const img2 = require('../../assets/icons/available.gif')
const img3 = require('../../assets/icons/elearning.png')
const img4 = require('../../assets/icons/howtouse.gif')
const img5 = require('../../assets/icons/images(1).jpg')




const DATA = [
  {
    id: 1,
    img: img1,
    title: 'Apply For Funding',
    url:'AboutVocation'
    // onpress: (navigation)=>navigation.navigate('AboutElearning')
  },
  {
    id: 3,
    img: img3,
    title: 'Enroll For Skill Acquisition ',
    url:'ListOfVocations'
    // onpress: (navigation) => navigation.navigate('Listofcourses')
  },
 
];

export default function Index({navigation}) {

  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item,  }) => {
    // console.log(item)
    return (
      <TouchableOpacity onPress={()=>navigation.navigate(item.url)}>
        <View style={styles.card}>
          <Image source={item.img}
            style={{ width: 70, height: 70 }}
          />
          <Text style={{fontSize:16,textAlign:'center'}}>{item.title}</Text>

        </View>
      </TouchableOpacity>

    );
  };

  return (
    <View style={styles.container}>
      <Image
        source= {require('../../assets/images/images1.jpg')}
        style={{width:360, alignSelf:"center"}}
      />
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
    marginVertical: 40,
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

