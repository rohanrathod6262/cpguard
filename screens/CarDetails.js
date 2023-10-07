
import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { TextInput, Button } from 'react-native-paper';
import Footer from './component/Footer';
import { Picker } from '@react-native-picker/picker';

const CarDetails = () => {
  const [carname, setUsername] = useState('');
  const [carno, setEmail] = useState('');
  const [type, setType] = useState('');
  const navigation = useNavigation();

  const editcar = () => {
    navigation.navigate("editCar", { carname: "BMW", carno: "MH20EJ2027", type: "Bike" });
    // navigation.navigate("editCar", { carname: carname, carno: carno, type: type });


  };



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


          <Text style={styles.title}>Add Details</Text>


          <View style={styles.boxview}>
            <View style={styles.rowCar}>
              <Text style={styles.labelCar}>Car Name:</Text>
              <Text style={styles.titleCar}>BMW</Text>
              {/* <Text style={styles.titleCar}>{carname}</Text> */}
            </View>
          </View>

          <View style={styles.boxview}>
            <View style={styles.rowCar}>
              <Text style={styles.labelCar}>Car Number:</Text>
              <Text style={styles.titleCar}>MH20EJ2027</Text>
              {/* <Text style={styles.titleCar}>{carno}</Text> */}
            </View>
          </View>

          <View style={styles.boxview}>
            <View style={styles.rowCar}>
              <Text style={styles.labelCar}>Car Type:</Text>
              <Text style={styles.titleCar}>Bike</Text>
              {/* <Text style={styles.titleCar}>{type}</Text> */}
            </View>
          </View>


          <View style={styles.buttonInColumn}>
            <Button style={{
              marginTop: 35, backgroundColor: '#007FFF', borderRadius: 10,
              justifyContent: 'center', width: 250, height: 50, alignItems: "center",
            }} mode="contained" onPress={editcar} >
              <Text style={styles.buttonText}>Edit Car Details</Text>
            </Button>
            <Button style={{
              marginTop: 35, backgroundColor: '#007FFF', borderRadius: 10,
              justifyContent: 'center', width: 250, height: 50, alignItems: "center",
            }} mode="contained" >
              <Text style={styles.buttonText}>Generate QR Code</Text>
            </Button>
          </View>

        </View>

      </View>
      <Footer />
    </>
  );
};

export default CarDetails

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
  boxview: {
    backgroundColor: "white",
    color: "black",
    borderRadius: 10,
    borderWidth: 1,
    margin: 15,
    paddingLeft: 10,
    justifyContent: 'space-between',
  },
  textalign: {
    justifyContent: 'space-between',
    marginLeft: 30
  },

  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 0

  },

  container: {
    flex: 1,
    // padding: 16,

    backgroundColor: 'white'
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 14,
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


  buttonInColumn: {
    flexDirection: 'column',
    alignItems: 'center'
    // justifyContent:'center'
  },
  rowCar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  labelCar: {
    flex: 1,             // Take up 1/3 of the row for the label
    fontSize: 18,        // Adjust the font size as needed
    fontWeight: 'bold', // Make the label text bold
  },
  titleCar: {
    flex: 2,             // Take up 2/3 of the row for the title
    fontSize: 18,        // Adjust the font size as needed
    marginLeft: 5,      // Add some spacing between the label and title
  },
});

