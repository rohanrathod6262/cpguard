import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, TouchableWithoutFeedback, ImageBackground, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
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




const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Home = () => {

  const navigation = useNavigation();

  const handleButtonPress = () => {
    alert('Button Pressed!');
  };

  const handlePress = () => {
    navigation.navigate("CarDetails", { carname: "BMW", carno: "MH20EJ2027" });
  }

  useEffect(() => {
    navigation.setOptions({
      // headerLeft: () => (v
      //   <FontAwesome name="search" size={24} color={colors.gray} style={{ marginLeft: 15 }} />
      // ),
      headerStyle: { backgroundColor: '#bfceec'},      
      
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate("Profile")}
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
          {/* <Text style={styles.iconText}>Profile</Text> */}
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <>
      <View style={styles.main}>


        <Text style={styles.title1}>Welcome name 😀!</Text>

        <ScrollView style={styles.fabContainer}>
        <TouchableWithoutFeedback onPress={handlePress}>
          <View style={styles.card}>
            <View style={styles.carddetail}>


              <View style={{ paddingLeft: 16, paddingTop: 16, }}>
                <Text style={styles.title}>BMW A3</Text>
                <Text style={styles.title}>MH14 AK 2626</Text>
              </View>

              <View style={styles.carPhoto}>
                <Image
                  style={styles.backgroundImage}
                  source={require('../assets/Car.png')}
                />
              </View>
            </View>

          </View>
         </TouchableWithoutFeedback>
          {/* // */}
          <View style={styles.card}>
            <View style={styles.carddetail}>


              <View style={{ paddingLeft: 16, paddingTop: 16, }}>
                <Text style={styles.title}>BMW A3</Text>
                <Text style={styles.title}>MH14 AK 2626</Text>
              </View>

              <View style={styles.carPhoto}>
                <Image
                  style={styles.backgroundImage}
                  source={{ uri: "https://i.pinimg.com/originals/93/c1/05/93c105244c0a3de81267a89cb13386f7.png" }}
                />
              </View>
            </View>

          </View>

          {/* // */}
          <View style={styles.card}>
            <View style={styles.carddetail}>


              <View style={{ paddingLeft: 16, paddingTop: 16, }}>
                <Text style={styles.title}>BMW A3</Text>
                <Text style={styles.title}>MH14 AK 2626</Text>
              </View>

              <View style={styles.carPhoto}>
                <Image
                  style={styles.backgroundImage}
                  source={{ uri: "https://i.pinimg.com/originals/93/c1/05/93c105244c0a3de81267a89cb13386f7.png" }}
                />
              </View>
            </View>

          </View>

          {/* // */}
          <View style={styles.card}>
            <View style={styles.carddetail}>


              <View style={{ paddingLeft: 16, paddingTop: 16, }}>
                <Text style={styles.title}>BMW A3</Text>
                <Text style={styles.title}>MH14 AK 2626</Text>
              </View>

              <View style={styles.carPhoto}>
                <Image
                  style={styles.backgroundImage}
                  source={{ uri: "https://i.pinimg.com/originals/93/c1/05/93c105244c0a3de81267a89cb13386f7.png" }}
                />
              </View>
            </View>

          </View>

          {/* // */}
          <View style={styles.card}>
            <View style={styles.carddetail}>


              <View style={{ paddingLeft: 16, paddingTop: 16, }}>
                <Text style={styles.title}>BMW A3</Text>
                <Text style={styles.title}>MH14 AK 2626</Text>
              </View>

              <View style={styles.carPhoto}>
                <Image
                  style={styles.backgroundImage}
                  source={{ uri: "https://i.pinimg.com/originals/93/c1/05/93c105244c0a3de81267a89cb13386f7.png" }}
                />
              </View>
            </View>

          </View>

          {/* // */}
          <View style={styles.card}>
            <View style={styles.carddetail}>


              <View style={{ paddingLeft: 16, paddingTop: 16, }}>
                <Text style={styles.title}>BMW A3</Text>
                <Text style={styles.title}>MH14 AK 2626</Text>
              </View>

              <View style={styles.carPhoto}>
                <Image
                  style={styles.backgroundImage}
                  source={{ uri: "https://i.pinimg.com/originals/93/c1/05/93c105244c0a3de81267a89cb13386f7.png" }}
                />
              </View>
            </View>

          </View>





        </ScrollView>
        {/* FAB */}
        <TouchableOpacity
          style={styles.plusfab}
          onPress={() => navigation.navigate("AddNewVeh")}
        >
          <Entypo name="plus" size={35} color={'red'} />
        </TouchableOpacity>

      </View>

      <Footer />

    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#1f386b',
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

    height: windowHeight * 6.9 / 10,

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
    color: 'white'
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
    backgroundColor: 'white',
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
        bottom: 30,
      
    },



    shadowOpacity: .9,
    shadowRadius: 8,
    marginBottom: 20,
    marginRight: 40,
  }
});


{/* <View style={styles.card}>
              <View style={styles.carddetail}>
                <View>
                  <Text style={styles.title}>BMW A3</Text>

                  <Text style={styles.title}>MH14 AK 2626</Text>

                </View>
                <View style={styles.carPhoto}>
                  <Image
                    source={{ uri: "https://cdn3d.iconscout.com/3d/premium/thumb/motorcycle-9724850-7870794.png?f=webp" }}
                    style={styles.backgroundImage}
                  />
                </View>
              </View>
            </View> */}