import React, {useEffect, useState} from 'react';
import {View, FlatList, SafeAreaView} from 'react-native';
import {styles} from './styles';
import {compare} from '../../helpers/compare';
import {RenderHeader} from './RenderHeader';
import {RenderItem} from './RenderItem';
import {getContacts} from '../../helpers/utils/contacts';
import {Divider} from './Divider';

const ContactsList = ({navigation}) => {
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      const resp = await getContacts();
      setData(resp);
    })();
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.homeWrapper}>
        <FlatList
          data={data?.sort(compare)}
          renderItem={(item) => RenderItem(item, navigation)}
          ListHeaderComponent={RenderHeader}
          keyExtractor={(_, index) => index.toString()}
          ItemSeparatorComponent={Divider}
        />
      </View>
    </SafeAreaView>
  );
};

export default ContactsList;
