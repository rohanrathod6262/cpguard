import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, Image } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";
import { TextInput, Button } from 'react-native-paper';
import Footer from './component/Footer';
import { Picker } from '@react-native-picker/picker';

const editCar = () => {

    const route = useRoute();

    const { carname } = route.params;
    const { carno } = route.params;
    const { type } = route.params;



    return (
        <>
            <View style={styles.container}>
                <View style={styles.header}>

                    <Image
                        source={require('../assets/blackcar.jpg')}
                        style={styles.image}
                    />
                </View>

                <View style={{ marginTop: 90 }} >
                    <Text
                        style={{
                            borderColor: "black",
                            borderWidth: 0.6,
                            height: 1,
                        }} />
                    <Text style={styles.title}>Edit CarDetails</Text>
                    <View style={{ margin: 10 }}>

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
                            value={carno}
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
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>

                        <Button style={{
                            marginTop: 35, backgroundColor: '#007FFF', borderRadius: 10,
                            justifyContent: 'center', width: 200, height: 50, alignItems: "center",
                        }} mode="contained" >
                            <Text style={styles.buttonText}>Save</Text>
                        </Button>
                    </View>
                </View>

            </View>
            <Footer />
        </>
    );
};

export default editCar

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#f57c00',
        height: 100,
        borderBottomLeftRadius: 250,
        borderBottomRightRadius: 250,

    },
    image: {
        width: 170, // or the width of your choice
        height: 163, // or the height of your choice
        alignSelf: 'center', // This centers the image horizontally
        marginBottom: 14, // space below the image
        borderRadius: 100,
        marginTop: 14,


    },

    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 0

    },

    container: {
        flex: 1,
        backgroundColor: 'white'
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
        backgroundColor: 'white',
        fontSize: 16

    },
    pickerContainer: {
        borderWidth: 1, // Add a border
        borderColor: 'gray',
        borderRadius: 4, // Border radius
        overflow: 'hidden', // Hide overflow content
    },
    picker: {
        height: 50,

        fontSize: 16, // Adjust the height as needed
        paddingLeft: 8
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
    },
});
