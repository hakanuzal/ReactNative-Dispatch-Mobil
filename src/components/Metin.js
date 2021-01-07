import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';

const image = { uri: "https://reactjs.org/logo-og.png" };

const styles = StyleSheet.create({
    
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
      text: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000a0"
      }
  });

const Metin =()=>{
    return (
        <View>
            <ImageBackground source={image} style={styles.image}>
      <Text style={styles.text}>Hakan</Text>
    </ImageBackground>
            
            {/* <Image
        style={styles.tinyLogo}
        source={require('../components/icon.png')}
      />

            <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }} 
      />*/}
        </View>
    )
}

export default Metin;