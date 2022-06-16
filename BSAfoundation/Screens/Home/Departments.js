
import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, ScrollView, Image } from "react-native";
import images from '../../constants/images'

const DATA = [
    {
        id: 1,
        img: images.account, 
         name:'Accounts',
        post: 'Chairman',
        phone: '+234 803 000 0000',
        qualification: 'OND (Banking & Finance), ACIB, M. Sc., CEMAP, FCIFCN, MISMN, CPA'
    },
    {
        id: 2,
        img: images.adminsupplies,
        name:'Administration and Supplies',
        post: 'Executive Secretary',
        phone: '+234 803 000 0000',
        qualification: 'MPA(Singapore), MBBS(Ibadan), MWACP(Lab. Medicine), Dip. Occ. Health (Illinois, Chicago)'
    }, {
        id: 3,
        img: images.budget,
        name:'Budget, Planning, Research and Statistics.',
        post: 'Director, Admin. & Supplies',
        phone: '+234 803 000 0000',
        qualification: 'B.A (Hons.) MIPR., LLB, BL,LLM'
    }, {
        id: 4,
        img: images.community,
        name:'Community Welfare',
        post: 'Director, Legal Services',
        phone: '+234 803 000 0000',
        qualification: 'LLB, BL, aicmc.'
    },
];




export default function Departments() {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
      

        return (
            <TouchableOpacity style={{marginHorizontal:5}}>
                <Image source={item.img}
                style={{width:150,height:150}}
                />
                <Text style={{width:150}}>{item.name}</Text>
            <Text>{item.post}</Text>
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
            <Text style={styles.board}>DEPARTMENTS</Text>

            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
                numColumns={2}
            />
           
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

