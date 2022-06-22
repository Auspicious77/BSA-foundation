import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const  Head = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.head}>BSA FOUNDATION</Text>
    </View>
  )
}
export  {Head}
const styles = StyleSheet.create({
    head:{
        fontWeight: 'bold',
        // justifyContent:'center',
        alignSelf:'center',
        // paddingLeft:'25%'
        fontSize:20,
        color:"#ffffff"
    
    },
    body:{
      height:50,
       width:"100%" , 
       backgroundColor:"#4266f5", 
       alignContent:"center", 
       justifyContent:"center",
       elevation:5,
       borderBottomWidth:2,
       borderBottomColor:"#0800082c"
       
       
      }
    
})
