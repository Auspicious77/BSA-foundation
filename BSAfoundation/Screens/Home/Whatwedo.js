import React from 'react'
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import { ScrollView } from 'react-native';
import { Paragraph } from 'react-native-paper';
import { black } from 'react-native-paper/lib/typescript/styles/colors';
import { icons, images } from '../../constants';

export default function Whatwedo() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{ height: 150, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                    <ImageBackground source={images.official3} resizeMode="cover" style={styles.image}>
                        <View style={{ backgroundColor: "#000000c2", height: 150, justifyContent: 'center' }}>
                            <Text style={styles.text1}>...to raise young men ang women to be responsible and productive in their respective endeavours</Text>
                        </View>
                    </ImageBackground>
                </View>

                <View style={styles.ImageText}>
                    <Text style={styles.Ondo}>Booda Sunday Adeyemo</Text>
                     <Paragraph style={styles.Ondo}>(BSA) Foundation
                     </Paragraph>
                    <Paragraph style={styles.para}> A nonprofit organization to promote youth,
                     teenagers' development, and self-discovery. As an organization, 
                     we belive that tennagers and youths are the tipping points in changing our world
                     </Paragraph>

                    {/* <Text style={styles.In}>In order to provide a leverage for Sustainable Development Goals and foster Community Economic Development Initiatives within mandate communities the Foundation facilitates, executes and implements strategic Programmes and Projects such as:</Text> */}
                </View>

                {/* Educational Programmes */}
                <View style={styles.ImageText}>
                    <Image source={require('../../assets/images/education.png')} style={{ width: 100, height: 100 }} />
                    <Text style={styles.Title}>Educational Programmes</Text>
                    <Text style={styles.text5}>The Foundation continually seeks to improve access and quality of education of mandate communities by executing programs to further strengthen and increase the teaching workforce, improve teacher education and educational systems with a focus on learning, teaching, school management, parental participation and responsiveness to children’s needs.

                        The Foundation also sponsors bursary and scholarship programmes and facilitates formal, non-formal and vocational training.</Text>
                </View>
                {/* Community Development */}

                <View style={styles.ImageText}>
                    <Image source={require('../../assets/images/community.png')} style={{ width: 100, height: 100 }} />
                    <Text style={styles.Title}>Community Development</Text>
                    <Text style={styles.text5}>The Foundation provides a platform for Community Economic Development Initiatives that are driven towards tackling issues like unemployment, poverty, job loss, environmental degradation, crisis thereby increasing opportunities for communities who are disadvantaged and enhancing the economic, social, ecological and cultural well-being of these communities.

                        These development initiatives cut across agricultural programs, civil projects, humanitarian programs, environmental support projects etc.</Text>
                </View>


                {/* Health Care */}
                <View style={styles.ImageText}>
                    <Image source={require('../../assets/images/health.png')} style={{ width: 100, height: 100 }} />
                    <Text style={styles.Title}>Health Care</Text>
                    <Text style={styles.text5}>The Foundation facilitates healthcare and social services to the underprivileged, physically challenged, aged, abused and the most vulnerable in the mandate communities.

                        The Foundation promotes health care services for pregnant/vulnerable women and children in the communities and create more awareness and sensitization on the prevention of diseases.
                    </Text>
                </View>


            </View>

        </ScrollView>
    )
}


const styles = StyleSheet.create({
    text: {
        alignItems: 'center',
        fontSize: 17,
        color:"black",
        opacity:0.5
    },
    text5: {
        justifyContent: 'center',
        fontSize: 17,
        color:"black",
        opacity:0.5,
        textAlign: 'center'

    },
    ImageText: {
        alignItems: 'center',
        backgroundColor: '#fff',
        elevation: 10,
        borderRadius: 20,
        margin: 10,
        padding: 10
    },
    Title: {
        // alignItems:'center' ,
        fontSize: 20,
        fontWeight: 'bold',
        color:"black"
    },
    Ondo: {
        alignItems: 'center',
        fontSize: 17,
        color:"black",
        textAlign:"center",
        fontWeight: '700'
    },
    para:{
        alignItems: 'center',
        fontSize: 17,
        color:"black",
        opacity:0.6,
        textAlign:"left",
       
    },

   
    In: {
        alignItems: 'center',

        fontSize: 17
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 5
    },
    image: {
        flex: 1,
        justifyContent: "center",
        width: '100%',
        height: 150,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    text1: {
        color: "white",
        fontSize: 20,
        //   lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
    }


});