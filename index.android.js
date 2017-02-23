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
    this.state = {taskTitle: ''};
  }
  render(){
    return(
      <View>
        <TextInput placeholder='Enter new task title here' onChangeText={(taskTitle) => this.setState({taskTitle})}/>
        <Text>
          {this.state.taskTitle}
        </Text>
      </View>
      )
  }
}
export default class todo_react extends Component {
  render() {
    return (
      <View>
        <MainHeader name='Dale'/>
        <TodoInput/>
      </View>
    );
  }
}
AppRegistry.registerComponent('todo_react', () => todo_react);