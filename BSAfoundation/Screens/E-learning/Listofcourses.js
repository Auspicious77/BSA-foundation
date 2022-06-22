import React, { useState } from "react";

import { ScrollView,View,Image, Text ,StyleSheet,FlatList,TouchableOpacity} from 'react-native'
import images from '../../constants'

const img1 = require('../../assets/images/webdesign.jpg')
const img2 = require('../../assets/images/mobile.png')
const img3 = require('../../assets/images/datascience.png')
const img4 = require('../../assets/images/python.jpg')
const img5 = require('../../assets/images/ethical.jpg')
const img6 = require('../../assets/images/frontend.jpg')
const img7 = require('../../assets/images/website.png')
const img8 = require('../../assets/images/graphics.png')
const img9 = require('../../assets/images/uiux.jpg')
const img10 = require('../../assets/images/computerbasics.jpg')
const img12= require('../../assets/images/aws.jpg')
const img13 = require('../../assets/images/digitalmarketing.jpg')
// const img13= require('../../assets/images/datascience.png')



 const DATA = [
  {
    id: 1,
    img:img1,
    title: 'Web Design Basics (HTML, CSS, BOOTSTRAP)',
    duration:"5 Weeks",
    url:'Video',
 },
  {
    id: 2,
    img: img2,
    title: 'Mobile App Development (React Native, Flutter, Kotlin, Swift/Objective C)',
    duration:"5 Weeks",
    url:'Video'
 },
  {
    id: 3,
    img: img3,
    title: 'Data Science/Machine Learning Basics ',
    duration:"5 Weeks",
    url:'Video'
 },
 {
  id: 4,
  img: img4,
  title: 'Python Programming',
  duration:"5 Weeks",
  url:'Video'
},
{
  id: 5,
  img: img5,
  title: 'Ethical Hacking',
  duration:"5 Weeks",
  url:'Video'
},
{
  id: 6,
  img: img6,
  title: 'Frontend Framework (React, Vue)',
  duration:"5 Weeks",
  url:'Video'
},{
  id: 7,
  img: img7,
  title: 'Website Development (Backend programming Nodejs, Django, Laravel)',
  duration:"5 Weeks",
  url:'Video'
},
{
  id: 8,
  img: img8,
  title: 'Graphics Design (PhotoShop, CorelDraw,Indesign)',
  duration:"5 Weeks",
  url:'Video'
},
{
  id: 9,
  img: img9,
  title: 'UI / UX Design ',
  duration:"5 Weeks",
  url:'Video'
},{
  id: 10,
  img: img10,
  title: 'Computer Basics/Microsoft office Proficiency',
  duration:"5 Weeks",
  url:'Video'
},
{
  id: 12,
  img: img12,
  title: 'AWS certification',
  duration:"5 Weeks",
  url:'Video'
},
{
  id: 13,
  img: img13,
  title: 'Digital Marketing',
  duration:"5 Weeks",
  url:'Video'
},
];





export default function Listofcourses({ navigation, }) {
  
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({ item }) => {
    console.log(item)
    return (
      <TouchableOpacity  onPress={()=>navigation.navigate(item.url, {data: item})}>
        <View style={styles.card}>
          <Image source={item.img}
            style={ {width: '100%',
            height:150, borderRadius:10
            }}
          />
          <Text>{item.title}</Text>
          <Text>{item.duration}</Text>
  
        </View>
      </TouchableOpacity>
  
    );
  };


  return (
    <View style={styles.container}>
      <Text style={styles.header}>
       MOST POPULAR COURSE
      </Text>

      <View>

<FlatList
  data={DATA}
  renderItem={renderItem}
  keyExtractor={(item) => item.id}
  extraData={selectedId}
  showsVerticalScrollIndicator={false}
  // numColumns={2}
/>

</View>
    </View>
  )
}
const styles= StyleSheet.create({
header: {
fontSize: 18,
textAlign:'center'
},

container:{
  marginHorizontal:20
},
card:{
  elevation:9,
  marginVertical:20,
  height:150 ,
  borderRadius:10,
}
})

