import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const StyledCard = styled.View`
  padding-left: ${wp('2%')}px;
  padding-right: ${wp('7%')}px;
  padding-top: ${wp('5%')}px;
  padding-bottom: ${wp('5%')}px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  elevation: ${Platform.OS === 'ios' ? 1 : 2};
  border-radius: 6px;
  background: #fff;
  border-radius: 14px;
  margin: ${wp('5%')}px;
`;
