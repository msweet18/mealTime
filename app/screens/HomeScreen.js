import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Button from '../components/Button';
import TextInput from '../components/TextInput';

/**
 * The application Home Screen.
 * @param {Object} props - The properties available to the component
 */
const HomeScreen = props => {
  return (
    <View>
      <Text>
        Welcome to Meal Time.
      </Text>
      <Button></Button>
	  <TextInput></TextInput>
    </View>
  );
};

export default HomeScreen;