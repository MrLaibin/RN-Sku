import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Spec from "./src/spec-choose";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Op1en up App.tsx to start working on your22 app!</Text>
      <StatusBar style="auto" />
      <Spec/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
