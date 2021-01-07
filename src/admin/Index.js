import React from 'react';
import {StyleSheet, Text,View, ScrollView,} from 'react-native';
//import Card from '../common/Card';


export default class Index extends React.Component{

    render() {
        return (
            <ScrollView style={{flex:1}}>
            <View style={styles.container}>
               {
                    
                    <Text>AdminIndex</Text>
               }   
             </View>
             </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    padding:10,
    flexDirection:"row",
    justifyContent:"space-between",
    flexWrap:"wrap"
  },
});