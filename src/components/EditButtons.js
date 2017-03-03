/**
 * EditButtons
 * Created by dcorns on 3/2/17
 * Copyright © 2017 Dale Corns
 */
'use strict';
import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import * as globalStyles from '../styles/global';
export default class EditButtons extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.showTodoInput){
      this.vw = <View style={{flexDirection: 'row', justifyContent: 'space-around', flexWrap:'wrap', marginBottom: 10}}>
        <TouchableHighlight
          style={[globalStyles.BUTTON_STYLES.core, globalStyles.BUTTON_STYLES.hairlineBorder, globalStyles.BUTTON_STYLES.completeBtnStyle]}
          underlayColor="#60b044cc" activeOpacity={0.9}
          onPress={() => this.props.onBtnSavePress()}>
          <Text style={{color: globalStyles.BTN_TEXT_COLOR}}>SAVE</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[globalStyles.BUTTON_STYLES.core, globalStyles.BUTTON_STYLES.hairlineBorder, globalStyles.BUTTON_STYLES.primary, globalStyles.BUTTON_STYLES.deleteBtnStyle]}
          underlayColor="#60b044cc" activeOpacity={0.8}
          onPress={() => this.props.onBtnCancelPress()}>
          <Text style={{color: globalStyles.BTN_TEXT_COLOR}}>CANCEL</Text>
        </TouchableHighlight>
      </View>
    }
    else {
      this.vw = null;
    }
    return (
      this.vw
    )
  }
}