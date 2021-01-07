import React from 'react';
import {StyleSheet, Text,View, Dimensions, ScrollView, TouchableOpacity} from 'react-native';

export default class User extends React.Component{

    render() {
        return (
            <ScrollView style={{flex:1}}>
            <View style={styles.container}>
               {
                    
                    <Text>User Page</Text>
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