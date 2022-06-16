import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Image,
    FlatList
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
                    source={require("../../assets/icons/logo.png")}
                    style={{ width: 100, height: 100 }}
                />
            </View>

            <TouchableOpacity>
                <Text style={styles.Intervention}>Intervation Agency</Text>

                <Text style={styles.For}>For The Mandate Communities Ilaje And Ese-odo</Text>
            </TouchableOpacity>


            {/* Vision OSOPADEC */}
            <View style={styles.background}>
                <TouchableOpacity style={styles.Button}>
                    <Text style={styles.About}>OSOPADEC Vision</Text>
                </TouchableOpacity>
                <Text style={styles.Ondo}>...to be the most proactive and responsive interventionist agency that satisfies stakeholders' aspirations with excellence in service delivery</Text>
                {/* <TouchableOpacity style={styles.ButtonS}>
                    <Text style={styles.See}> See More....</Text>

                </TouchableOpacity> */}

            </View>
            {/* End Vision OSOPADEC */}


            {/* About OSOPADEC */}
            <View style={styles.background}>
                <TouchableOpacity style={styles.Button}>
                    <Text style={styles.About}>About OSOPADEC</Text>
                </TouchableOpacity>
                <Text style={styles.Ondo}>Ondo State Oil Producing Areas Development Commission, OSOPADEC was established by the Laws of Ondo State CAP. 106 in 2001 to intervene in the development of the oil producing and impacted areas of Ondo State.</Text>
                <TouchableOpacity
                    style={styles.ButtonS}
                    onPress={() => navigation.navigate('AboutUs')}>
                    <Text style={styles.See}> See More....</Text>

                </TouchableOpacity>

            </View>
            {/* End whatwedo OSOPADEC */}

              {/* About OSOPADEC */}
              <View style={styles.background}>
                <TouchableOpacity style={styles.Button}>
                    <Text style={styles.About}>What We Do</Text>
                </TouchableOpacity>
                <Text style={styles.Ondo}>We Are Providing a leverage for Sustainable Development Goals and foster Community Economic Development Initiatives within mandate communities the Commission facilitates, executes and implements strategic Programmes and Projects such as...</Text>
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
                    <Text style={styles.About}> OSOPADEC Mission</Text>
                </TouchableOpacity>
                <Text style={styles.Ondo}>…to transform the lives of the people and ensure total prosperity and sustainable development through intervention programmes in the oil producing areas of Ondo State.</Text>
                {/* <TouchableOpacity style={styles.ButtonS}>
                    <Text style={styles.See}> See More....</Text>

                </TouchableOpacity> */}

            </View>
            {/* End Mission OSOPADEC */}

            

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
            {/* End Contact OSOPADEC */}

            <Text style={{ textAlign: 'center', paddingBottom: 10 }}>© 2020 OSOPADEC. All Rights Reserved</Text>
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
    },
    For: {
        textAlign: 'center',
        fontSize: 18,
        // color:'#4266f5'
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
        // color: '#d47400'
    }
});
