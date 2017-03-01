/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
//React is used by babel to compile JSX
import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  Text
} from 'react-native';
import TaskData from './src/data/TaskData';
import NavButtons from './src/components/NavButtons';
import MainHeader from './src/components/MainHeader';
import TodoInput from './src/components/TodoInput';
import TodoList from './src/components/TodoList';
import * as globalStyles from './src/styles/global';

export default class todo_react extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: TaskData.data
    };
    this.state.title = 'test Titel';
    this.state.dataIdx = 0;
    this.state.tempTask = new Task();
    function Task(){
      this.title = 'test title';
      this.dueDate = new Date();
      this.completeDate = '';
      this.titleChange = (txt) => {this.title = txt; console.log(this.title);};
      this.dueDateChange = (dd) => {this.dueDate = dd};
      this.detailsChange = (txt) => {this.details = txt};
      this.completeDateChange = (cd) => {this.completeDate = cd};
    }
  }
  render() {
    return (
      <View style={globalStyles.COMMON_STYLES.container}>
        <MainHeader name={TaskData.name}/>
        <TodoList data={this.state.data} dataIdx = {this.state.dataIdx}/>
        <NavButtons/>
        <TodoInput data={this.state.data} dataIdx = {this.state.dataIdx} tempTask = {this.state.tempTask}/>
      </View>
    );
  }
}
AppRegistry.registerComponent('todo_react', () => todo_react);