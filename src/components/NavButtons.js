/**
 * NavButtons
 * Created by dcorns on 2/24/17
 * Copyright © 2017 Dale Corns
 */
'use strict';
import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import * as globalStyles from '../styles/global';
export default class NavButtons extends Component {
  render() {
    return (
      <View  style={{flexDirection: 'row', justifyContent: 'space-around', flexWrap:'wrap', marginBottom: 10}}>
        <TouchableHighlight
          style={[globalStyles.BUTTON_STYLES.core, globalStyles.BUTTON_STYLES.hairlineBorder, globalStyles.BUTTON_STYLES.addBtnStyle]}
          underlayColor="#60b044cc" activeOpacity={0.9} onPress={() => {}}>
          <Text style={{color: globalStyles.BTN_TEXT_COLOR}}>ADD</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[globalStyles.BUTTON_STYLES.core, globalStyles.BUTTON_STYLES.hairlineBorder, globalStyles.BUTTON_STYLES.primary, globalStyles.BUTTON_STYLES.completeBtnStyle]}
          underlayColor="#60b044cc" activeOpacity={0.8} onPress={() => {}}>
          <Text style={{color: globalStyles.BTN_TEXT_COLOR}}>COMPLETE</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[globalStyles.BUTTON_STYLES.core, globalStyles.BUTTON_STYLES.hairlineBorder, globalStyles.BUTTON_STYLES.editBtnStyle]}
                            underlayColor="#60b044cc"
                            activeOpacity={0.8} onPress={() => {}}>
          <Text style={{color: globalStyles.BTN_TEXT_COLOR}}>EDIT</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[globalStyles.BUTTON_STYLES.core, globalStyles.BUTTON_STYLES.hairlineBorder, globalStyles.BUTTON_STYLES.deleteBtnStyle]}
                            underlayColor="#60b044cc"
                            activeOpacity={0.8} onPress={() => {}}>
          <Text style={{color: globalStyles.BTN_TEXT_COLOR}}>DELETE</Text>
        </TouchableHighlight>
      </View>
    );
  }
}