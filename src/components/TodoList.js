/**
 * TodoList
 * Created by dcorns on 2/26/17
 * Copyright © 2017 Dale Corns
 */
'use strict';
import React, {Component} from 'react';
import {View, Text, ListView} from 'react-native';
export default class TodoList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([{title: 'task1'}, {title: 'task2'}, {title: 'task3'}, {title: 'task4'}, {title: 'task5'}, {title: 'task6'}, {title: 'task7'}, {title: 'task8'},])
    };
  }

  render() {
    return (
      <View style={{marginBottom: 10}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text style={{color: 'yellow', borderColor: 'green', borderStyle: 'solid', borderWidth: 1}}>{rowData.title}</Text>}
        />
      </View>
    );
  }
}