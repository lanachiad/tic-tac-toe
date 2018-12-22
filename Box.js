import React from 'react';
import { Alert, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      symbol: ' '
    };
  }

  _onPressButton = () => {
    this.addSymbol();
  };

  addSymbol = () => {
    if (this.state.symbol == ' ') {
      this.setState({ symbol: this.props.currentPlayer });
    }
  };

  render() {
    return (
      <View>
        <TouchableHighlight onPress={this._onPressButton} style={btnstyles.button} underlayColor="white">
          <View style={btnstyles.button}>
            <Text style={btnstyles.buttonText}>
              {this.state.symbol}
            </Text>
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
