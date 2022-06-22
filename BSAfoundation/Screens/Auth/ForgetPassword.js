import * as React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Image, Text } from 'react-native'

export default function ForgetPassword({navigation}) {
  const [text, setText] = React.useState('');

  return (
    <View style={styles.container}>

    <View style={{ alignItems: 'center', paddingVertical: 25 }}>
        <Image
           source={require("../../assets/images/BSAlogo-r.png")}
          style={{ width: 130, height: 100, marginBottom:20 }}
        />

{/* <Text style={styles.Intervention}> Booda Sunday Adeyemo Foundation</Text> */}
      </View>
      <TextInput
        style={styles.input}
        placeholder='  Enter Email Address'
        placeholderTextColor="#00000048"      />

    


      <TouchableOpacity style={styles.loginButton}>
        <View>
          <Text style={styles.logintext}>GET YOUR PASSWORD</Text>
        </View>
      </TouchableOpacity>


      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
        alignSelf: 'center', }}>
        <Text style={{  fontSize:15}} >  Already Have An Account</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
          <Text style={{ color: "#4266f5",fontSize:18 }}>Login</Text>
        </TouchableOpacity>

      </View>

    </View>
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
    borderColor: '#04116ec2',
    borderRadius: 7,
    fontSize: 17,
    marginVertical: 10,
    marginHorizontal: 20,
    // color:'#000'
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
  Intervention:{
    marginBottom:-10,
    fontSize:21,
    color:'#04116ec2',
    fontWeight:'600',
  },
  forgot: {
    color: '#db0226',
textAlign:'right',
    fontSize: 15,
    marginRight:20
  },

})

