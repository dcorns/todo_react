/**
 * Title
 * Created by dcorns on 2/21/17
 * Copyright © 2017 Dale Corns
 */
'use strict';
import React, {PropTypes} from 'react';
import {StyleSheet, Text} from 'react-native';
import * as globalStyles from '../styles/global';

const Title = ({style, children}) => (
  <AppText style={[styles.title, style]}>
    {children}
  </AppText>
);
Title.propTypes = {
  style: Text.propTypes.style,
  children: PropTypes.node
};
const styles = StyleSheet.create({
  title: {
    fontFamily: 'HelveticaNeue-CondenseBold',
    fontSize: 18,
    color: globalStyles.HEADER_TEXT_COLOR,
    backgroundColor: `${globalStyles.BG_COLOR}99`
  }
});
export default Title;