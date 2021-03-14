import React from 'react';
import {render, cleanup} from '@testing-library/react-native';
import ContactDetail from '../src/screens/ContactDetail';

afterEach(cleanup);

describe('Home', () => {
  let rendered;
  const navigation = {goBack: jest.fn()};
  const mockData = {
    givenName: 'Test name',
    familyName: 'Test Family name',
    thumbnailPath: '',
    mobileType: 'home',
    number: '0998777776666',
    hasThumbnail: false,
  };
  const route = {params: {}};
  beforeEach(() => {
    rendered = render(<ContactDetail navigation={navigation} route={route} />);
  });
  it('should match snapshot', () => {
    rendered.toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it('renders back button', () => {
    const route2 = {params: {...mockData}};
    rendered = render(<ContactDetail navigation={navigation} route={route2} />);
    expect(rendered.queryByText('Back')).not.toBeNull();
  });
});
