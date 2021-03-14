import React from 'react';
import {render, fireEvent, cleanup} from '@testing-library/react-native';
import Home from '../src/screens/Home';

afterEach(cleanup);

describe('Home', () => {
  let rendered;
  const navigation = {navigate: jest.fn()};
  beforeEach(() => {
    rendered = render(<Home navigation={navigation} />);
  });
  it('should match snapshot', () => {
    rendered.toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it('renders the correct message', () => {
    expect(rendered.queryByText('Open contacts')).not.toBeNull();
  });

  it('calls the open Contacts', () => {
    const buttonComponent = rendered.queryByText('Open contacts');
    fireEvent.press(buttonComponent);
    expect(navigation.navigate).toHaveBeenCalled();
  });
});
