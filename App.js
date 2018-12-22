import React from 'react';
import { Alert, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Box from './Box';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _onPressButton() {
    Alert.alert('You tapped the button!');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.row}>
            <Box />
            <Box />
            <Box />
          </View>
          <View style={styles.row}>
            <Box />
            <Box />
            <Box />
          </View>
          <View style={styles.row}>
            <Box />
            <Box />
            <Box />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'lightblue',
    flex: 1,
    justifyContent: 'center'
  },
  wrapper: {
    height: 300,
    width: 300
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
