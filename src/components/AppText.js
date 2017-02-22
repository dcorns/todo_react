/**
 * AppText
 * Created by dcorns on 2/21/17
 * Copyright © 2017 Dale Corns
 */
'use strict';
import React, {propTypes} from 'react';
import {Text} from 'react-native';
import * as globalStyles from '../styles/global';

const AppText = ({children, style, ...rest}) => (
  <Text style={[globalStyles.COMMON_STYLES.text, style]}
    {...rest}>
    {children}
  </Text>
);
AppText.prototypes = {
  style: Text.propTypes.style,
  children: PropTypes.node
};

export default AppText;