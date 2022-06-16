import React from 'react'
import { ScrollView, Text, View, Image, StyleSheet, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
export default function EditProfile() {
  return (
    <View style={styles.container}>

      <View style={styles.image}>
        <Image source={require('../../assets/images/profile10.jpg')}
          style={{ width: 120, height: 120, borderRadius: 100 }} />

      </View>
      <Text style={styles.name}>Okoh Fidelis Godspower</Text>



      <ScrollView style={styles.section}>
        <TextInput
          style={styles.input}
          placeholder=' Okoh Fidelis Godspower'
        />

        <TextInput
          style={styles.input}
          placeholder=' ikauy area ogbomoso Oyo state'
        />

        <TextInput
          style={styles.input}
          placeholder=' +233 4345 2225 7766'
        />

        <TextInput
          style={styles.input}
          placeholder='Okohfidelis@gmail.com'
        />

        <TextInput
          style={styles.input}
          placeholder=' Mr And Mrs Okoh'
        />



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
    marginBottom: 20
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
  },
  input: {
    borderWidth: 1,
    borderColor: '#858585c2',
    borderRadius: 7,
    fontSize: 17,
    marginVertical: 10,
    marginHorizontal: 20,
  },

})
