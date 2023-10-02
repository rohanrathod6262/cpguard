import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import colors from '../colors';
import { Entypo } from '@expo/vector-icons';
import Footer from "./component/Footer";
import AddNewVeh from "./AddNewVeh";
import { ScrollView } from "react-native-gesture-handler";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const catImageUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEXk5ueutLepsLPo6uursbXJzc/p6+zj5ea2u76orrKvtbi0ubzZ3N3O0dPAxcfg4uPMz9HU19i8wcPDx8qKXtGiAAAFTElEQVR4nO2d3XqzIAyAhUD916L3f6+f1m7tVvtNINFg8x5tZ32fQAIoMcsEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQTghAJD1jWtnXJPP/54IgNzZQulSmxvTH6oYXX4WS+ivhTbqBa1r26cvCdCu6i0YXbdZ0o4A1rzV+5IcE3YE+z58T45lqo7g1Aa/JY5tgoqQF3qb382x7lNzBLcxft+O17QUYfQI4IIeklKsPSN4i6LKj/7Zm8n99RbHJpEw9gEBXNBpKIYLJqKYRwjOikf//r+J8ZsVuacbqCMNleI9TqGLGqMzhnVdBOdd6F/RlrFijiCoVMk320CBIahUxTWI0KKEcJqKbMdpdJb5QvdHq6wCI5qhKlgGMS/RBHkubWDAE+QZxB4xhCyDiDkLZxgGEVdQldzSKbTIhmZkFkSEPcVvmBn2SMuZB9od7fQDsMiDdKJjFUSCQarM5WirZ3C2TT/htYnyPcPfgrFHWz0BI74gr6J/IZiGUxAZGQLqmvQLTrtE/Go4YxhVRIpEw+sww1IIcqr5NKmUUzLF3d4/qPkYIp2T/obPuemlojFUR4t9Q2Vojhb7BmgElWHzLPH8hucfpefPNFTVgs9h1AdU/Pin96vwWbWdf+X9Absn3OdO34aMdsDnP8WgKYisTqI6CkNGqZQo1XA6Ef6AU32SJzOcBukHPF07/xNSgmHKa5BOhtezv6mA/rYJpwXNAnbRZ1XuF3BzDcO3vpA3+ny2909gbqE4hhD3LIPhLLyBNhPZvbZ3B+3tPYa18A7auSlXQayKwTPNLKDcuOB0xPYKDPFTkWsevQPRZ1J8Hji9I1KQ34r7hZhrwNwOZ97QxNx0drwn4QI0wQk1DcEsfKCWKdxVvxPSNUIp/knmAXT+nT+Ko3+0H96rcNb3m1fx7MBTJdeBJ7uFcWsc0wvgAsC4pROW0l2inbAmIBv/7GZmuhQH6API2rr8T0e6yuZJ+80A9LZeG62T3tik31XwxtwZcizKuTHkMjB1WdZde4Kmic/A5ZI3rr1ae21d08PlVHYfAaxw9G9CYRbJ+8ZdbTcMRV1XM3VdF0M32vtoTdZ0+u29s0OttJ5bz64UwinjaFMVY9vkqc3KKSxN21Xl+0L4Q3Vuv1tYl0pqnX6ms4XetFz7gdZVAgUEoJntfOUe4ZwsHd9FzqQ3Vv6xe41l0XJcqcKl6TZvlv7ClAW3BsqQW4X7ypApB8dmTgK4IX5wvqIVj33HtD2qSG4BqznxdIefL27Y4sahi0MdIdvUsDva8agGGbCtITmCY31MHD2O0uIdh/0rJDQ1VX5Zdxz3rR2QDbv6qXl9vudzqQtGm1Jv9LDXOsfvvB7VcZ8PDKD0mQ1VHPYQ9O+Yj4hR1IUD8rBnn3ho2m8oQMxbCFiKlL2ioSW5heeJqegED52CzxCtcGD3Kv8Wms9EYLyUhwaFIhSMBClevWEmiK/Iaogu4H7sg6ppQhQG8RUqivuTGOAJOg6FfgW0q0M0PQMRMEgXaeNf3SYDZ8PIMI0+wHgr/MgN7wYwpiLjCCqM6ydUDZLQiB6nDdNC8SDyig3jPPpFXGcC9O8BUBDVmgBY59E7Md/35Loe/UVEECEJwYggJjELZ4J71SaQSBeC02n4Da29CayJNA28SAhd2CQyC1Xw6pSmGSINQVuMhAZp4DClan9MgmkDDNmezqwS8sgtlXK/EPBhoaSmYVC/F7IO1jQEdHOlabpKh3+jzLQSTUiq4X2I+Ip/zU8rlaqAvkS21ElR+gqu3zbjjL+hIAiCIAiCIAiCIAiCsCf/AKrfVhSbvA+DAAAAAElFTkSuQmCC";
const Home = () => {

  const navigation = useNavigation();

  const handleButtonPress = () => {
    alert('Button Pressed!');
  };

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <FontAwesome name="search" size={24} color={colors.gray} style={{ marginLeft: 15 }} />
      ),
      headerRight: () => (
        <Image
          source={{ uri: catImageUrl }}
          style={{
            width: 40,
            height: 40,
            marginRight: 15,
          }}
        />
      ),
    });
  }, [navigation]);

  return (
    <>
    <View style={styles.main}>
    
    <View style={styles.container}>
    <Text style={styles.title1}>Welcome Rathod 😀!</Text>

      <ScrollView style={styles.fabContainer}>
        <View style={styles.card}>
          <View style={styles.toggleButton}>
            <View>
              <Text style={styles.title}>Rajesh Rathod</Text>
              <Text style={styles.title}>BMW</Text>
            </View>
            <View style={styles.carPhoto}>
              <ImageBackground
                source={{ uri: "https://www.bmwgroup.com/content/dam/grpw/websites/bmwgroup_com/brands/bmw_i/2023/230201_BMW_Group_BMW_i4eDrive40.png" }}
                style={styles.backgroundImage}
              ></ImageBackground>
            </View>
          </View>
          <Text style={styles.footerText}>Added 70xxxxxxxx</Text>
        </View>
        {/* // */}
        <View style={styles.card}>
          <View style={styles.toggleButton}>
            <View>
              <Text style={styles.title1}>Rohan Rathod</Text>
              <Text style={styles.title}>BMW</Text>
            </View>
            <View style={styles.carPhoto}>
              <ImageBackground
                source={{ uri: "https://www.bmwgroup.com/content/dam/grpw/websites/bmwgroup_com/brands/bmw_i/2023/230201_BMW_Group_BMW_i4eDrive40.png" }}
                style={styles.backgroundImage}
              ></ImageBackground>
            </View>
          </View>
          <Text style={styles.footerText}>Added 70xxxxxxxx</Text>
        </View>
        {/* // */}
        {/* // */}
        <View style={styles.card}>
          <View style={styles.toggleButton}>
            <View>
              <Text style={styles.title}>Rohan Rathod</Text>
              <Text style={styles.title}>BMW</Text>
            </View>
            <View style={styles.carPhoto}>
              <ImageBackground
                source={{ uri: "https://www.bmwgroup.com/content/dam/grpw/websites/bmwgroup_com/brands/bmw_i/2023/230201_BMW_Group_BMW_i4eDrive40.png" }}
                style={styles.backgroundImage}
              ></ImageBackground>
            </View>
          </View>
          <Text style={styles.footerText}>Added 70xxxxxxxx</Text>
        </View>
        {/* // */}

      </ScrollView>
    </View>
    <View style={styles.buttonback}>
     <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("AddNewVeh")}>
       <Text style={styles.buttonText}>Add New Vehicle</Text>
     </TouchableOpacity>
     </View>
     </View>
     <Footer/>
     
   </>
  );
};

export default Home;

const styles = StyleSheet.create({
  main:{
    flex: 1, 
    backgroundColor: '#1f386b',
  },
  container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    borderWidth: 1,   
    borderColor: 'black',
    backgroundColor: '#FFE8F3',        //
    height: windowHeight*7.3/10,
    width: windowWidth,
    
   
  },
  fabContainer: {
    
    
    flex: 1,
    margin:21,
    marginTop:10,
  },

  card: {
    backgroundColor: 'white',
    // borderRadius: 8,
    
    height: 200,
    width: 345,
    
    marginTop: 10,
    shadowColor: '#000',

    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,

    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 16,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  toggleButton: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  title1: {
    fontSize: 18,
    margin:10,
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
    marginTop: 8,
  },

  carPhoto: {
    width: 130,
    height: 130,
    marginRight: 10,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  buttonback: {
    marginLeft:30,
    marginRight:30,
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
});
