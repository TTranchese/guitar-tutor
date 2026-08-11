import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ExerciseScreen from './src/screens/ExcerciseScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <ExerciseScreen />
    </SafeAreaProvider>
  );
}