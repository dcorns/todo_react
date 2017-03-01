/**
 * index.android.js
 * android specific code
 */
//import React is used by babel to compile JSX
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
//Application's root component
export default class todo_react extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: TaskData.data,
    };
    this.state.title = 'state Title';
    this.state.dueDate = '03-12-2017';
    this.state.details = 'state details';
    this.state.dataIdx = 0;
  }
//TodoInput callbacks changing state
  handleTitleChange = (txt) => {
    this.setState({title: txt});
  };
  handleDueDateChange = (dd) => {
    this.setState({dueDate: dd});
  };
  handleDetailsChange = (txt) => {
    this.setState({details: txt});
  };
  //The react native view and logic binding
  render() {
    return (
      <View style={globalStyles.COMMON_STYLES.container}>
        <MainHeader name={TaskData.name}/>
        <TodoList data={this.state.data} dataIdx = {this.state.dataIdx}/>
        <NavButtons/>
        <TodoInput title = {this.state.title}
                   dueDate = {this.state.dueDate}
                   details = {this.state.details}
                   onTitleChange = {(txt) => this.handleTitleChange(txt)}
                   onDueDateChange = {(dd) => this.handleDueDateChange(dd)}
                   onDetailsChange = {(txt) => this.handleDetailsChange(txt)}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('todo_react', () => todo_react);