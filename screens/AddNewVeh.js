
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Alert, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const AddNewVeh = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  

  return (
    <View style={styles.container}>
    <Image
      source={require('../assets/carbike.png')}
      style={styles.image}
    />

    <Text style={styles.title}>Add Details</Text> 

   

    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Vehicle Name"
       
      />

      <TextInput
        style={styles.input}
        placeholder="Model Number"
      />

      <TextInput
        style={styles.input}
        placeholder="Type : Bike/car"
       
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
   
      />

      <Button title="Save"  />
    </View>
  </View>
  );
};

export default AddNewVeh

const styles = StyleSheet.create({
    image: {
        width: 150, // or the width of your choice
        height: 150, // or the height of your choice
        alignSelf: 'center', // This centers the image horizontally
        marginBottom: 24, // space below the image
        borderRadius:70,

      },
      
  container: {
    flex: 1,
    padding: 16,
    
    
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
  marginBottom: 12,
  }
});


