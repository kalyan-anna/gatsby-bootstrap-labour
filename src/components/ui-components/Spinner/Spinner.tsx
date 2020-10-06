import React from 'react';
import { Spinner as ReactSpinner } from 'react-bootstrap';

export const Spinner = () => {
  return (
    <div className="d-flex justify-content-center align-items-center m-5">
      <ReactSpinner animation="grow" role="status">
        <span className="sr-only">Loading...</span>
      </ReactSpinner>
    </div>
  );
};
