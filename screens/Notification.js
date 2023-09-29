import React, {useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';


Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });

function NotificationItem({ notification }) {
  const navigation = useNavigation();
  const scaleValue = React.useRef(new Animated.Value(1)).current;

  const handleNotificationPress = () => {
    // Navigate to the notification details screen or perform your desired action.
    navigation.navigate('Chat', { notification });
  };

  const handlePressIn = () => {
    // Apply a small scale animation when pressed
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    // Reset the scale animation when released
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableOpacity
      onPress={handleNotificationPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={0.9}
    >
      <Animated.View
        style={[
          styles.notification,
          {
            transform: [{ scale: scaleValue }],
          },
        ]}
      >
        {/* Icon */}
        <View style={styles.iconContainer}>
          {/* Add your icon component here */}
          {/* Example: <Image source={require('./notification-icon.png')} style={styles.icon} /> */}
        </View>

        {/* Notification Text */}
        <View style={styles.notificationText}>
          <Text style={styles.headline}>{notification.headline}</Text>
          <Text style={styles.normalText}>{notification.text}</Text>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
}

function NotificationScreen({ route }) {
  const notifications = [
    {
      id: 1,
      headline: 'New Notification 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      headline: 'New Notification 2',
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    // Add more notifications as needed
  ];

  return (
    <View style={styles.container}>
      {notifications.map(notification => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  notification: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginBottom: 16,
    borderRadius: 12,
    flexDirection: 'row', // Align icon and text horizontally
    alignItems: 'center',
    elevation: 2, // Add shadow
  },
  iconContainer: {
    marginRight: 12,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ff6b6b', // Custom icon background color
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationText: {
    flex: 1, // Allow text to take remaining space
    fontSize: 16,
    color: '#333',
  },
  headline: {
    fontWeight: 'bold',
    fontSize: 18, // You can adjust the size
    marginBottom: 4, // Add some spacing between headline and normal text
  },
  normalText: {
    fontSize: 16,
    color: '#333',
  },
});

export default NotificationScreen;
