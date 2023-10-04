import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Button, Text, Image, StyleSheet, backgroundColor, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Footer from "./component/Footer";
import EditProfile from "./EditProfile";
import { Switch } from '@rneui/themed';
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from '@expo/vector-icons';
import colors from "../colors";
const Profile = () => {
    const navigation = useNavigation();

    const [checked, setChecked] = useState(false);

    const toggleSwitch = () => {
        setChecked(!checked);
    };


    const handleNoPress = () => {
        console.log('No button pressed!');
        // Handle your logic for "No" here
    };

    return (
        <>
            <View style={{ flex: 1, backgroundColor: '#bfceec' }}>
{/* 00BFFF */}
                <View style={styles.header}>
                    <View style={{ flexDirection: 'row', marginTop: 20, marginRight: 10, justifyContent: 'flex-end', }}>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("EditProfile")}>
                            <Text style={styles.buttonText}>Edit Profile</Text>
                        </TouchableOpacity>
                    </View>
               


                <View style={styles.container}>
                    <Image source={require('../assets/profile.webp')} style={styles.avatar} />
                </View>
                </View>


                <View style={styles.form}>
                    <Text
                        style={{
                            borderColor: "gray",
                            borderWidth: 0.9,
                            height: 1,

                        }} />

                    <View style={styles.RectangleShapeView}>

                        <View style={{ flexDirection: "row"}}>

                        <Entypo name="bell" size={24} color={colors.primary} style={{paddingTop:10}}/>
                        <Text style={styles.name}> Name: Rohan </Text>
                        </View>


                        <Text style={styles.number}>Number: 7887308177</Text>
                        <Text style={styles.email}>Email: rohan6262@gmail.com</Text>


                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.privacyy}>Privacy:</Text>
                            <Switch style={{ marginLeft: 10, marginTop: 7 }}
                                value={checked}
                                onValueChange={(value) => setChecked(value)}
                            />



                        </View>

                    </View>


                </View>
            </View>




            <Footer />

        </>
    )
}

export default Profile

const styles = StyleSheet.create({

    header: {
        backgroundColor: '#1f386b',
        height: 200,
    },
    container: {
        flex: 1,
        padding: 20
        
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: 'white',
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 50,
    },

    form: {
        width: "100%",
        marginTop: 80,
        // justifyContent: 'flex-start',
    },
    RectangleShapeView: {
        marginTop: 10,
        width: "100%",
        // height: 400,
        // backgroundColor: "white",
        // color: "black",
        // borderRadius: 10,
        // borderColor: "black",
        // borderWidth: 1,
        paddingLeft: 40,
        // elevation: 3
    },

    
    buttonContainer: {
        flexDirection: 'row',     // sets the primary axis to horizontal
        justifyContent: 'flex-end',  // aligns children to the end (right) on the primary axis
        padding: 16,//
        borderRadius: 20,
    },

    name: {
        paddingLeft: 4,
        
        fontSize: 20,
        marginBottom: 20,
        marginTop: 10,
        fontWeight: 'bold',

    },
    

    number: {
        paddingLeft: 4,
        fontSize: 20,
        marginBottom: 20,
        fontWeight: 'bold',

    },


    email: {
        paddingLeft: 4,
        fontSize: 20,
        marginBottom: 20,
        fontWeight: 'bold',


    },

    button: {

        flexDirection: 'row',     // sets the primary axis to horizontal
        justifyContent: 'flex-end',
        backgroundColor: '#007FFF',
        borderRadius: 10,

        justifyContent: 'center',
        width: 120,
        height: 40,


    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        padding: 10

    },
    

    image: {
        width: 400,
        height: 168,
    },

    
  

    privacyy: {
        paddingLeft: 10,
        fontSize: 20,
        fontWeight: 'bold',

        marginBottom: 10,
        justifyContent: 'space-between',
    },

});

