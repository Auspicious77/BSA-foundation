import React from 'react'
import { ScrollView,Text,View,StyleSheet,ImageBackground } from 'react-native'
import { icons, images, } from '../../constants';




export default function AboutElearning({navigation}) {
  return (
    <ScrollView>
      <View style={styles.container}>
            <View style={{ height: 150,borderBottomLeftRadius:20,borderBottomRightRadius:20 }}>
                <ImageBackground source={images.official3} resizeMode="cover" style={styles.image}>
                    <View style={{ backgroundColor: "#d47400c2", height: 150, justifyContent: 'center' }}>
                        <Text style={styles.text1}>About E-learning</Text>
                    </View>
                </ImageBackground>
            </View>
            <View>
    <Text style={{fontSize:17,color:'#001',margin:8,}}>The Commission continually seeks to improve access and quality of education of mandate communities by executing programs to further strengthen and increase the teaching workforce, improve teacher education and educational systems with a focus on learning, teaching, school management, parental participation and responsiveness to children’s needs.

The Commission also sponsors bursary and scholarship programmes and facilitates formal, non-formal and vocational training.</Text>
</View>

<View>
    <Text style={{fontSize:17,color:'#001',margin:8,}}>The Commission continually seeks to improve access and quality of education of mandate communities by executing programs to further strengthen and increase the teaching workforce, improve teacher education and educational systems with a focus on learning, teaching, school management, parental participation and responsiveness to children’s needs.

The Commission also sponsors bursary and scholarship programmes and facilitates formal, non-formal and vocational training.</Text>
</View>

            </View>
        </ScrollView>
  )
}


const styles = StyleSheet.create({
  text:{
      alignItems:'center' ,
      fontSize:17
  },
  ImageText:{
alignItems:'center' ,
backgroundColor:'#fff',
elevation:10,
borderRadius:20,
margin:10,
padding:10
 },
  Title:{
      // alignItems:'center' ,
      fontSize:20,
      fontWeight:'bold',
  },
  Ondo:{
      alignItems:'center' ,
      fontSize:17
  },
  In:{
      alignItems:'center' ,

      fontSize:17
  },
  container: {
      flex: 1,
      justifyContent:'center',
      marginHorizontal:5
  },
  image: {
      flex: 1,
      justifyContent: "center",
      width: '100%',
      height: 150,
      borderBottomLeftRadius:20,
      borderBottomRightRadius:20
  },
  text1: {
    color: "white",
    fontSize: 20,
    //   lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
  }
 
  
});