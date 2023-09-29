
import React, { useEffect } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import colors from "../../colors";
import { Entypo } from '@expo/vector-icons';

const Footer = () => {
    const navigation = useNavigation();

    return (
        
        <View style={styles.box}>
            <View style={styles.container}>


          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={styles.chatButton}
        >
            <Entypo name="home" size={24} color={colors.lightGray} />
        </TouchableOpacity>


        <TouchableOpacity
            onPress={() => navigation.navigate("Chat")}
            style={styles.chatButton}
        >
            <Entypo name="chat" size={24} color={colors.lightGray} />
        </TouchableOpacity>


        <TouchableOpacity
            onPress={() => navigation.navigate("Chat")}
            style={styles.chatButton}
        >
            <Entypo name="bell" size={24} color={colors.lightGray} />
        </TouchableOpacity>


        <TouchableOpacity
            onPress={() => navigation.navigate("Profile")}
            style={styles.chatButton}
        >
            <Entypo name="user" size={24} color={colors.lightGray} />
        </TouchableOpacity>
        </View>
    </View>
);
};

export default Footer;

const styles = StyleSheet.create({
    box:{
        position: 'absolute',
        bottom: 5,
        backgroundColor: "grey",
        width: '100%',
    },


    container: {
        flex: 1,
        justifyContent: 'flex',
        alignItems: 'flex',
       
        flexDirection: "row",
        marginTop:15,
       
        justifyContent: " space-evenly ",
        
        
    },
    chatButton: {
        backgroundColor: colors.primary,
        height: 50,
        width: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: colors.primary,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: .9,
        shadowRadius: 8,
        
        marginBottom: 20,
    }
});