import React from 'react';
import {render, cleanup} from '@testing-library/react-native';
import ContactsList from '../src/screens/Contacts';

afterEach(cleanup);

describe('Contacts', () => {
  let rendered;
  beforeEach(() => {
    rendered = render(<ContactsList />);
  });
  it('should match snapshot', () => {
    rendered.toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it('renders list', () => {
    expect(rendered.getByTestId('list')).not.toBeNull();
  });
});
