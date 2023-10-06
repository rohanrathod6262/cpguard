
import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, Image } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";
import { TextInput, Button } from 'react-native-paper';
import Footer from './component/Footer';
import { Picker } from '@react-native-picker/picker';

const editCar = () => {

    const route = useRoute();

    const [carname, setCarname] = route.params.carname;
    const [carno, setCarno] = route.params.carno;
    const [type, setType] = route.params.type;


    return (
        <>
            <View style={styles.container}>
                                    <Image
                        source={require('../assets/carbike.png')}
                        style={styles.image}
                    />
                <View style={styles.container}>
                    <Text
                        style={{
                            borderColor: "black",
                            borderWidth: 0.6,
                            height: 1,
                        }} />
                    <Text style={styles.title}>Edit CarDetails
                    </Text>
                                            <TextInput
                            style={styles.input}
                            label="Vehicle Name"
                            autoCapitalize="none"
                            textContentType="text"
                            value={carname}
                            onChangeText={(text) => setCarname(text)}
                        />
                        <TextInput
                            style={styles.input}
                            label="Model Number"
                            textContentType="text"
                            value={type}
                            onChangeText={(text) => setCarno(text)}
                        />
                        <View style={styles.pickerContainer}>
                            <Picker
                                style={styles.picker}
                                selectedValue={type}
                                onValueChange={(itemValue, itemIndex) => setType(itemValue)}
                            >
                                <Picker.Item label="Bike" value="Bike" />
                                <Picker.Item label="Car" value="Car" />
                                <Picker.Item label="Other" value="Other" />
                                                            </Picker>
                        </View>
                                            <Button style={{
                            marginLeft: 65, marginTop: 35, backgroundColor: '#007FFF', borderRadius: 10,
                            justifyContent: 'center', width: 200, height: 50, alignItems: "center",
                        }} mode="contained" >
                            <Text style={styles.buttonText}>Edit</Text>
                        </Button>
                    
                </View>

            </View>
            <Footer />
        </>
    );
};

export default editCar

const styles = StyleSheet.create({
        image: {
        width: 150, // or the width of your choice
        height: 150, // or the height of your choice
        alignSelf: 'center', // This centers the image horizontally
        marginBottom: 14, // space below the image
        borderRadius: 70,


    },

    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 0

    },

    container: {
        flex: 1,
        padding: 16,

        backgroundColor: '#FFE8F3'
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 24,
        marginTop: 15,
        fontWeight: 'bold',
    },
    input: {

        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
            },
    pickerContainer: {
        borderWidth: 2, // Add a border
        borderColor: 'gray',
        borderRadius: 4, // Border radius
        overflow: 'hidden', // Hide overflow content
    },
    picker: {
        height: 50, // Adjust the height as needed
            },
    label: {
        fontSize: 16,
        marginBottom: 8,
    },
});


