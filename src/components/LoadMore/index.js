import React from 'react';
import { Button, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default function LoadMore({ onClickButton }) {
  return (
    <Segment className="load-more">
      <Button
        content="Load More"
        fluid
        onClick={onClickButton}
      />
    </Segment>
  );
}

LoadMore.propTypes = {
  onClickButton: PropTypes.func.isRequired,
};
