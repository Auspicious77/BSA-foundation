import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Image,
    FlatList,
    Linking
} from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';


import { COLORS, FONTS, SIZES } from '../../constants';
import images from '../../constants/images'
import icons from '../../constants/icons'

const sliderimages = [
    images.ilajepictures_1,
    images.ilajepictures_2,
    images.ilajepictures_3,
    images.ilajepictures_4,
    images.ilajepictures_5,
    images.ilajepictures_5a,
    images.ilajepictures_5b,
    images.ilajepictures_6,
];
export default function Index({navigation}) {
    return (
        <ScrollView>
            <SliderBox
                style={{

                    borderRadius: 1,
                    width: "100%",
                    height: 200,
                    // marginBottom: 100,
                }}
                images={sliderimages}
                // sliderBoxHeight={200}
                // sliderBoxWidth={250}
                dotColor="#FFEE58"
                inactiveDotColor="#90A4AE"
                paginationBoxVerticalPadding={180}
                autoplay
                circleLoop
            />

            <View style={{ alignItems: 'center', paddingVertical: 5 }}>
                <Image
                    source={require("../../assets/images/BSAlogo-r.png")}
                    style={{ width: 150, height: 150 }}
                    resizeMode="contain"
                />
            </View>

            <TouchableOpacity>
                <Text style={styles.Intervention}>BSA Foundation</Text>

                <Text style={styles.For}>For The Mandate Communities in Oyo state</Text>
            </TouchableOpacity>


            {/* Vision OSOPADEC */}
            <View style={styles.background}>
                <TouchableOpacity style={styles.Button}>
                    <Text style={styles.About}>BSA Vision</Text>
                </TouchableOpacity>
                <Text style={styles.Ondo}>Our vision statement is a genuine service to humanity</Text>
                {/* <TouchableOpacity style={styles.ButtonS}>
                    <Text style={styles.See}> See More....</Text>

                </TouchableOpacity> */}

            </View>
            {/* End Vision OSOPADEC */}


            {/* About OSOPADEC */}
            <View style={styles.background}>
                <TouchableOpacity style={styles.Button}>
                    <Text style={styles.About}>About BSA</Text>
                </TouchableOpacity>
                <Text style={styles.Ondo}>Booda Sunday Adeyemo (BSA) Foundation is a nonprofit organization to promote youth, teenagers' development, and self-discovery. As an organization, we belive that tennagers and youths are the tipping points in changing our world</Text>
                <TouchableOpacity
                    style={styles.ButtonS}
                    onPress={() => navigation.navigate('Administration')}>
                    <Text style={styles.See}> See More....</Text>

                </TouchableOpacity>

            </View>
            {/* End whatwedo OSOPADEC */}

              {/* About OSOPADEC */}
              <View style={styles.background}>
                <TouchableOpacity style={styles.Button}>
                    <Text style={styles.About}>What We Do</Text>
                </TouchableOpacity>
                <Text style={styles.Ondo}> We raise young men and women to be responsible and productive in their respective endeavours</Text>
                <TouchableOpacity
                    style={styles.ButtonS}
                    onPress={() => navigation.navigate('Whatwedo')}>
                    <Text style={styles.See}> See More....</Text>

                </TouchableOpacity>

            </View>
            {/* End whatwedo OSOPADEC */}


            {/* Mission OSOPADEC */}
            <View style={styles.background}>
                <TouchableOpacity style={styles.Button}>
                    <Text style={styles.About}> BSA Mission</Text>
                </TouchableOpacity>
                <Text style={styles.Ondo}>To raise young men and women to be reeponsible and productive in their respective endeavors</Text>
                {/* <TouchableOpacity style={styles.ButtonS}>
                    <Text style={styles.See}> See More....</Text>

                </TouchableOpacity> */}

            </View>
            {/* End Mission OSOPADEC */}

            

            {/* Contact OSOPADEC */}
            <View style={styles.background} >
                <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('ContactUs')}>
                    <Text style={styles.About}>Contact BSA</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'column', alignItems: 'center', marginHorizontal: 9 }}>
                    <Text style={{ fontSize: 17, textAlign: 'center', color:"black",  opacity:0.6 }}>Ogbomoso South Local Government, Oyo State, Ogbomoso</Text>

                    {/* <Text style={{ fontSize: 16, color: '#000',  opacity:0.6 }}>Email: info@BSA.gov.ng</Text> */}

                    <Text style={{ fontSize: 16, color: '#000',  opacity:0.6 }}>+234 000 000 0000</Text>

                    <Text style={{ fontSize: 16, color: '#000',  opacity:0.6 }}>+234 000 000 0000</Text>


                </View>
                {/* <TouchableOpacity style={styles.ButtonS}>
                <Text style={styles.See}> See More....</Text>

            </TouchableOpacity> */}


                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity style={styles.Button}>
                        <Text style={styles.About}>Follow Us:</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={()=>Linking.openURL('https://facebook.com/bodasundayfoundation/?_rdc=1&_rdr')}><Image source={require("../../assets/icons/facebook.png")} style={{ marginRight: 10, width: 30, height: 30 }} /></TouchableOpacity>
                        <TouchableOpacity><Image source={require("../../assets/icons/twitter.png")} style={{ marginRight: 10, width: 30, height: 30 }} /></TouchableOpacity>
                        <TouchableOpacity onPress={()=> Linking.openURL('mailto:bodasundayfoundation@gmail.com?subject=SendMail&body=Description') }><Image source={require("../../assets/icons/gmail.png")} style={{ marginRight: 10, width: 30, height: 30 }} /></TouchableOpacity>
                        <TouchableOpacity   onPress={()=>Linking.openURL('https://www.instagram.com/officialbsafoundation')}><Image source={require("../../assets/icons/instagram.png")} style={{ marginRight: 10, width: 30, height: 30 }} /></TouchableOpacity>

                        
                    </View>

                </View>
            </View>
            {/* End Contact OSOPADEC */}


            
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    background: {
        backgroundColor: '#fff',
        elevation: 10,
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
    ButtonS: {
        marginVertical: 10,
        // backgroundColor: '#fff',
        borderBottomEndRadius: 10,
        borderBottomRightRadius: 10,
        borderTopEndRadius: 10,
        borderTopLeftRadius: 50,
        width: '60%',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#4266f5'


    },
    Intervention: {
        fontSize: 25,
        fontWeight: '600',
        textAlign: 'center',
        color: '#d47400',
        marginTop:-5,
    },
    For: {
        textAlign: 'center',
        fontSize: 18,
        color:'#000000',
        
    },
    About: {
        textAlign: 'center',
        fontSize: 20,
        color: '#fff',
        padding: 5
    },
    See: {
        textAlign: 'center',
        fontSize: 18,
        color: '#4266f5',
        padding: 3
    },
    Ondo: {
        // justifyContent:'center',
        textAlign: 'center',
        paddingHorizontal: 10,
        fontSize: 15,
        color:'#000000',
        opacity:0.6,
        // color: '#d47400'
    }
});
