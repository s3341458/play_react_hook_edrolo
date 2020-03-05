/* eslint-env mocha */
import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from './Header';

describe('<Heading />', () => {
  it('should render a Header', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Header />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
})
