import * as React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Image, Text,ScrollView } from 'react-native'
import { Paragraph } from 'react-native-paper';


export default function Login({navigation}) {
  const [text, setText] = React.useState('');

  return (
    <ScrollView style={styles.container}>

      <View style={{ alignItems: 'center', paddingVertical: 25 }}>
        <Image
           source={require("../../assets/images/BSAlogo-r.png")}
          style={{ width: 130, height: 100, marginBottom:20 }}
        />
      
{/* 
<Text style={styles.Intervention}> Booda Sunday Adeyemo</Text>
<Paragraph style={{color:"#000033", marginTop:10,fontSize:18,marginBottom:30}}>FOUNDATION</Paragraph> */}
      </View>
      <TextInput
        style={styles.input}
        placeholder=' Enter Your email'
        placeholderTextColor="#808080"
        placeTextSize={10}
      />

      <TextInput
        style={styles.input}
        placeholder=' Enter Your  Password'
        secureTextEntry
        placeholderTextColor="#808080"
      />

{/* <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
        <Text style={styles.forgot}>forgot password?</Text>
      </TouchableOpacity> */}
      <TouchableOpacity style={styles.loginButton}
      onPress={() => navigation.navigate('BottomStack')}>
        <View>
          <Text style={styles.logintext}>LOGIN</Text>
        </View>
      </TouchableOpacity>


      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
        alignSelf: 'center', }}>
        <Text style={{  fontSize:15,color:"#000000"}} >  Don’t have an account?</Text>
        <TouchableOpacity 
        onPress={() => navigation.navigate('SignUp')}>
          <Text style={{ color: "#4266f5",fontSize:18 }}>  Sign up</Text>
        </TouchableOpacity>

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
    borderColor: '#04116ec2',
    borderRadius: 7,
    fontSize: 13,
    marginVertical: 10,
    marginHorizontal: 20,
    color:'#000000'
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
    fontSize: 21,
    fontWeight: '500',
    alignSelf:"center"
  },
  Intervention:{
    marginBottom:-10,
    fontSize:21,
    color:'#000033',
    fontWeight:'600',
  },
  forgot: {
    color: '#db0226',
textAlign:'right',
    fontSize: 15,
    marginRight:20
  },

})

