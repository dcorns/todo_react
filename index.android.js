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
import * as globalStyles from './src/styles/global';
export default class todo_react extends Component {
  render() {
    return (
      <View style={globalStyles.COMMON_STYLES.container}>
        <View style={globalStyles.COMMON_STYLES.container}>
          <TouchableHighlight style={[globalStyles.BUTTON_STYLES.core, globalStyles.BUTTON_STYLES.primary, globalStyles.BUTTON_STYLES.hairlineBorder]}
                              underlayColor="#60b044cc" activeOpacity={0.9} onPress={() => {}}>
            <Text>ADD</Text>
          </TouchableHighlight>
          <TouchableHighlight style={[globalStyles.BUTTON_STYLES.core, globalStyles.BUTTON_STYLES.hairlineBorder, globalStyles.BUTTON_STYLES.primary]}
                              underlayColor="#60b044cc" activeOpacity={0.8} onPress={() => {}}>
            <Text>COMPLETE</Text>
          </TouchableHighlight>
          <TouchableHighlight style={[globalStyles.BUTTON_STYLES.core, globalStyles.BUTTON_STYLES.hairlineBorder]} underlayColor="#60b044cc"
                              activeOpacity={0.8} onPress={() => {}}>
            <Text>EDIT</Text>
          </TouchableHighlight>
          <TouchableHighlight style={[globalStyles.BUTTON_STYLES.core, globalStyles.BUTTON_STYLES.hairlineBorder]} underlayColor="#60b044cc"
                              activeOpacity={0.8} onPress={() => {}}>
            <Text>DELETE</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
AppRegistry.registerComponent('todo_react', () => todo_react);