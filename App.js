import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import { FlatList, SafeAreaView, StyleSheet, View, Text, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Filter from './screens/Filter'
import Form from './screens/Form'


const Stack = createStackNavigator();

const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Filter" component={Filter}/>
        <Stack.Screen name="Form" component={Form}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;