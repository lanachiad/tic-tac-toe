import React from 'react';
import { Alert, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Box from './Box';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: 0
    };
  }

  playersTurn = () => {
    let currentPlayer = this.state.player;

    if ((currentPlayer = 0)) {
      this.setState({ player: 1 });
    } else {
      this.setState({ player: 0 });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.row}>
            <Box onPress={this.playersTurn} currentPlayer={this.state.player} />
            <Box onPress={this.playersTurn} currentPlayer={this.state.player} />
            <Box onPress={this.playersTurn} currentPlayer={this.state.player} />
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
