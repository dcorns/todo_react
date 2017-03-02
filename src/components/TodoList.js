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
  }
  //Cloning of rows needs to occur in the render function for the list to be updated automatically by state
  ds2 = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.title === r2.title});

  render() {
    return (
      <View style={{marginBottom: 10}}>
        <ListView
          dataSource={this.ds2.cloneWithRows(this.props.data)}
          enableEmptySections={true}
          renderRow={(rowData, ...rest) =>
          <Text
          style={{color: 'yellow', borderColor: 'green', borderStyle: 'solid', borderWidth: 1}}
          onPress={() => {
            this.props.onTaskClick(rest[1]);
          }}
          >
          {rowData.title}
          </Text>}
        />
      </View>
    );
  }
}