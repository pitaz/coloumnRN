import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  Platform,
  PermissionsAndroid,
  ActivityIndicator,
} from 'react-native';
import {styles} from './styles';
import {compare} from '../../helpers/compare';
import {RenderHeader} from './RenderHeader';
import {RenderItem} from './RenderItem';
import {getContacts} from '../../helpers/utils/contacts';
import {Divider} from './Divider';
import {requestPermission} from '../../helpers/utils/permissions';

const ContactsList = ({navigation}) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android') {
        setLoading(true);
        const granted = await requestPermission();
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          const resp = await getContacts();
          setData(resp);
        }
        setLoading(false);
      }
      if (Platform.OS === 'ios') {
        setLoading(true);
        const resp = await getContacts();
        setData(resp);
        setLoading(false);
      }
    })();
  }, []);

  const Loader = () => <ActivityIndicator size="large" color="#000000" />;
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.homeWrapper}>
        <FlatList
          data={data?.sort(compare)}
          renderItem={(item) => RenderItem(item, navigation)}
          ListHeaderComponent={RenderHeader}
          keyExtractor={(_, index) => index.toString()}
          ItemSeparatorComponent={Divider}
          ListFooterComponent={() => loading && <Loader />}
        />
      </View>
    </SafeAreaView>
  );
};

export default ContactsList;
