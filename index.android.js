/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
//React is used by babel to compile JSX
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

export default class todo_react extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={[btnStyles.core, btnStyles.primary, btnStyles.hairlineBorder]}
                            underlayColor="#60b044cc" activeOpacity={0.9} onPress={() => {}}>
          <Text>ADD</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[btnStyles.core, btnStyles.hairlineBorder, btnStyles.primary]}
                            underlayColor="#60b044cc" activeOpacity={0.8} onPress={() => {}}>
          <Text>COMPLETE</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[btnStyles.core, btnStyles.hairlineBorder]} underlayColor="#60b044cc"
                            activeOpacity={0.8} onPress={() => {}}>
          <Text>EDIT</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[btnStyles.core, btnStyles.hairlineBorder]} underlayColor="#60b044cc"
                            activeOpacity={0.8} onPress={() => {}}>
          <Text>DELETE</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    backgroundColor: 'black',
    flexDirection: 'row'
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: 'green',
    alignSelf: 'stretch'
  }
});
const btnStyles = StyleSheet.create({
  core: {
    borderStyle: 'solid',
    borderColor: '#d5d5d5',
    borderWidth: 1,
    backgroundColor: '#eee',
    borderRadius: 3,
    padding: 3,
    paddingLeft: 5,
    paddingRight: 5
  },
  primary: {
    backgroundColor: '#60b044',
    borderColor: '#355f27'
  },
  hairlineBorder: {
    borderWidth: StyleSheet.hairlineWidth
  }
});
AppRegistry.registerComponent('todo_react', () => todo_react);