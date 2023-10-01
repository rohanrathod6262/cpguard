import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import React,{ useState } from 'react'
import { useNavigation } from "@react-navigation/native";
import Profile from './Profile';
import Footer from './component/Footer';

const EditProfile = () => {
    const navigation = useNavigation();

   
    
    const profile = {
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      bio: 'Software engineer and cat lover',
      avatar: 'https://example.com/jane-doe-avatar.png',
    }
    const [name, setName] = useState(profile.name);
    const [email, setEmail] = useState(profile.email);
    const [bio, setBio] = useState(profile.bio);
    const [avatar, setAvatar] = useState(profile.avatar);
  
    const handleSubmit = () => {
  
    }
  
    return (
      <>

      <View style={styles.container}>
      <ImageBackground source={require('../assets/backImage.jpeg')} resizeMode="cover" style={styles.image1}>
        <View style={styles.avatarContainer}>

          <Image
            style={styles.image}
            source={require('../assets/profile.webp')}/>

                  
          
          {/* Open Image picker
          
          <TouchableOpacity style={styles.changeAvatarButton} onPress={() => {}}>
            <Text style={styles.changeAvatarButtonText}>Change Avatar</Text>
          </TouchableOpacity> 
          
          */}
          
        </View>
       </ImageBackground>
        
        <View style={styles.form}>
        <Text
                    style={{
                        borderColor: "black",
                        borderWidth: 0.6,
                        height: 1,


                    }} />

          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Name"
            value={name}
            onChangeText={setName}
          />
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            value={email}
            onChangeText={setEmail}
          />
          <Text style={styles.label}>Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Number"
            // value={bio}
            // onChangeText={setBio}
          />
          <Text style={styles.label}> Privacy on/off</Text>
          <TextInput
            style={styles.input}
            placeholder="on/off"
            // value={bio}
            // onChangeText={setBio}
          />
          <TouchableOpacity style={styles.button} onPress={() => handleSubmit({name, email, bio, avatar})}>
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>
        </View>
  
      </View>
<Footer/>
        </>
      );
    };
    

export default EditProfile

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginTop: 30,
      
    },
    image1: {
      width: 400,
      height: 105,
  },
    form: {
      width: '80%',
      marginTop:70,
    },
    label: {
      marginTop: 20,
      marginBottom:3,
      fontSize: 17,
    },
    input: {
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      padding: 10,
      fontSize: 18,
    },
    button: {
      marginTop: 20,
      marginLeft:55,
      backgroundColor: '#007FFF',
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 20,
       // sets the primary axis to horizontal
      justifyContent: 'center',
      
      width: 200,
      height: 50,
      alignItems: "center",
      

      
    
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      textAlign:'center',
      fontWeight: "bold",
    },
    avatarContainer: {
      marginTop: 20,
      alignItems: 'center',
    },
   
    changeAvatarButton: {
      marginTop: 10,
    },
    changeAvatarButtonText: {
      color: '#1E90FF',
      fontSize: 18,
    },
  });
  




 
 

