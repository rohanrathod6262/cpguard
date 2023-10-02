import React, { useEffect } from "react";
import { View, TouchableOpacity, Button, Text, Image, StyleSheet, backgroundColor, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Footer from "./component/Footer";
import EditProfile from "./EditProfile";
import { Switch } from '@rneui/themed';
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
    const navigation = useNavigation();

    //  const [checked, setChecked] = useState(false);

    //  const toggleSwitch = () => {
    //    setChecked(!checked);
    //  };


    // const handleNoPress = () => {
    //     console.log('No button pressed!');
    //     // Handle your logic for "No" here
    // };

    return (
        <>
        <View style={{ flex: 1,backgroundColor: '#FFE8F3' }}>

           

                <ImageBackground source={require('../assets/backImage.jpeg')} resizeMode="cover" style={styles.image}>

                    <View style={{ flexDirection: 'row', marginTop: 20, marginRight: 10, justifyContent: 'flex-end', }}>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("EditProfile")}>
                            <Text style={styles.buttonText}>Edit Profile</Text>
                        </TouchableOpacity>
                    </View>



                    <View style={styles.container}>
                        <Image source={require('../assets/profile.webp')} style={styles.image1} />
                    </View>
                </ImageBackground>

                <View style={styles.form}>
                    <Text
                        style={{
                            borderColor: "gray",
                            borderWidth: 0.9,
                            height: 1,

                        }} />

                    <View style={styles.RectangleShapeView}>
                        <Text style={styles.name}>Name: Rohan </Text>

                        <Text style={styles.number}>Number: 7887308177</Text>
                        <Text style={styles.email}>Email: rohan6262@gmail.com</Text>
                        <Text style={styles.number}>password:  ****</Text>


                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.privacyy}>Privacy:</Text>
                            <Switch style={{marginLeft: 10, marginTop:7}}
                                // value={checked}
                                // onValueChange={(value) => setChecked(value)}
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


    container: {
        flex: 1,

        alignItems: 'center',

        padding: 20
    },

    buttonContainer: {
        flexDirection: 'row',     // sets the primary axis to horizontal
        justifyContent: 'flex-end',  // aligns children to the end (right) on the primary axis
        padding: 16,//
        borderRadius: 20,
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
    form: {
        width: '80%',
        marginTop: 80,
        marginLeft: 40,
       // justifyContent: 'flex-start',
    },

    image: {
        width: 400,
        height: 168,
    },

    RectangleShapeView: {
        marginTop: 10,
        width: "100%",
        height: 250,
        backgroundColor: "white",
        color: "black",
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 1,
        elevation: 3
    },
    name: {
        paddingLeft: 10,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 2,

    },
    image1: {
        width: 100,
        height: 100,

        borderRadius: 40,
        marginBottom: 10,
        marginTop: 30,

    },

    number: {
        paddingLeft: 10,
        fontSize: 20,
        marginBottom: 20,
        fontWeight: 'bold',

    },


    email: {
        paddingLeft: 10,
        fontSize: 20,
        marginBottom: 20,
        fontWeight: 'bold',


    },

    privacyy: {
        paddingLeft: 10,
        fontSize: 20,
        fontWeight: 'bold',

        marginBottom: 10,
        justifyContent: 'space-between',
    },

});

 {/* <View style={{ marginLeft: 10, flexDirection: 'row' }}>
                                <Button title="On" onPress={handleYesPress} />
                                <Button title="Off" onPress={handleNoPress} />
                            </View> */}