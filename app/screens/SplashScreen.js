import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

import mealTimeLogo from '../assets/images/mealTimeLogo.png';

const SplashScreen = props => {
	return (
	  <View style={ styles.container }>
	    <Image resizeMode="contain" style={ styles.image } source={ mealTimeLogo }></Image>
	    <Text style={ styles.text } >MEALTIME</Text>
	  </View>
	);
};

const styles = StyleSheet.create({
  container: {
  	alignItems: 'center',
	alignSelf: 'center',
	backgroundColor: '#FFFFFF',
	display: 'flex',
	flex: 1,
	justifyContent: 'center',
	width: '100%'
  },
  image: {
  	alignItems: 'center',
	justifyContent: 'center',
	marginTop: -100,
	width: '60%'
  },
  text: {
  	fontSize: 38,
  	fontWeight: '900',
  	marginTop: -100
  }
});

export default SplashScreen;