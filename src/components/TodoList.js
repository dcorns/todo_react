/**
 * TodoList
 * Created by dcorns on 2/22/17
 * Copyright © 2017 Dale Corns
 */
'use strict';
import React, {PropTypes, Component} from 'react';
import {ListView, StyleSheet, View} from 'react-native';
import * as globalStyles from '../styles/global';
export default class TodoList extends Component{
  constructor(props){
    super(props);
    this.ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1.title !== row2.title
    });
    this.state = {
      dataSource: this.ds.cloneWithRows(props.todos)
    };
  }
  renderRow(rowData, ...rest){
    const index = parseInt(rest[1], 10);
    return (
      <TodoItem
        style={styles.todoItem}
        index={index}
        {...rowData}
        />
    );
  }
  render(){
    return(
      <View style={globalStyles.COMMON_STYLES.pageContainer}>
        <ListView
        enableEmptySections
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        style={this.props.listStyles}
        />
      </View>
    );
  }
}
TodoList.propTypes={
  todos: PropTypes.arrayOf(PropTypes.object),
  listStyles: View.propTypes.style
};
TodoList.defaultProps = {
  todo: [
    {
      title: 'Learn React Native',
      status: 'pending',
      dueDate: new Date().toDateString(),
      startDate: new Date().toDateString(),
      completeDate: ''
    },
    {
      title: 'Learn Angular NativeScript',
      status: 'pending',
      dueDate: new Date().toDateString(),
      startDate: new Date().toDateString(),
      completeDate: ''
    }
  ]
};
const styles = StyleSheet.create({
  todoItem: {
    marginBottom: 20
  }
});