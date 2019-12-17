import React, { Component } from 'react'
import { StyleSheet, View, Text, } from 'react-native';


export default class AnimScreen extends Component{
  static navigationOptions = {
    drawerLabel: 'Anim',
  };

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>Anim Page</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#785463',
  },
  text: {
    fontSize: 40,
    color: '#fff',
  }
});