/**
 * SmallText
 * Created by dcorns on 2/21/17
 * Copyright © 2017 Dale Corns
 */
'use strict';
import React, {PropTypes} from 'react';
import {StyleSheet, Text} from 'react-native';
import AppText from './AppText';

const SmallText = ({style, children, ...rest}) => (
  <AppText style={[styles.small, style]}{...rest}>
    {children}
  </AppText>
);
SmallText.propTypes = {
  style: Text.propTypes.style,
  children: PropTypes.node
};
const styles = StyleSheet.create({
  small: {
    fontSize: 11,
  }
});
export default SmallText;