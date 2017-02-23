/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
//React is used by babel to compile JSX
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  TextInput,
  ListView
} from 'react-native';
import * as MainButtons from './src/components/MainButtons';
import * as mainStyles from './src/styles/global';
class MainHeader extends Component{
  constructor(props){
    super(props);
    this.state = {clr: 25};
    setInterval(() => {
      if (this.state.clr > 360){
        this.setState({clr: 0});
      }
      this.setState({clr: ++this.state.clr});//precedence: if ++ follows this.state.clr the clr state will never increment
    }, 10);
  }
  render(){
    return (
      <Text style={{color: `hsl(${this.state.clr}, 50%, 50%)`, textAlign: 'center', fontSize: 20}}>{this.props.name}'s TODOS</Text>
    );
  }
}
class TodoInput extends Component{
  constructor(props){
    super(props);
    this.state = {taskTitle: '', taskDueDate: '', taskDetails: ''};
  }
  render(){
    return(
      <View>
        <TextInput placeholder='Enter new task title here' onChangeText={(taskTitle) => this.setState({taskTitle})}/>
        <TextInput placeholder='Enter new task due date here' onChangeText={(taskDueDate) => this.setState({taskDueDate})}/>
        <TextInput placeholder='Enter new task details here' onChangeText={(taskDetails) => this.setState({taskDetails})}/>
        <Text>{this.state.taskTitle}</Text>
        <Text>{this.state.taskDueDate}</Text>
        <Text>{this.state.taskDetails}</Text>
      </View>
      )
  }
}
class TodoList extends Component{
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([{title: 'task1'}, {title: 'task2'}, {title: 'task3'}, {title: 'task4'}, {title: 'task5'}, {title: 'task6'}, {title: 'task7'}, {title: 'task8'},])
    };
  }
  render(){
    return(
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData.title}</Text>}
        />
      </View>
    );
  }
}
export default class todo_react extends Component {
  render() {
    return (
      <View>
        <MainHeader name='Dale'/>
        <TodoInput/>
        <TodoList/>
      </View>
    );
  }
}
AppRegistry.registerComponent('todo_react', () => todo_react);