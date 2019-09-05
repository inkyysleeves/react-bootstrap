import React from 'react';
import { shallow } from 'enzyme';
import Alert from '../../src/components/Alert';

it('renders an error message', () => {
  const wrapper = shallow((
    <Alert message="error!" />
  ));
  expect(wrapper.find('.Alert').text()).toBe('error!');
});
it('renders a success message', () => {
  const wrapper = shallow((
    <Alert message="Success!!!" success />
  ));
  expect(wrapper.find('.Alert.success').text()).toBe('Success!!!');
});
