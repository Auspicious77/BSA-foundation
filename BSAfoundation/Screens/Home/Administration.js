import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, ScrollView, Image } from "react-native";
import images from '../../constants/images'

const DATA = [
    {
        id: 1,
        img: images.official3, 
        name:'Sunday Adeyemo Jeremiah',
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
        // qualification: 'MPA(Singapore), MBBS(Ibadan), MWACP(Lab. Medicine), Dip. Occ. Health (Illinois, Chicago)'
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

        return (
            <View style={{marginHorizontal:5,alignContent:"center"  }}>
                <View >
                <Image source={item.img}
                style={{width:"100%",height:500, marginTop:-30,}}
                resizeMode="contain"
                />
                </View>
                <Text style={{ color:"#000000", textAlign:"center", fontWeight:"bold", fontSize:25, marginTop:-30}}>{item.name}</Text>
            <Text style={styles.post}>{item.post}</Text>
            <Text style={{ color:"#000000", textAlign:"center"}}>{item.phone}</Text>
            {/* <Text style={{ color:"#000000", textAlign:"center", fontWeight:"bold", fontSize:25, marginTop:-30}}>{item.qualification}</Text> */}
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
    },
    post: {

        color:"#000000",
        textAlign:"center",
        fontSize:20

    }
   
   
});

