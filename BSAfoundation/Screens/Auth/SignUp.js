import * as React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Image, Text,ScrollView, } from 'react-native';
import { Paragraph } from 'react-native-paper';


export default function SignUp({navigation}) {
  return (
    <ScrollView style={{flex:1,backgroundColor:"#ffffff"}}>
    <View style={styles.container}>

      <View style={{ alignItems: 'center', paddingVertical: 25 }}>
      <Image
           source={require("../../assets/images/BSAlogologin.png")}
          style={{ width: 180, height: 100 }}
        />
      

<Text style={styles.Intervention}> Booda Sunday Adeyemo</Text>
<Paragraph style={{color:"#000033", marginTop:10,fontSize:18,marginBottom:10}}>FOUNDATION</Paragraph>
        <Text style={styles.Intervention2}>Sign Up </Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder=' Enter Your Full Name'
        placeholderTextColor="#808080"
        
      />

      <TextInput
        style={styles.input}
        placeholder=' State of Origin'
        // secureTextEntry
        placeholderTextColor="#808080"
      />
      <TextInput
        style={styles.input}
        placeholder=' Local Government Area'
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
        placeholder=' Enter Your Place of Birth'
        placeholderTextColor="#808080"
        
      />


      <TouchableOpacity style={styles.loginButton}
      onPress={()=>navigation.navigate('Login')}
     
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
        <Text style={{ fontSize: 15, color:"#000000" }} >  Already have an account?</Text>
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
    backgroundColor: '#fff',
    marginBottom:30
    
  },

   input: {
    borderWidth: 1,
    borderColor: '#04116ec2',
    borderRadius: 7,
    fontSize: 17,
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
    fontSize: 19,
    fontWeight: '500'
  },
  Intervention:{
    marginBottom:-10,
    fontSize:21,
    color:'#000033',
    fontWeight:'600',
  },
  forgot: {
    color: '#db0226',
    textAlign: 'right',
    fontSize: 15,
    marginRight: 20
  },
  Intervention2: {
    // marginVertical: 10,
    fontSize: 41,
    color: '#020d5fc2',
    fontWeight: '600',
    marginBottom:-10,
    marginTop:10,
  },

})

