import React from 'react';
import { Segment } from 'semantic-ui-react';

import './styles.scss';

const NotFound = () => (
  <div className="not-found">
    <Segment>
      <p id="text">404</p>
    </Segment>
  </div>
);

// == Export
export default NotFound;
