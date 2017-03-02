/**
 * index.android.js
 * android specific code
 */
//import React is used by babel to compile JSX
import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  Text,
  ListView
} from 'react-native';
import TaskData from './src/data/TaskData';
import MainButtons from './src/components/MainButtons';
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
      title: TaskData.data[0].title,
      dueDate: TaskData.data[0].dueDate,
      details: TaskData.data[0].details,
      completeDate: TaskData.data[0].completeDate,
      dataIdx: TaskData.dataIdx,
    };
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
  //TodoList callbacks changing state
  handleTaskClick = (rowId) => {
    this.setState({dataIdx: rowId});
    this.setState({title: this.state.data[rowId].title});
    this.setState({dueDate: this.state.data[rowId].dueDate});
    this.setState({details: this.state.data[rowId].details});
    this.setState({completeDate: this.state.data[rowId].completeDate});
  };
  //MainButtons callbacks changing state
  handleBtnCompletePress = () => {
    this.setState({completeDate: new Date().toLocaleDateString()});
    this.state.data[this.state.dataIdx].completeDate = new Date().toLocaleDateString();
  };
  handleBtnEditPress = () => {

  };
  handleBtnDeletePress = () => {
    TaskData.data.splice(this.state.dataIdx, 1);
    this.setState({data: TaskData.data});
  };
  handleBtnAddPress = () => {

  };
  //The react native view and logic binding
  render() {
    return (
      <View style={globalStyles.COMMON_STYLES.container}>
        <MainHeader name={TaskData.name}/>
        <TodoList data={this.state.data}
                  dataIdx = {this.state.dataIdx}
                  onTaskClick = {(rowId) => this.handleTaskClick(rowId)}
        />
        <MainButtons onBtnCompletePress = {() => this.handleBtnCompletePress()}
                     onBtnEditPress = {() => this.handleBtnEditPress()}
                     onBtnDeletePress = {() => this.handleBtnDeletePress()}
                     onBtnAddPress = {() => this.handleBtnAddPress()}
        />
        <TodoInput title = {this.state.title}
                   dueDate = {this.state.dueDate}
                   details = {this.state.details}
                   completeDate = {this.state.completeDate}
                   onTitleChange = {(txt) => this.handleTitleChange(txt)}
                   onDueDateChange = {(dd) => this.handleDueDateChange(dd)}
                   onDetailsChange = {(txt) => this.handleDetailsChange(txt)}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('todo_react', () => todo_react);