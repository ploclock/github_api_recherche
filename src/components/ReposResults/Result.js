import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './style.scss';

export default function Result({
  imageUrl,
  title,
  username,
  description,
}) {
  return (
    <Card>
      <Image src={imageUrl} wrapped ui={false} />
      <Card.Content>
        <Card.Header textAlign="left">{title}</Card.Header>
        <Card.Meta>
          <span>{username}</span>
        </Card.Meta>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

Result.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  description: PropTypes.string,
};

Result.defaultProps = {
  description: 'No description',
};
