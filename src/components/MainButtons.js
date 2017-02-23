/**
 * MainButtons
 * Created by dcorns on 2/22/17
 * Copyright © 2017 Dale Corns
 */
'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import * as globalStyles from '../styles/global';
class MainButtons extends Component {
  render(){
    return(
      <View style={globalStyles.COMMON_STYLES.container}>
        <TouchableHighlight style={[globalStyles.BUTTON_STYLES.core, globalStyles.BUTTON_STYLES.primary, globalStyles.BUTTON_STYLES.hairlineBorder]}
                            underlayColor="#60b044cc" activeOpacity={0.9} onPress={() => {}}>
          <Text>ADD</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[globalStyles.BUTTON_STYLES.core, globalStyles.BUTTON_STYLES.hairlineBorder, globalStyles.BUTTON_STYLES.primary]}
                            underlayColor="#60b044cc" activeOpacity={0.8} onPress={() => {}}>
          <Text>COMPLETE</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[globalStyles.BUTTON_STYLES.core, globalStyles.BUTTON_STYLES.hairlineBorder]} underlayColor="#60b044cc"
                            activeOpacity={0.8} onPress={() => {}}>
          <Text>EDIT</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[globalStyles.BUTTON_STYLES.core, globalStyles.BUTTON_STYLES.hairlineBorder]} underlayColor="#60b044cc"
                            activeOpacity={0.8} onPress={() => {}}>
          <Text>DELETE</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default MainButtons;