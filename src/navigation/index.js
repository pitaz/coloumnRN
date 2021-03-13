import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import ContactsList from '../screens/Contacts';
import ContactDetail from '../screens/ContactDetail';

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="home">
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="contacts" component={ContactsList} />
          <Stack.Screen name="contact-detail" component={ContactDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
