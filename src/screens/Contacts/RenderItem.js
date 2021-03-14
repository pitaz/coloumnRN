import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import {styles} from './styles';
import {nameInitials} from '../../helpers/nameInitials';

/**
 * Flatlist row view
 * @param {object} props
 */
export const RenderItem = (items, navigation) => {
  const {item, index} = items;
  const navigate = () => {
    const data = {
      givenName: item?.givenName,
      familyName: item?.familyName,
      thumbnailPath: item?.thumbnailPath,
      mobileType: item?.phoneNumbers[0]?.label,
      number: item?.phoneNumbers[0]?.number,
      hasThumbnail: item?.hasThumbnail,
    };
    navigation.navigate('contact-detail', {...data});
  };
  return (
    <TouchableOpacity testID="item" style={styles.contact} onPress={navigate}>
      {item?.hasThumbnail ? (
        <Image source={{uri: item?.thumbnailPath}} style={styles.avatar} />
      ) : (
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {nameInitials(item?.givenName, item?.familyName)}
          </Text>
        </View>
      )}
      <View>
        <Text>{`${item?.givenName} ${item?.familyName}`}</Text>
        <Text>
          {item?.phoneNumbers[0]?.label}: {item?.phoneNumbers[0]?.number}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

RenderItem.propTypes = {
  props: PropTypes.object,
};
