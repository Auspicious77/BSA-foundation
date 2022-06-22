import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, ScrollView, Image } from "react-native";
import images from '../../constants/images'

const DATA = [
    {
        id: 1,
        img: images.official3, 
        name:'Hon Sunday Adeyemo Jeremiah',
        post: 'Chairman',
        phone: '+234 803 000 0000',
        // qualification: 'OND (Banking & Finance), ACIB, M. Sc., CEMAP, FCIFCN, MISMN, CPA'
    },
    {
        id: 2,
        img: images.profile2,
        name:'Dr. Victor Koledoye',
        post: 'Executive Secretary',
        phone: '+234 803 000 0000',
        qualification: 'MPA(Singapore), MBBS(Ibadan), MWACP(Lab. Medicine), Dip. Occ. Health (Illinois, Chicago)'
    }, {
        id: 3,
        img: images.profile1,
        name:'Ololajulo, Bayo Olaniran, Esq.',
        post: 'Director, Admin. & Supplies',
        phone: '+234 803 000 0000',
        qualification: 'B.A (Hons.) MIPR., LLB, BL,LLM'
    }, {
        id: 4,
        img: images.profile10,
        name:'Pamela Olowoyo',
        post: 'Director, Legal Services',
        phone: '+234 803 000 0000',
        qualification: 'LLB, BL, aicmc.'
    },
];

const DATAB = [
    {
        id: 1,
        img: images.profile9,
        post: 'Mr. Raphael Adegboye',
        phone: '',
        qualification: ''
    },
    {
        id: 2,
        img: images.profile8,
        post: 'Engr. Abiola John Oladapo',
        phone: '',
        qualification: ''
    },
    {
        id: 3,
        img: images.profile7,
        post: 'Mrs M. Whitherspoon',
        phone: '',
        qualification: ''
    },
    {
        id: 4,
        img: images.profile6,
        post: 'Mr Ikoto Agabra Atili',
        phone: '',
        qualification: ''
    },
    {
        id: 5,
        img: images.profile5,
        post: 'Mrs Mosun Olukale',
        phone: '',
        qualification: ''
    },
    {
        id: 6,
        img: images.profile4,
        post: 'Mr. Steve Temilorun Fadaini',
        phone: '',
        qualification: ''
    },
   
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
);

export default function Administration() {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        // const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
        // const color = item.id === selectedId ? 'white' : 'black';

        return (
            <View style={{marginHorizontal:5}}>
                <Image source={item.img}
                style={{width:150,height:150}}
                />
                <Text style={{width:150}}>{item.name}</Text>
            <Text>{item.post}</Text>
            <Text>{item.phone}</Text>
            <Text style={{width:150}}>{item.qualification}</Text>
            </View>
            // <Item
            //     item={item}
            //     onPress={() => setSelectedId(item.id)}
            //     backgroundColor={{ backgroundColor }}
            //     textColor={{ color }}
            // />
        );
    };

    return (
        <ScrollView style={styles.container}>
            <View style={{alignItems:"center"}}>
            <Text style={styles.board}>BOARD DIRECTORS</Text>

        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
            numColumns={2}
        />
        {/* <Text style={styles.board}>BOARD MEMBERS</Text> */}
        {/* <FlatList
            data={DATAB}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
            numColumns={2}
        /> */}
            </View>
        
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        // justifyContent:'space-around',
        // marginHorizontal:

        // marginTop: StatusBar.currentHeight || 0,
    },
    board:{
        fontSize:18,
        fontWeight:'700',
        textAlign:'center',
        marginVertical:10,
        color:'#000'
    }
   
   
});



//   return (
//     <ScrollView>
//     <Text>Administration</Text>
//     </ScrollView>
//   );

