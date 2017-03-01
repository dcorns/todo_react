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
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.title !== r2.title});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.data),
      dataIdx: this.props.dataIdx
    };
  }

  render() {
    return (
      <View style={{marginBottom: 10}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData, ...rest) =>
          <Text
          style={{color: 'yellow', borderColor: 'green', borderStyle: 'solid', borderWidth: 1}}
          onPress={() => this.props.onTaskClick(rest[1])}
          >
          {rowData.title}
          </Text>}
        />
      </View>
    );
  }
}