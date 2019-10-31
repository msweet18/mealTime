import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Button = props => {

  return (
    <View style={ styles.container }>
      <TouchableOpacity style={ styles.touchableOpacity }>
        <Text style={ styles.text }> Button </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    height: 50,
    justifyContent: 'center',
    
  },
  touchableOpacity: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    flex: 1,
    paddingHorizontal: 20
  },
  text: {
    color: '#000000',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 50,
    textAlign: 'center'
  }
});

export default Button;
