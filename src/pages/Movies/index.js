
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Movies() {
  return (
    <View style={styles.container}>
      <Text>Tela Meus filmes</Text>
  
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