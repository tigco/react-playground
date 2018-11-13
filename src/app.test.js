import React from 'react';
import App from './app';

describe('<App /> shallow()', () => {

  it('should work', () => {
    const wrapper = shallow(<App />);
    assert.ok(wrapper);
  });
});
