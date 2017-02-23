/**
 * global
 * Created by dcorns on 2/21/17
 * Copyright © 2017 Dale Corns
 */
'use strict';
import {StyleSheet} from 'react-native';
export const BG_COLOR = '#343336';
export const BAR_COLOR = '#4e4d52';
export const TEXT_COLOR = '#e5dbda';
export const HEADER_TEXT_COLOR = '#fff';
export const MUTED_COLOR = '#838786';
export const LINK_COLOR = '#48e9d9';
export const ACCENT_COLORS = ['#d31d65', '#751c53', '#c248c0', '#7d6e8b', '#bbc6f7'];
// export const COMMON_STYLES = StyleSheet.create({
//   color: '#e5dbda'
// });
export const COMMON_STYLES = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    backgroundColor: 'black',
    flexDirection: 'row'
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: 'green',
    alignSelf: 'stretch'
  }
});
export const BUTTON_STYLES = StyleSheet.create({
  core: {
    borderStyle: 'solid',
    borderColor: '#d5d5d5',
    borderWidth: 1,
    backgroundColor: '#eee',
    borderRadius: 3,
    padding: 3,
    paddingLeft: 5,
    paddingRight: 5
  },
  primary: {
    backgroundColor: '#60b044',
    borderColor: '#355f27'
  },
  hairlineBorder: {
    borderWidth: StyleSheet.hairlineWidth
  }
});