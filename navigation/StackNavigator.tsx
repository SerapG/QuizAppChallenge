// Import necessary libraries and components
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import QuizScreen from '../screens/QuizScreen';
import ResultScreen from '../screens/ResultScreen';


// Define all routes and their expected parameters using a type
export type RootStackParamList = {
  Home: undefined;
  Quiz: { category: string };
  Result: { score: number; total: number };
};


// Create a stack navigator with the route definitions
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
    // NavigationContainer wraps the entire navigation system
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Quiz Kategorileri' }}
      />
      <Stack.Screen
        name="Quiz"
        component={QuizScreen}
        options={{ title: 'Sorular' }}
      />
      <Stack.Screen
        name="Result"
        component={ResultScreen}
        options={{ title: 'Sonuçlar' }}
      />
    </Stack.Navigator>
  );
}
