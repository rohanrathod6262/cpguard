import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Button, Text, Image, StyleSheet, backgroundColor, ImageBackground } from "react-native";
import { useNavigation,useRoute } from "@react-navigation/native";
import Footer from "./component/Footer";
import EditProfile from "./EditProfile";
import { Switch } from '@rneui/themed';
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from '@expo/vector-icons';
import colors from "../colors";
const Profile = () => {
    const route = useRoute();
    const navigation = useNavigation();
   const { name } = route.params || {};
   const { phone_no } = route.params || {};
   const { privacy } = route.params || {};
   const { email } = route.params || {};



   const [checked, setChecked] = useState(privacy);
    const toggleSwitch = () => {
        setChecked(!checked);
    };
    const EditProfilenavigate = () => {
        navigation.navigate("EditProfile",{ name , phone_no , email, privacy});
    };

    return (
        <>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                {/* 00BFFF */}
                <View style={styles.header}>
                    <View style={{ flexDirection: 'row', marginTop: 20, marginRight: 10, justifyContent: 'flex-end', }}>
                        <TouchableOpacity style={styles.button} onPress={EditProfilenavigate}>
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

                    <View style={styles.DetailsView}>

                    <Text style={styles.text0}>User Details</Text>

                        <View style={styles.boxview}>
                            <Entypo name="user" size={30} color={colors.primary} style={{ paddingTop: 10, paddingRight: 5 }} />

                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.name}> Name </Text>
                                <Text style={styles.name1}> {name || ''}</Text>
                            </View>
                        </View>


                        <View style={styles.boxview}>
                        <Entypo name="mobile" size={30} color={colors.primary} style={{ paddingTop: 10 }} />

                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.name}> Number </Text>
                                <Text style={styles.name1}>  {phone_no || ''}</Text>
                            </View>
                        </View>


                        <View style={styles.boxview}>
                        <Entypo name="mail" size={30} color={colors.primary} style={{ paddingTop: 10 }} />

                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.name}> Email </Text>
                                <Text style={styles.name1}>  {email || ''}</Text>
                            </View>
                        </View>

                        <View style={styles.boxview}>
                        <Entypo name="lock" size={24} color={colors.primary} style={{ paddingTop: 10 }} />

                        <Text style={styles.privacyy}>Privacy:</Text>
                            <Switch style={{ marginLeft: 10, marginTop: 15 }}
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
        backgroundColor: '#f57c00',
        height: 200,
        borderBottomLeftRadius:160,
        borderBottomRightRadius:160,

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
    DetailsView: {
        marginTop: 10,

        // height: 400,
        // backgroundColor: "white",
        // color: "black",
        // borderRadius: 10,
        // borderColor: "black",
        // borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
        // elevation: 3
    },
    text0:{
        paddingLeft: 4,
        fontSize: 25,
        marginBottom: 3,
        marginTop: 3,
        font:'Times New Roman',
        fontWeight: 'bold',
        textAlign:'center',

    },


    buttonContainer: {
        flexDirection: 'row',     // sets the primary axis to horizontal
        justifyContent: 'flex-end',  // aligns children to the end (right) on the primary axis
        padding: 16,//
        borderRadius: 20,
    },

    boxview:{
        flexDirection: "row", backgroundColor: "white",
        color: "black",
        borderRadius: 10,
        borderWidth: 1,
        marginTop:15,
        paddingLeft:10
    },
    name: {
        paddingLeft: 4,

        fontSize: 15,
        marginBottom: 3,
        marginTop: 2,
        fontWeight: 'bold',

    },
    // name: {
    //     paddingLeft: 4,

    //     fontSize: 10,
    //     marginBottom: 7,
    //     marginTop:7,
    //     fontWeight: 'bold',

    // },
    name1: {
        paddingLeft: 4,

        fontSize: 20,
        marginBottom: 4,
        marginTop: 1,
        fontWeight: 'bold',

    },

    number: {
        paddingLeft: 4,
        fontSize: 20,
        marginBottom: 20,
        marginTop: 10,
        fontWeight: 'bold',

    },


    email: {
        paddingLeft: 6,
        fontSize: 20,
        marginBottom: 20,
        marginTop: 10,
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
        marginTop: 10,

        paddingLeft: 4,
        fontSize: 20,
        fontWeight: 'bold',

        marginBottom: 10,
        justifyContent: 'space-between',
    },

});

