import React from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Result from './Result';

import './style.scss';

export default function ReposResults({ results }) {
  return (
    <div className="results">
      <Card.Group itemsPerRow={3} stackable>
        {results.map((result) => (
          <Result
            key={result.id}
            {...result}
          />
        ))}
      </Card.Group>
    </div>
  );
}

ReposResults.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
