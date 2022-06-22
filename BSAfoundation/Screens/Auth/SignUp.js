import * as React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Image, Text,ScrollView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function SignUp({navigation}) {
//   const [Name, setName] = React.useState('');
//   const setData = ()=> {
//     if(Name.length==0){
//  Alert.alert("please enter your name")
//     }else{
//       try {
//     await AsyncStorage.setItem
        
//       } catch (error) {
        
//       }
     
//     }
//   }

  return (
    <ScrollView>
    <View style={styles.container}>

      <View style={{ alignItems: 'center', paddingVertical: 25 }}>
        <Image
          source={require("../../assets/icons/logo.png")}
          style={{ width: 100, height: 100 }}
        />

        <Text style={styles.Intervention}> OSOPADEC Intervation Agency</Text>
        <Text style={styles.Intervention2}>Sign Up </Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder=' Enter Your Full Name'
        placeholderTextColor="#808080"
        // onChangeText={(value) => setName (value)}
      />

      <TextInput
        style={styles.input}
        placeholder=' Enter Your Password'
        secureTextEntry
        placeholderTextColor="#808080"
      />
      <TextInput
        style={styles.input}
        placeholder=' Confirm Password'
        placeholderTextColor="#808080"
      />

      <TextInput
        style={styles.input}
        placeholder=' Enter Your Home Address'
        placeholderTextColor="#808080"
      />
      <TextInput
        style={styles.input}
        placeholder=' Enter Your Phone Number'
        placeholderTextColor="#808080"
      />
      <TextInput
        style={styles.input}
        placeholder=' Enter Your E-mail'
        placeholderTextColor="#808080"
      />
      <TextInput
        style={styles.input}
        placeholder=' Enter Your Date of Birth'
        placeholderTextColor="#808080"
        
      />


      <TouchableOpacity style={styles.loginButton}
      onPress={()=>navigation.navigate('Login')}
      // onPressFunction={setData}
      >
        <View>
          <Text style={styles.logintext}>SIGN UP</Text>
        </View>
      </TouchableOpacity>


      <View style={{
        flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
        alignSelf: 'center',
      }}
      >
        <Text style={{ fontSize: 15 }} >  Already have an account?</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
          <Text style={{ color: "#4266f5", fontSize: 18 }}> Login </Text>
        </TouchableOpacity>

      </View>

    </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  marginHorizontal:20,
    backgroundColor: '#fff'
  },

  input: {
    borderWidth: 1,
    borderColor: '#00020ac2',
    borderRadius: 7,
    fontSize: 17,
    marginVertical: 10,
    marginHorizontal: 20,
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
    padding: 12,
    color: '#fff',
    fontSize: 19,
    fontWeight: '500'
  },
  Intervention: {
    marginBottom: -10,
    fontSize: 21,
    color: '#04116ec2',
    fontWeight: '600',
  },
  forgot: {
    color: '#db0226',
    textAlign: 'right',
    fontSize: 15,
    marginRight: 20
  },
  Intervention2: {
    marginVertical: 10,
    fontSize: 21,
    color: '#04116ec2',
    fontWeight: '600',
  },

})

