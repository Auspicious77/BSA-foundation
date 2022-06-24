

import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, ScrollView, Image, Alert } from "react-native";
import images from '../../constants/images'

const DATA = [
    {
        id: 1,
        img: images.a1,
        name: 'Baking and decoration',
        post: 'Akure, Ondo State',
        phone: '+234 803 000 0000',
        qualification: 'OND (Banking & Finance), ACIB, M. Sc., CEMAP, FCIFCN, MISMN, CPA'
    },
    {
        id: 2,
        img: images.a2,
        name: 'Tie and Die',
        post: 'Akure, Ondo State',
        phone: '+234 803 000 0000',
        qualification: 'MPA(Singapore), MBBS(Ibadan), MWACP(Lab. Medicine), Dip. Occ. Health (Illinois, Chicago)'
    }, {
        id: 3,
        img: images.a3,
        name: 'Tailoring',
        post: 'Akure, Ondo State',
        phone: '+234 803 000 0000',
        qualification: 'B.A (Hons.) MIPR., LLB, BL,LLM'
    }, {
        id: 4,
        img: images.a4,
        name: 'Bag Making',
        post: 'Akure, Ondo State',
        phone: '+234 803 000 0000',
        qualification: 'LLB, BL, aicmc.'
    }, {
        id: 5,
        img: images.a5,
        name: 'Barbing',
        post: 'Akure, Ondo State',
        phone: '+234 803 000 0000',
        qualification: 'OND (Banking & Finance), ACIB, M. Sc., CEMAP, FCIFCN, MISMN, CPA'
    },
    {
        id: 6,
        img: images.a6,
        name: 'HairDressing',
        post: 'Akure, Ondo State',
        phone: '+234 803 000 0000',
        qualification: 'MPA(Singapore), MBBS(Ibadan), MWACP(Lab. Medicine), Dip. Occ. Health (Illinois, Chicago)'
    }, {
        id: 7,
        img: images.a7,
        name: 'Furniture',
        post: 'Akure, Ondo State',
        phone: '+234 803 000 0000',
        qualification: 'B.A (Hons.) MIPR., LLB, BL,LLM'
    }, {
        id: 8,
        img: images.a8,
        name: 'Garment Making',
        post: 'Akure, Ondo State',
        phone: '+234 803 000 0000',
        qualification: 'LLB, BL, aicmc.'
    },
];




export default function ListOfVocations({navigation}) {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {


        return (
            <TouchableOpacity style={{ marginHorizontal: 5 }}
           >
                <Image source={item.img}
                    style={{ width: 150, height: 150 }}
                />
                <Text style={{ width: 150, textAlign: 'center', fontSize: 18, color: '#000',  marginBottom:20}}>{item.name}</Text>
                {/* <Text style={{ width: 150, textAlign: 'center', marginBottom:20 }}>{item.post}</Text> */}
                {/* <Text>{item.phone}</Text>
            <Text style={{width:150}}>{item.qualification}</Text> */}
            </TouchableOpacity>
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
            <Text style={styles.board}>Enroll For Skill Acquisition</Text>

            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
                numColumns={2}
            />
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
    board: {
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center',
        marginVertical: 10,
        color: '#000'
    }


});



//   return (
//     <ScrollView>
//     <Text>Administration</Text>
//     </ScrollView>
//   );


