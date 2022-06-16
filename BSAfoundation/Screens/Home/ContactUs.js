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
export default function ContactUs() {
    const [FullName, onChangeFullName] = React.useState("");
    const [Email, onChangeEmail] = React.useState("");
    const [Subject, onChangeSubject] = React.useState("");
    const [Message, onChangeMessage] = React.useState("");
    return (
        <ScrollView>



            {/* Contact OSOPADEC */}
            <View style={styles.background}>
                <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('ContactUs')}>
                    <Text style={styles.About}>Contact OSOPADEC</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'column', alignItems: 'center', marginHorizontal: 9 }}>
                    <Text style={{ fontSize: 17, textAlign: 'center' }}>Ondo State Oil Producing Areas Development Commission Headquaters, Obaile, Ondo State</Text>

                    <Text style={{ fontSize: 16, color: '#000' }}>Email: info@osopadec.gov.ng</Text>

                    <Text style={{ fontSize: 16, color: '#000' }}>+234 706 181 3135</Text>

                    <Text style={{ fontSize: 16, color: '#000' }}>+234 905 764 1515</Text>


                </View>
                {/* <TouchableOpacity style={styles.ButtonS}>
                <Text style={styles.See}> See More....</Text>

            </TouchableOpacity> */}


                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity style={styles.Button}>
                        <Text style={styles.About}>Follow Us:</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity><Image source={require("../../assets/icons/twitter.png")} style={{ marginRight: 10, width: 30, height: 30 }} /></TouchableOpacity>
                        <TouchableOpacity><Image source={require("../../assets/icons/facebook.png")} style={{ marginRight: 10, width: 30, height: 30 }} /></TouchableOpacity>
                        <TouchableOpacity><Image source={require("../../assets/icons/instagram.png")} style={{ marginRight: 10, width: 30, height: 30 }} /></TouchableOpacity>
                        <TouchableOpacity><Image source={require("../../assets/icons/gmail.png")} style={{ marginRight: 10, width: 30, height: 30 }} /></TouchableOpacity>
                    </View>
                </View>
            </View>



            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeFullName}
                    value={FullName}
                    placeholder="Full Name"
                    keyboardType="default"
                />
            </View>

            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeEmail}
                    value={Email}
                    placeholder="E-mail"
                    keyboardType="email-address"
                />
            </View>

            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeSubject}
                    value={Subject}
                    placeholder="Subject"
                    keyboardType="default"
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
