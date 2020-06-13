import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Todo from './src/components/todo/Todo'

export default function App() {
  return (
    <Todo />
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
