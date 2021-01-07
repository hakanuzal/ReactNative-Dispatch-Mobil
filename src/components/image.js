import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const DisplayAnImage = () => {
  return (
       <View style={styles.container}>
        <text>HAKAN UZAL</text>
      <Image
        style={styles.tinyLogo}
        source={require('../components/icon.png')}
      />
    </View>
  );
}

export default DisplayAnImage;