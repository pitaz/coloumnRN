import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import {styles} from './styles';

const Home = ({navigation}) => {
  const navigate = () => navigation.navigate('contacts');
  return (
    <View style={styles.homeWrapper}>
      <Button testID="contactBtn" label="Open contacts" onPress={navigate} />
    </View>
  );
};

Home.propTypes = {
  navigation: PropTypes.object,
};
export default Home;
