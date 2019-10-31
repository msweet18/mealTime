import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const TextInputField = props => {

  // Init state hooks
  const [input, setInput] = useState('');


  return (
    <View>
      <Text> Input Text Here! </Text>
      <TextInput autoCapitalize='none' onChangeText={ text => setInput(text) } value={ input } style={ styles.input }></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: '#CFD8DC',
    borderRadius: 5,
    borderWidth: 3,
    height: 30,
    marginHorizontal: 20,
    paddingLeft: 10
  }
});

export default TextInputField;
