import React from 'react';
import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Card from '../../components/Card';
import {nameInitials} from '../../helpers/nameInitials';
import {styles} from './styles';

/**
 *
 * Contact details
 *
 * @param {object} props
 *
 * @returns {void}
 */
const ContactDetail = (props) => {
  const {navigation, route} = props;
  const contact = route.params;
  const renderView = () => (
    <Card>
      <View style={styles.homeWrapper}>
        {contact?.hasThumbnail ? (
          <Image source={{uri: contact?.thumbnailPath}} style={styles.avatar} />
        ) : (
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {nameInitials(contact.givenName, contact.familyName)}
            </Text>
          </View>
        )}
        <Text style={styles.name}>
          {`${contact.givenName} ${contact.familyName}`}
        </Text>
        <Text>{`${contact?.mobileType}: ${contact?.number}`}</Text>
      </View>
    </Card>
  );
  return (
    <SafeAreaView style={styles.pageWrapper}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
      <View style={styles.contentWrapper}>{renderView()}</View>
    </SafeAreaView>
  );
};

ContactDetail.propTypes = {
  props: PropTypes.object,
};

export default ContactDetail;
