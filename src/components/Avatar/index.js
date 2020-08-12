import React from 'react';
import { getUserPictureUrl } from 'rocketo-helpers';

const Avatar = ({ id, firstName, lastName, name, ...props }) => {
  const onError = e => {
    let f, l;
    if (name) {
      const nameArray = name.split(' ');
      f = nameArray.shift();
      l = nameArray.join(' ');
    } else {
      f = firstName;
      l = lastName;
    }

    e.target.onerror = null;
    e.target.src = getUserPictureUrl(id, f, l, true);
  };

  return <img {...props} onError={onError} />;
};

Avatar.defaultProps = {
  firstName: '',
  lastName: '',
  name: '',
};

export default Avatar;
