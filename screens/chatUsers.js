import React, { useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
    Dimensions,
    Modal,
    ScrollView,
} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import Chat from './Chat';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const chatUsers = () => {

    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate("Chat");
    }

    return (

        <ScrollView style={styles.fabContainer}>
            <TouchableOpacity onPress={handlePress}>
                <View style={styles.card}>
                    <View style={styles.carddetail}>

                            <Image
                               style={styles.image}
                                source={require('../assets/blackuser.webp')}
                            />
                        <Text style={styles.textalign}>Rajesh Rathod</Text>

                    </View>
                </View>
            </TouchableOpacity>
            {/*  */}
            <TouchableOpacity onPress={handlePress}>
                <View style={styles.card}>
                    <View style={styles.carddetail}>

                            <Image
                               style={styles.image}
                                source={require('../assets/blackuser.webp')}
                            />
                        <Text style={styles.textalign}>Pravin Pimpale</Text>

                    </View>
                </View>
            </TouchableOpacity>
            {/*  */}
          
          

        </ScrollView>
    )
}

export default chatUsers;

const styles = StyleSheet.create({


    fabContainer: {

        height: windowHeight * 6.5 / 10,

        margin: 5,


    },
    image: {

        height: 30,

        width: 30,
        marginLeft:10,
        marginTop:13,



    },
    textalign:{
        fontSize:18,
         fontWeight:'bold',
         paddingLeft:10,
         paddingTop:13,

    },

    card: {
        backgroundColor: 'white',
        // borderRadius: 8,

        height: 55,
        width: windowWidth,

        margin: 5,
        shadowColor: '#000',

        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,

        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,

        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    carddetail: {
        display: "flex",
        flexDirection: 'row',
        // justifyContent: 'space-between'
    },
})