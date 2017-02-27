/**
 * Task
 * Created by dcorns on 2/23/17
 * Copyright © 2017 Dale Corns
 */
'use strict';
import React, {Component, PropTypes} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

export default class Task extends Component {
  render() {
    return (
      <View>
        <Text>Current Task: {this.props.title}</Text>
        <TouchableHighlight onPress={this.props.onForward}>
          <Text>Tap for next task</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.onBack}>
          <Text>Tap for previous task</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

Task.propTypes = {
  title: PropTypes.string.isRequired,
  onForward: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};