
import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Alert, Image } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";
import { TextInput, Button } from 'react-native-paper';
import Footer from './component/Footer';
import { Picker } from '@react-native-picker/picker';
import QRCode from 'react-native-qrcode-svg';
import ViewShot from 'react-native-view-shot';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';




const QRcode = () => {

    const route = useRoute();
    const { carname } = route.params;
    const { carno } = route.params;
    const { type } = route.params;
    const data = `Car Name: ${carname}\nCar Number: ${carno}\nType: ${type}`;
    const viewShotRef = useRef(null);

    const handlePrintQR = async () => {
        if (viewShotRef.current) {
            try {
                // Capture the QR code view as an image
                const uri = await viewShotRef.current.capture();

                // Save the captured image to the device's media library
                const asset = await MediaLibrary.createAssetAsync(uri);
                MediaLibrary.createAlbumAsync('Download', asset, false);

                // Notify the user that the image has been saved
                alert('QR code saved to Downloads');
            } catch (error) {
            }
        }
    };
    // const handlePrintQR = async () => {
    //     if (viewShotRef.current) {
    //       try {
    //         const uri = await viewShotRef.current.capture();
            
    //         // Create a new folder (directory) to store the QR code
    //         const folderName = 'QRCodeFolder';
    //         const folderInfo = await FileSystem.getInfoAsync(folderName);
    //         if (!folderInfo.exists) {
    //           await FileSystem.makeDirectoryAsync(folderName);
    //         }
    
    //         // Generate a unique filename for the QR code
    //         const fileName = `QRCode_${Date.now()}.jpg`;
    //         const newPath = `${folderName}/${fileName}`;
    
    //         // Move the captured image to the new folder with the new name
    //         await FileSystem.moveAsync({
    //           from: uri,
    //           to: newPath,
    //         });
    
    //         // Notify the user that the image has been saved
    //         alert(`QR code saved as ${fileName} in ${folderName}`);
    //       } catch (error) {
    //         console.error('Error saving QR code:', error);
    //       }
    //     }
    //   };
    // const handlePrintQR = async () => {
    //     if (viewShotRef.current) {
    //       try {
    //         // Request file system permissions
    //         const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY_WRITE_ONLY);
    
    //         if (status === 'granted') {
    //           const uri = await viewShotRef.current.capture();
              
    //           // Create a new folder (directory) to store the QR code
    //           const folderName = 'QRCodeFolder';
    //           const folderInfo = await FileSystem.getInfoAsync(folderName);
    //           if (!folderInfo.exists) {
    //             await FileSystem.makeDirectoryAsync(folderName);
    //           }
    
    //           // Generate a unique filename for the QR code
    //           const fileName = `QRCode_${Date.now()}.jpg`;
    //           const newPath = `${folderName}/${fileName}`;
    
    //           // Move the captured image to the new folder with the new name
    //           await FileSystem.moveAsync({
    //             from: uri,
    //             to: newPath,
    //           });
    
    //           // Notify the user that the image has been saved
    //           alert(`QR code saved as ${fileName} in ${folderName}`);
    //         } else {
    //           alert('Permission to access the file system was denied.');
    //         }
    //       } catch (error) {
    //         console.error('Error saving QR code:', error);
    //       }
    //     }
    //   };
    // const handlePrintQR = async () => {
    //     if (viewShotRef.current) {
    //       try {
    //         const uri = await viewShotRef.current.capture();
    
    //         // Request file system permissions
    //         const { status } = await MediaLibrary.requestPermissionsAsync();
    
    //         if (status === 'granted') {
    //           // Create a new folder (directory) to store the QR code
    //         //   const folderName = 'QRCodeFolder';
    //         //   const folderInfo = await FileSystem.getInfoAsync(folderName);
    //         //   if (!folderInfo.exists) {
    //         //     await FileSystem.makeDirectoryAsync(folderName);
    //         //   }
    
    //           // Generate a unique filename for the QR code
    //           const fileName = `QRCode_${Date.now()}.jpg`;
    //           const newPath = `${"Download"}/${fileName}`;
    
    //           // Move the captured image to the new folder with the new name
    //           await FileSystem.moveAsync({
    //             from: uri,
    //             to: newPath,
    //           });
    
    //           // Notify the user that the image has been saved
    //           alert(`QR code saved as ${fileName} in ${folderName}`);
    //         } else {
    //           alert('Permission to access the file system was denied.');
    //         }
    //       } catch (error) {
    //         console.error('Error saving QR code:', error);
    //       }
    //     }
    //   };


    return (
        <>
            <View style={styles.container}>
                <Image
                    source={require('../assets/carbike.png')}
                    style={styles.image}
                />
                <ViewShot ref={viewShotRef} options={{ format: 'jpg', quality: 1.9 }}>
                    {/* The QR code view */}
                    <View style={styles.QRCode}>
                        <QRCode
                            value={data}
                            size={200}
                            color="black"
                            backgroundColor="white"
                        />
                    </View>
                </ViewShot>
                <Button style={{
                    marginLeft: 65, marginTop: 35, backgroundColor: '#007FFF', borderRadius: 10,
                    justifyContent: 'center', width: 200, height: 50, alignItems: "center",
                }} mode="contained" onPress={handlePrintQR}>
                    <Text style={styles.buttonText}>Print QR</Text>
                </Button>
                
            </View>
            <Footer />
        </>
    );
};

export default QRcode

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
    QRCode: {
        alignItems: 'center',
    }
});


