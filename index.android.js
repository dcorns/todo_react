/**
 * index.android.js
 * android specific code
 */
//import React is used by babel to compile JSX
import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  AsyncStorage,
} from 'react-native';
import TaskData from './src/data/TaskData';
import MainButtons from './src/components/MainButtons';
import MainHeader from './src/components/MainHeader';
import TodoInput from './src/components/TodoInput';
import TodoList from './src/components/TodoList';
import TodoItemView from './src/components/TodoItemView';
import EditButtons from './src/components/EditButtons';
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
      showTodoInput: false,
      showTodoView: true,
      saveIsEdit: false,
    };
    //if mode === edit , place in toggle edit/add view, otherwise turn off edit view and turn on task view.
    this._setTaskView = (mode) => {
      if (mode === 'edit') {
        this.state.showTodoInput ? this.setState({showTodoInput: false}) : this.setState({showTodoInput: true});
        !this.state.showTodoView ? this.setState({showTodoView: true}) : this.setState({showTodoView: false});
      }
      else {
        this.setState({showTodoInput: false});
        this.setState({showTodoView: true});
      }
    };
    //Set by index, if index is not valid display the first data object, but if the data set is empty display the add/edit task view
    this._setTaskByIndex = (idx) => {
      if ((TaskData.data.length - 1) >= 0) {
        if(idx < 0 || idx >= TaskData.data.length) idx = 0;
        TaskData.dataIdx = idx;
        this.setState({dataIdx: TaskData.dataIdx});
        this.setState({title: TaskData.data[idx].title});
        this.setState({dueDate: TaskData.data[idx].dueDate});
        this.setState({details: TaskData.data[idx].details});
        this.setState({completeDate: TaskData.data[idx].completeDate});
        this.setState({data: TaskData.data});
      }
      else{
        this._setTaskToBlank();
        this.setState({showTodoInput: true});
        this.setState({showTodoView: false});
      }
    };
    this._setTaskToBlank = () => {
      this.setState({dataIdx: 0});
      this.setState({title: ''});
      this.setState({dueDate: ''});
      this.setState({details: ''});
      this.setState({completeDate: ''});
    };
    this._addDefaultTaskDataRecord = () => {
      TaskData.data.push(
        {
          title: 'Adding a New Task',
          dueDate: 'Due Date (mm-dd-yyyy)',
          details: 'details',
          completeDate: '',
        }
      );
      this._setTaskByIndex(TaskData.data.length - 1);
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
    this._setTaskByIndex(rowId);
  };
  //MainButtons callbacks changing state
  handleBtnCompletePress = () => {
    //Toggle completion to '' or current date
    TaskData.data[this.state.dataIdx].completeDate = TaskData.data[this.state.dataIdx].completeDate ? '' : new Date().toLocaleDateString();
    this.setState({completeDate: TaskData.data[this.state.dataIdx].completeDate});
  };
  handleBtnEditPress = () => {
    this.setState({saveIsEdit: true});
    this._setTaskView('edit');
  };
  handleBtnDeletePress = () => {
    TaskData.data.splice(this.state.dataIdx, 1);
    this._setTaskByIndex(this.state.dataIdx - 1);
  };
  handleBtnAddPress = () => {
    this.setState({saveIsEdit: false});
    this._addDefaultTaskDataRecord();
    this._setTaskView('edit');
  };
  //Edit button handlers
  handleBtnSavePress = () => {
    let t = new Date();
    let title = this.state.title || `New Task ${t.getTime()}`;
    if (title === 'Adding a New Task') title = `New Task ${t.getTime()}`;
      TaskData.data[this.state.dataIdx] = {
        title: title,
        dueDate: this.state.dueDate,
        details: this.state.details,
        completeDate: this.state.completeDate,
      };
      this.setState({data: TaskData.data});
      this._setTaskView('');
  };
  handleBtnCancelPress = () => {
    if(!this.state.saveIsEdit){
      TaskData.data.splice(this.state.dataIdx, 1);
      this._setTaskByIndex(this.state.dataIdx - 1);
    }
    else{
      this._setTaskByIndex(this.state.dataIdx);
    }
    this._setTaskView('');
  };
//The react native view and logic binding
  render() {
    return (
      <View style={globalStyles.COMMON_STYLES.container}>
        <MainHeader name={TaskData.name}/>
        <TodoList data={this.state.data}
                  dataIdx={this.state.dataIdx}
                  onTaskClick={(rowId) => this.handleTaskClick(rowId)}
        />
        <MainButtons onBtnCompletePress={() => this.handleBtnCompletePress()}
                     onBtnEditPress={() => this.handleBtnEditPress()}
                     onBtnDeletePress={() => this.handleBtnDeletePress()}
                     onBtnAddPress={() => this.handleBtnAddPress()}
        />
        <TodoItemView showTodoView={this.state.showTodoView}
                      title={this.state.title}
                      dueDate={this.state.dueDate}
                      details={this.state.details}
                      completeDate={this.state.completeDate}
        />
        <TodoInput title={this.state.title}
                   dueDate={this.state.dueDate}
                   details={this.state.details}
                   completeDate={this.state.completeDate}
                   showTodoInput={this.state.showTodoInput}
                   onTitleChange={(txt) => this.handleTitleChange(txt)}
                   onDueDateChange={(dd) => this.handleDueDateChange(dd)}
                   onDetailsChange={(txt) => this.handleDetailsChange(txt)}
        />
        <EditButtons onBtnSavePress={() => this.handleBtnSavePress()}
                     onBtnCancelPress={() => this.handleBtnCancelPress()}
                     showTodoInput={this.state.showTodoInput}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('todo_react', () => todo_react);