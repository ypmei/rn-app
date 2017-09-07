import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Chart from './components/LineChart'

export default class App extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
        <View style={{flex:1, backgroundColor: 'powderblue', paddingTop: 60}}>
          <Text>这是我的第一个APP!</Text>
        </View>
        <View style={{flex:1, backgroundColor: 'skyblue',justifyContent: 'center'}}>
          <Text>Hello world!</Text>
        </View>
        <View style={{flex:3, backgroundColor: 'powderblue'}}>
          <Chart />
        </View>
        <View style={{flex:2, backgroundColor: 'steelblue', justifyContent: 'center'}}>
          <Image source={pic} style={{width: 193, height: 110}}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'powderblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
