import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, TouchableWithoutFeedback, ImageBackground, Dimensions } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import colors from '../colors';
import { Entypo } from '@expo/vector-icons';
import Footer from "./component/Footer";
import AddNewVeh from "./AddNewVeh";
import { ScrollView } from "react-native-gesture-handler";
import { MaterialIcons } from '@expo/vector-icons';
import Profile from "./Profile";
import { BottomNavigation } from "react-native-paper";
import CarDetails from "./CarDetails";
import { addDoc, collection, doc , getDocs , setDoc , deleteDoc,query, where,updateDoc } from "firebase/firestore";
import { database } from '../config/firebase';





const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Home = () => {

  const navigation = useNavigation();
  const route = useRoute();
  const { name } = route.params || {};
  const { carArray } = route.params || {};
  const handleButtonPress = () => {
    alert('Button Pressed!');
  };

  const handlePress = () => {
    navigation.navigate("CarDetails", { carname: "BMW", carno: "MH20EJ2027" });
  }

  const gotoprofile = async() => {
    let phone_no="";
    let email="";
    let privacy=null;
    const userSnapshot = await getDocs(collection(database, 'user'));
    userSnapshot.forEach((doc) => {
      if (doc.exists()) {
        const userDoc = doc.data();
        if (userDoc.name === name) {
          phone_no=userDoc.phone_no;
          email=userDoc.email;
          privacy=userDoc.privacy;
        }
      }
    });
    navigation.navigate("Profile",{name , phone_no , email , privacy});
  }
  useEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: '#f57c00' },

      headerRight: () => (
        <TouchableOpacity
          onPress={gotoprofile}
          style={{
            marginRight: 10,
            shadowColor: 'black',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: .9,
            shadowRadius: 5,
          }}
        >
          <Entypo name="user" size={27} style={{}} color={colors.primary} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <>
      <View style={styles.main}>


        <Text style={styles.title1}>Welcome {name || 'Guest'} 😀!</Text>

        <ScrollView style={styles.fabContainer}>
          <>
            {carArray ?(
            carArray.length === 0 ? (
              <Text style={styles.noCarMessage}>Please add a car to your list.</Text>
            ) : Array.isArray(carArray) && carArray.map((car, index) => (
              <TouchableWithoutFeedback onPress={handlePress}>
                <View key={index} style={styles.card}>
                  <View style={styles.carddetail}>
                    <View style={{ paddingLeft: 16, paddingTop: 16 }}>
                      <Text style={styles.title}>{car.carName}</Text>
                      <Text style={styles.title}>{car.carNo}</Text>
                    </View>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            ))): (
              <Text style={styles.noCarMessage}>Please add a car to your list</Text>
            )}
          </>
        </ScrollView>
        {/* FAB */}
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <TouchableOpacity
            style={styles.plusfab}
            onPress={() => navigation.navigate("AddNewVeh")}
          >
            <Entypo name="plus" size={35} color={'white'} />
          </TouchableOpacity>
        </View>
      </View>

      <Footer />

    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  // container: {
  //   alignItems: 'flex-start',
  //   justifyContent: 'flex-start',
  //   flexDirection: 'column',
  //   borderWidth: 1,

  //   backgroundColor: '#FFE8F3',        //
  //   height: windowHeight * 7.3 / 10,
  //   width: windowWidth,
  // },
  fabContainer: {

    height: windowHeight * 6.5 / 10,

    margin: 5,


  },

  card: {
    backgroundColor: 'white',
    // borderRadius: 8,

    height: 115,
    width: windowWidth,

    margin: 5,
    shadowColor: '#000',

    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,

    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,

    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  carddetail: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  carPhoto: {
    width: 120,
    height: 100,
    marginRight: 20,
    marginTop: 3,

  },

  backgroundImage: {
    // flex: 1,
    width: '100%',
    height: '100%',
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  title1: {
    fontSize: 18,
    margin: 10,
    fontWeight: 'bold',
    color: 'black'
  },
  footerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
  },



  buttonback: {
    marginLeft: 30,
    marginRight: 30,
    justifyContent: 'center',
    alignItems: "center",

  },

  button: {
    marginTop: 15,

    backgroundColor: '#007FFF',
    borderRadius: 10,

    justifyContent: 'center',
    width: 200,
    height: 50,
    alignItems: "center",

  },


  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',


  },
  plusfab: {
    backgroundColor: '#f57c00',
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'white',


    shadowOffset: {
      width: 0,
      height: 2,

      position: 'absolute',


      right: 30,
      // bottom: 30,

    },



    shadowOpacity: .9,
    shadowRadius: 8,
    marginBottom: 20,
    marginRight: 40,
  },
  noCarMessage: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
    color: 'red', // Customize the text color
    fontWeight: 'bold', // Customize the text weight
  },
});
