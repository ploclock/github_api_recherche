import React from 'react';
import { Segment, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './style.scss';

export default function SearchBar({ inputValue, onChangeInputValue, onFormSubmit }) {
  const handleOnSubmit = () => {
    onFormSubmit();
  };

  return (
    <div className="searchbar">
      <Segment>
        <Form onSubmit={handleOnSubmit}>
          <Form.Input
            fluid
            placeholder="Votre recherche"
            icon="search"
            iconPosition="left"
            value={inputValue}
            onChange={(event) => onChangeInputValue(event.target.value)}
          />
        </Form>
      </Segment>
    </div>
  );
}

SearchBar.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onChangeInputValue: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};
