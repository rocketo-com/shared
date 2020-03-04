import React from 'react';
import Notices from '../Notices/index';

const withNotices = Component => props => (
  <>
    <Notices />
    {typeof Component === 'function' ? Component(props) : <Component {...props} />}
  </>
);

export default withNotices;
