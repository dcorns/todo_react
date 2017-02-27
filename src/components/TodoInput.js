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
    this.state = {taskTitle: '', taskDueDate: '', taskDetails: ''};
  }
  render(){
    return(
      <View>
        <View style={TASK_EDIT.coreTask}>
          <TextInput style={TASK_EDIT.inputFields} placeholder='Enter new task title here' onChangeText={(taskTitle) => this.setState({taskTitle})}/>
          <TextInput style={TASK_EDIT.inputFields} placeholder='Enter new task due date here' onChangeText={(taskDueDate) => this.setState({taskDueDate})}/>
          <TextInput style={TASK_EDIT.inputFields} placeholder='Enter new task details here' onChangeText={(taskDetails) => this.setState({taskDetails})}/>
        </View>
        <View>
          <Text style={TASK_EDIT.outputText}>{this.state.taskTitle}</Text>
          <Text style={TASK_EDIT.outputText}>{this.state.taskDueDate}</Text>
          <Text style={TASK_EDIT.outputText}>{this.state.taskDetails}</Text>
        </View>

      </View>
    )
  }
}