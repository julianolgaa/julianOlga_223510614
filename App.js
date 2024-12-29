import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { Card, Text, Button, Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Home Screen</Text>
      <Card style={styles.card}>
        <Card.Title title="Card Title" subtitle="Card Subtitle" />
        <Card.Content>
          <Text>Some content inside the card.</Text>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => alert('Action 1')}>Sign up</Button>
          <Button onPress={() => alert('Action 2')}>Login</Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.containerCenter}>
      <Avatar.Image size={100} source={{ uri: 'https://via.placeholder.com/100' }} />
      <Text style={styles.title}>Julian Olga</Text>
      <Text style={styles.subtitle}>julianoolgano@gmail.com</Text>
    </View>
  );
}

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'Profile') {
                iconName = 'account';
              }

              return <Icon name={iconName} color={color} size={size} />;
            },
            tabBarActiveTintColor: '#6200ea',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  containerCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#6200ea',
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
  },
  card: {
    marginVertical: 10,
  },
});
