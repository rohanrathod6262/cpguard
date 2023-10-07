import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import colors from "../../colors";
import chatUsers from "../chatUsers";

const Footer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.iconContainer}
      >
        <Entypo name="home" size={24} color={colors.primary1} />
        <Text style={styles.iconText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("chatUsers")}
        style={styles.iconContainer}
      >
        <Entypo name="chat" size={24} color={colors.primary1} />
        <Text style={styles.iconText}>Chat</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Notification")}
        style={styles.iconContainer}
      >
        <Entypo name="bell" size={24} color={colors.primary1} />
        <Text style={styles.iconText}>Notifications</Text>
      </TouchableOpacity>

     
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#f57c00",
    borderTopWidth: 1,
    borderColor: "#E0E0E0",
    paddingVertical: 12,
  },
  iconContainer: {
    alignItems: "center",
  },
  iconText: {
    marginTop: 5,
    color: colors.primary,
    fontSize: 12,
  },
});
