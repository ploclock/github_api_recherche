import React, { useEffect } from 'react';
import { Message as MessageSUI } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './style.scss';

export default function Message({
  content,
  isError,
  visible,
  onTimeout,
}) {
  if (!visible) {
    return null;
  }
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onTimeout();
    }, 3000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [content]);

  return (
    <div className="message">
      <MessageSUI negative={isError}>{content}</MessageSUI>
    </div>
  );
}

Message.propTypes = {
  content: PropTypes.string.isRequired,
  isError: PropTypes.bool.isRequired,
  visible: PropTypes.bool.isRequired,
  onTimeout: PropTypes.func.isRequired,
};
