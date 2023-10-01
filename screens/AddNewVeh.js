
import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { TextInput, Button } from 'react-native-paper';
import Footer from './component/Footer';

const AddNewVeh = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();



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
        <Text style={styles.title}>Add Details</Text>
        <TextInput
          style={styles.input}
          label="Vehicle Name"

        />

        <TextInput
          style={styles.input}
          label="Model Number"
        />

        <TextInput
          style={styles.input}
          label="Type : Bike/car"

        />

        {/* <TextInput
          style={styles.input}
          label="Password"

        /> */}


        <Button style={{ marginTop: 10,fontSize: 20 }} mode="contained" >
          save
        </Button>


      </View>

    </View>
     <Footer/>
     </>
  );
};

export default AddNewVeh

const styles = StyleSheet.create({
  image: {
    width: 150, // or the width of your choice
    height: 150, // or the height of your choice
    alignSelf: 'center', // This centers the image horizontally
    marginBottom: 14, // space below the image
    borderRadius: 70,

  },

  container: {
    flex: 1,
    padding: 16,


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
  }
});


