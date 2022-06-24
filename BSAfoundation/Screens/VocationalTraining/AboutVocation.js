import React, { useState, useRef } from 'react'
import { TextInput } from 'react-native-paper';
import { ScrollView, Text,StyleSheet, View, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import ImagePicker from "react-native-customized-image-picker";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS } from '../../constants';

export default function AboutVocation({navigation}) {

  const [text, setText] = React.useState("");
  const [selectedLanguage, setSelectedLanguage] = useState({
    value1:"",
    value2:"",
    value3:"",
    value4:"",
  });
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
        selectedValue={selectedLanguage.value1}
        onValueChange={(itemValue) =>
            setSelectedLanguage({...selectedLanguage, value1: itemValue}) 
          }>
        <Picker.Item label="Name Of Vocation" value={""}  />
        <Picker.Item label="Hairdressing" value={"hairdresing"} />  
        <Picker.Item label="Shoe Making" value={"shoe"} />
        <Picker.Item label="Hairdressing" value={"Hairdressing"} />
        <Picker.Item label="Web Development"value={"Web development"}/>
        <Picker.Item label="App Development" value={"App development"}/>
        <Picker.Item label="Data Science" value={"Data science"}/>
        <Picker.Item label="UI/UX Designing" value={"UI/Ux Designing"}/>
        <Picker.Item label="Fashion Desiging" value={"Fashion Desiging"}/>
        <Picker.Item label="Baking and decoration" value={"Baking and decoration"}/>
        <Picker.Item label="Tie and Die" value={"Tie and Die"} />
        <Picker.Item label="Barbing" value={"Barbing"}/>
      </Picker>

      <Picker
        style={styles.picker}
        ref={pickerRef}
        selectedValue={selectedLanguage.value2}
        onValueChange={(itemValue) =>
          setSelectedLanguage({...selectedLanguage, value2: itemValue}) 
        }>
        <Picker.Item label="Categories" value={""} />
        <Picker.Item label="Baking" value={"Baking"}  />  
        <Picker.Item label="Shoe Making" value={"Shoe Making"}  />
        <Picker.Item label="Hairdressing" value={"Hairdressing"}  />
        <Picker.Item label="Fashion Designing" value={"Fashion Designing"}/>
        <Picker.Item label="Technology" value={"Technology"}/>
      </Picker>

      <Picker
        style={styles.picker}
        ref={pickerRef}
        selectedValue={selectedLanguage.value3}
        onValueChange={(itemValue) =>
          setSelectedLanguage({...selectedLanguage, value3: itemValue}) 
        }>
        <Picker.Item label="Years Of Experience" value={""} />
        <Picker.Item label="1 - 2yrs" value={"1 - 2yrs"} />  
        <Picker.Item label=" 2 - 3yrs" value={"2-3 years"} />
        <Picker.Item label="3 - 5yrs" value={'3-5 years'} />
      </Picker>

      <Picker
        style={styles.picker}
        ref={pickerRef}
        selectedValue={selectedLanguage.value4}
        onValueChange={(itemValue) =>
          setSelectedLanguage({...selectedLanguage, value4: itemValue}) 
        }>
        <Picker.Item label="Range For Funding"  value={""} />
        <Picker.Item label="10,000 - 50,000" value={"10,000 - 50,000"} />  
        <Picker.Item label="50,000 - 100,000" value={"50,000 - 100,000"}  />
        <Picker.Item label="100,000 - 200,000" value={"100,000 - 200,000"}  />
      </Picker>

      <Text style={{textAlign:'center',fontWeight:'bold', color:"black"}}>
      Upload Pictures Of Certification
      </Text>


      <TouchableOpacity style={styles.loginButton}
      onPress={()=>
        {
      Alert.alert("Congratulations!","Your application was recieved successfully",[
        {text: "ok",
        onPress: ()=>navigation.navigate("index")},
        {text: "cancel",
        onPress: ()=>navigation.navigate("AboutVocation")}
        
      ]);
        }
              }
     
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

