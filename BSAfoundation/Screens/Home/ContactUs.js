import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Image,
    FlatList,
    TextInput
} from 'react-native';
import { COLORS } from '../../constants';
export default function ContactUs() {
    const [FullName, onChangeFullName] = React.useState("");
    const [Email, onChangeEmail] = React.useState("");
    const [Subject, onChangeSubject] = React.useState("");
    const [Message, onChangeMessage] = React.useState("");
    return (
        <ScrollView>



            {/* Contact OSOPADEC */}
            <View style={styles.background}>
                <TouchableOpacity style={styles.Button}>
                    <Text style={styles.About}>Contact BSA</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'column', alignItems: 'center', marginHorizontal: 9 }}>
                    <Text style={{ fontSize: 17, textAlign: 'center', color:COLORS.black, opacity: 0.7 }}>Ogbomoso South Local Government, Ogbomoso, Oyo state</Text>

                    <Text style={{ fontSize: 16, color: '#000', color:COLORS.black, opacity: 0.7 }}>Email: info@BSA.gov.ng</Text>

                    <Text style={{ fontSize: 16, color: '#000', color:COLORS.black }}>+234 706 181 3135</Text>

                    <Text style={{ fontSize: 16, color: '#000', color:COLORS.black }}>+234 905 764 1515</Text>


                </View>
                {/* <TouchableOpacity style={styles.ButtonS}>
                <Text style={styles.See}> See More....</Text>

            </TouchableOpacity> */}


                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity style={styles.Button}>
                        <Text style={styles.About}>Follow Us:</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity><Image source={require("../../assets/icons/facebook.png")} style={{ marginRight: 10, width: 30, height: 30 }} /></TouchableOpacity>
                        <TouchableOpacity><Image source={require("../../assets/icons/twitter.png")} style={{ marginRight: 10, width: 30, height: 30 }} /></TouchableOpacity>
                        <TouchableOpacity><Image source={require("../../assets/icons/gmail.png")} style={{ marginRight: 10, width: 30, height: 30 }} /></TouchableOpacity>
                        <TouchableOpacity><Image source={require("../../assets/icons/instagram.png")} style={{ marginRight: 10, width: 30, height: 30 }} /></TouchableOpacity>
                        
                    </View>
                </View>
            </View>



            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeFullName}
                    value={FullName}
                    placeholder="Full-Name"
                    keyboardType="default"
                    placeholderTextColor="#808080"
                />
            </View>

            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeEmail}
                    value={Email}
                    placeholder="youremail@gmail.com"
                    keyboardType="email-address"
                    placeholderTextColor="#808080"
                />
            </View>

            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeSubject}
                    value={Subject}
                    placeholder="Subject"
                    keyboardType="default"
                    placeholderTextColor="#808080"
                />
            </View>

        

            <View>
                <TextInput
                    style={styles.input1}
                    onChangeText={onChangeMessage}
                    numberOfLines={4}
                    value={Message}
                    placeholder="Enter Your Message Here..."
                    keyboardType="default"
                    placeholderTextColor="#808080"
                />
            </View>

            <TouchableOpacity style={styles.Button}>
                <Text style={styles.About}>Send a Message</Text>
            </TouchableOpacity>

            {/* End Contact OSOPADEC */}

        </ScrollView>
    )
}



const styles = StyleSheet.create({
    background: {
        backgroundColor: '#fff',
        elevation: 3,
        paddingVertical: 20,
        borderRadius: 30,
        marginHorizontal: 8,
        marginVertical: 15
    },
    Button: {
        marginVertical: 10,
        backgroundColor: '#4266f5',
        borderBottomEndRadius: 10,
        borderBottomRightRadius: 10,
        borderTopEndRadius: 10,
        borderTopLeftRadius: 50,
        width: '60%',
        alignSelf: 'center'

    },

    About: {
        textAlign: 'center',
        fontSize: 20,
        color: '#fff',
        padding: 5
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: '#999cff',
        borderRadius: 5
    }, 
    input1: {
        height: 80,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: '#999cff',
        borderRadius: 5
    },


});
