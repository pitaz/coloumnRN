import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

/**
 * Flatlist items header
 *
 * @returns {void}
 */
export const RenderHeader = () => (
  <View style={styles.contactsHeader}>
    <Text>Contacts</Text>
  </View>
);
