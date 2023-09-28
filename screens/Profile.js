import React, { useEffect } from "react";
import { View, TouchableOpacity, Button, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Footer from "./component/Footer";


const Profile = () => {
    const navigation = useNavigation();

    const handleYesPress = () => {
        console.log('Yes button pressed!');
        // Handle your logic for "Yes" here
    };

    const handleNoPress = () => {
        console.log('No button pressed!');
        // Handle your logic for "No" here
    };

    return (
        <>
            <View >



                <View style={styles.container}>
                    <Image source={require('../assets/profile.png')} style={styles.image} />
                </View>
                <Text
                    style={{
                        borderColor: "gray",
                        borderWidth: 0.6,
                        height: 1,

                    }} />

                <Text style={styles.name}>Name: Rohan </Text>
                <Text style={styles.number}>Numbber: 7887308177</Text>
                <Text style={styles.email}>Email: rohan6262@gmail.com</Text>
                <Text style={styles.number}>Numbber:  7887308177</Text>
                {/* <Text style={styles.bio}>{user.bio}</Text>
            Add more user details if needed */}
            <View style={{ flexDirection: 'row'}}>
                <Text style={styles.privacyy}>Privacy:</Text>
                <View style={{ marginLeft:10,  flexDirection: 'row'}}>
                    <Button title="On" onPress={handleYesPress} />
                    <Button title="Off" onPress={handleNoPress} />
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
        justifyContent: 'center',
        padding: 20
    },

    image: {
        width: 100,
        height: 100,
        borderRadius: 40,
        marginBottom: 10,
        marginTop: 50,

    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20,

    },
    number: {
        fontSize: 20,
        marginBottom: 20,
        fontWeight: 'bold',
        
    },

    email: {
        fontSize: 20,
        marginBottom: 20,
        fontWeight: 'bold',


    },

    privacyy: {
        fontSize: 20,
        fontWeight: 'bold',

        marginBottom: 10,
        justifyContent: 'space-between',
    },
   
});