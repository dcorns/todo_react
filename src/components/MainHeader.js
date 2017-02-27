/**
 * MainHeader
 * Created by dcorns on 2/24/17
 * Copyright © 2017 Dale Corns
 */
'use strict';
import React, {Component} from 'react';
import {View, Text} from 'react-native';
export default class MainHeader extends Component{
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
      <View style={{alignSelf: 'stretch', marginBottom: 10}}>
        <Text style={{color: `hsl(${this.state.clr}, 50%, 50%)`, textAlign: 'center', fontSize: 20}}>{this.props.name}'s TODOS</Text>
      </View>
    );
  }
}