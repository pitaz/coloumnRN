import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  homeWrapper: {
    flex: 1,
    padding: 20,
  },
  contact: {
    padding: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 40,
    backgroundColor: '#242038',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#fff',
  },
  contactsHeader: {
    padding: 15,
  },
  safeAreaView: {
    flex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: '#d4d4d8',
  },
});
