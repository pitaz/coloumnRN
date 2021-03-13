import Contacts from 'react-native-contacts';

export const getContacts = async () => {
  const res = Contacts.getAll();
  return res;
};
