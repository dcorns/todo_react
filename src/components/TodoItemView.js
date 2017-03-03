/**
 * ToDoItemView
 * Created by dcorns on 3/2/17
 * Copyright © 2017 Dale Corns
 */
'use strict';
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {TASK_EDIT} from '../styles/global';
export default class ToDoItemView extends Component{
  //constructor used to access parent state and logic using props
  constructor(props){
    super(props);
  }
  render(){
    if(this.props.showTodoView){
      this.vw = <View>
        <View>
          <Text style={TASK_EDIT.outputText}>Title: {this.props.title}</Text>
          <Text style={TASK_EDIT.outputText}>Due Date: {this.props.dueDate}</Text>
          <Text style={TASK_EDIT.outputText}>Details: {this.props.details}</Text>
          <Text style={TASK_EDIT.outputText}>Completed: {this.props.completeDate}</Text>
        </View>
      </View>
    }
    else{
      this.vw = null;
    }
    return(
      this.vw
    )
  }
}