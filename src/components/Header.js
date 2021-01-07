import React from 'react';
import { StyleSheet, View, Image, Text,ScrollView } from 'react-native';
import Metin from './Metin'

const Header =()=>{
    return (
      
        <ScrollView>
            <Metin/>
            <Text> Teslimat Programı </Text>
        </ScrollView>
       
    )
}

export default Header;