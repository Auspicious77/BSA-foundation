import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const  Head = () => {
  return (
    <View style={{height:50, width:"100%" , backgroundColor:"#13007c"}}>
      <Text style={styles.head}>BSA FOUNDATION</Text>
    </View>
  )
}
export  {Head}
const styles = StyleSheet.create({
    head:{
        fontWeight: 'bold',
        justifyContent:'center',
        alignSelf:'center',
        // paddingLeft:'25%'
    }
})
