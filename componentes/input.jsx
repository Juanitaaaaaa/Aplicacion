import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function Input() {
  const [text, onChangeText] = useState('');
  return (
    <View>
      <TextInput
        style={styles.Input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Escriba aqui"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  Input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginLeft: 1,
    fontFamily: 'Arial',
    borderRadius: 10, 
  },
});




