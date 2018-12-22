import React from 'react';
import { Alert, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _onPressButton() {
    Alert.alert('You tapped the button!');
  }

  addSymbol = () => {};

  render() {
    return (
      <View>
        <TouchableHighlight onPress={this._onPressButton} style={btnstyles.button} underlayColor="white">
          <View style={btnstyles.button}>
            <Text style={btnstyles.buttonText}>X</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const btnstyles = StyleSheet.create({
  button: {
    backgroundColor: 'yellow',
    height: 40,
    width: 40
  }
});
