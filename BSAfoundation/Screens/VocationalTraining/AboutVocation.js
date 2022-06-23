import React, { useState, useRef } from 'react'
import { TextInput } from 'react-native-paper';
import { ScrollView, Text,StyleSheet, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import ImagePicker from "react-native-customized-image-picker";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS } from '../../constants';

export default function AboutVocation() {

  const [text, setText] = React.useState("");
  const [selectedLanguage, setSelectedLanguage] = useState();
  const pickerRef = useRef();

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      color: '#000',
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      console.log(image);
      setImage(image.path);
      this.bs.current.snapTo(1);
    });
  }

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }
  return (
    <ScrollView>
      <Text style={{textAlign:'center',fontSize:18,fontWeight:'bold',marginVertical:10, color: COLORS.black}}>
        Apply For Funding
      </Text>

      <Picker
        style={styles.picker}
        ref={pickerRef}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemIndex = {itemValue})
        }>
        <Picker.Item label="Name Of Vocation"  />
        <Picker.Item label="Hairdressing" />  
        <Picker.Item label="Shoe Making" />
        <Picker.Item label="Hairdressing" />
        <Picker.Item label="Web Development"/>
        <Picker.Item label="App Development"/>
        <Picker.Item label="Data Science"/>
        <Picker.Item label="UI/UX Designing"/>
        <Picker.Item label="Fashion Desiging"/>
        <Picker.Item label="Baking and decoration"/>
        <Picker.Item label="Tie and Die" />
        <Picker.Item label="Barbing"/>
      </Picker>

      <Picker
        style={styles.picker}
        ref={pickerRef}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue = {itemIndex})
        }>
        <Picker.Item label="Categories"  />
        <Picker.Item label="Baking"  />  
        <Picker.Item label="Shoe Making"  />
        <Picker.Item label="Hairdressing"  />
        <Picker.Item label="Fashion Designing"/>
        <Picker.Item label="Technology"/>
      </Picker>

      <Picker
        style={styles.picker}
        ref={pickerRef}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Years Of Experience"  />
        <Picker.Item label="1 - 2yrs" />  
        <Picker.Item label=" 2 - 3yrs"  />
        <Picker.Item label="3 - 5yrs"  />
      </Picker>

      <Picker
        style={styles.picker}
        ref={pickerRef}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Range For Funding"  />
        <Picker.Item label="10,000 - 50,000"  />  
        <Picker.Item label="50,000 - 100,000"  />
        <Picker.Item label="100,000 - 200,000"  />
      </Picker>

      <Text style={{textAlign:'center',fontWeight:'bold', color:"black"}}>
      Upload Pictures Of Certification
      </Text>


      <TouchableOpacity style={styles.loginButton}
     >
        <View>
          <Text style={styles.logintext}>SUBMIT</Text>
        </View>
      </TouchableOpacity>
      {/* <ImagePicker/> */}
   {/* <TouchableOpacity 
   style={{padding:30,
  backgroundColor:'red'
  }}
   onPress={choosePhotoFromLibrary}>

</TouchableOpacity> */}
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
 },

picker:{
  borderWidth:2,
  backgroundColor:'#fff',
  borderStyle:'solid',
  margin:10,
  borderRadius:10,
  color:"#000000"
},
loginButton: {
  marginVertical: 10,
  backgroundColor: '#4266f5',
  marginHorizontal: 20,
  borderRadius: 7
  // borderBottomEndRadius: 10,
  // borderBottomRightRadius: 10,
  // borderTopEndRadius: 10,
  // borderTopLeftRadius: 50,
  // width: '60%',
  // alignSelf: 'center'
},
logintext: {
  textAlign: 'center',
  padding: 10,
  color: '#fff',
  fontSize: 19,
  fontWeight: '500'
},



});

