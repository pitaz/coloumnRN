import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import {styles} from './styles';

const Home = ({navigation}) => {
  return (
    <View style={styles.homeWrapper}>
      <Button
        label="Open contacts"
        onPress={() => navigation.navigate('contacts')}
      />
    </View>
  );
};

Home.propTypes = {
  navigation: PropTypes.object,
};
export default Home;
