/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
//React is used by babel to compile JSX
import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import NavButtons from './src/components/NavButtons';
import MainHeader from './src/components/MainHeader';
import TodoInput from './src/components/TodoInput';
import TodoList from './src/components/TodoList';
import * as globalStyles from './src/styles/global';

export default class todo_react extends Component {
  render() {
    return (
      <View style={globalStyles.COMMON_STYLES.container}>
        <MainHeader name="Dale"/>
        <TodoList/>
        <NavButtons/>
        <TodoInput/>
      </View>
    );
  }
}
AppRegistry.registerComponent('todo_react', () => todo_react);