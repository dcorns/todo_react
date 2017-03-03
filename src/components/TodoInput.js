/**
 * TodoInput
 * Created by dcorns on 2/24/17
 * Copyright © 2017 Dale Corns
 * Component for adding, editing and viewing tasks
 */
'use strict';
import React, {Component} from 'react';
import {View, TextInput, Text} from 'react-native';
import {TASK_EDIT} from '../styles/global';
export default class TodoInput extends Component{
  //constructor used to access parent state and logic using props
  constructor(props){
    super(props);
  }
  render(){
    if(this.props.showTodoInput){
      this.vw = <View>
        <View style={TASK_EDIT.coreTask}>
          <TextInput style={TASK_EDIT.inputFields} placeholder={this.props.title} onChangeText={(taskTitle) => this.props.onTitleChange(taskTitle)}/>
          <TextInput style={TASK_EDIT.inputFields} placeholder={this.props.dueDate} onChangeText={(taskDueDate) => this.props.onDueDateChange(taskDueDate)}/>
          <TextInput style={TASK_EDIT.inputFields} placeholder={this.props.details} onChangeText={(taskDetails) => this.props.onDetailsChange(taskDetails)}/>
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