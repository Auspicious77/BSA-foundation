import React from 'react'
import { ScrollView, Text, View, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
export default function Profile({navigation}) {
  return (
    <View style={styles.container}>

      <View style={styles.image}>
        <Image source={require('../../assets/images/gps.jpg')}
          style={{ width: 120, height: 120, borderRadius: 100 }} />

      </View>
      <Text style={styles.name}>Sunday Adeyemo Jeremiah</Text>



      <ScrollView style={styles.section}>
        <TouchableOpacity style={styles.border}>
          <Text style={styles.text1}>South Local Government ogbomoso Oyo state</Text>
          <Text style={styles.text2}>Address</Text>
        </TouchableOpacity>



        <TouchableOpacity style={styles.border}>
          <Text style={styles.text1}>+233 4345 2225 7766</Text>
          <Text style={styles.text2}>Mobile Number</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.border}>
          <Text style={styles.text1}>sundayadeyemo@gmail.com</Text>
          <Text style={styles.text2}>E-mail</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.border}>
          <Text style={styles.text1}>Mr And Mrs Adeyemo</Text>
          <Text style={styles.text2}>Parent Name</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.border}>
          <Text style={styles.text1}>Contact us</Text>
        
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.border}>
          <Text style={styles.text1}>Contact us</Text>
        
        </TouchableOpacity>

        <TouchableOpacity style={styles.border}>
          <Text style={styles.text1}>Help  & FAQ'S</Text>
        
        </TouchableOpacity>

        <TouchableOpacity style={styles.border}
        onPress={()=> navigation.navigate('Login')}>
          <Text style={styles.text1}>LOG OUT</Text>
        
        </TouchableOpacity>


      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4266f5'
  },
  image: {
    alignSelf: 'center',
    marginTop: 20,
    elevation: 20
  },
  name: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    marginBottom:20
  },
  section: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: 400
  },
  border: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderWidth: 0.8,
    borderColor: '#858585c2',
    borderStyle: 'solid',
    borderRadius: 9,
    padding: 4

  },
  text1: {
    color: '#292828',
    fontSize: 18,
    marginHorizontal: 20
  },
  text2: {
    color: '#a5aecf',
    fontSize: 14,
    marginHorizontal: 20
  }

})
