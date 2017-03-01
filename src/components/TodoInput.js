/**
 * TodoInput
 * Created by dcorns on 2/24/17
 * Copyright © 2017 Dale Corns
 */
'use strict';
import React, {Component} from 'react';
import {View, TextInput, Text} from 'react-native';
import {TASK_EDIT} from '../styles/global';
export default class TodoInput extends Component{
  constructor(props){
    super(props);
    this.title = this.props.tempTask.title;
    this.dueDate = this.props.tempTask.dueDate;
    this.details = this.props.tempTask.details;
  }
  render(){
    return(
      <View>
        <View style={TASK_EDIT.coreTask}>
          <TextInput style={TASK_EDIT.inputFields} placeholder='Enter new task title here' onChangeText={(taskTitle) => this.props.tempTask.titleChange(taskTitle)}/>
          <TextInput style={TASK_EDIT.inputFields} placeholder='Enter new task due date here' onChangeText={(taskDueDate) => this.props.tempTask.dueDateChange(taskDueDate)}/>
          <TextInput style={TASK_EDIT.inputFields} placeholder='Enter new task details here' onChangeText={(taskDetails) => this.props.tempTask.detailsChange(taskDetails)}/>
        </View>
        <View>
          <Text style={TASK_EDIT.outputText}>Title: Boo Hoo!</Text>
          <Text style={TASK_EDIT.outputText}>Due Date: ''</Text>
          <Text style={TASK_EDIT.outputText}>Details: ''</Text>
        </View>

      </View>
    )
  }
}