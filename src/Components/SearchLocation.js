import React from 'react';
import PropTypes from 'prop-types';

import {
  InputGroup, Input, Container, Spinner
} from 'reactstrap';

function SearchLocation({ value, change, submit, isProcessing }) {
  return (
    <>
      <Container className="themed-container" className="">
        <div className="searchLocation col-sm-12 col-md-6 offset-md-3">
          <form className="SearchBar d-flex" onSubmit={submit}>
            <Input placeholder="Enter any location..." onChange={change} value={value} />&nbsp;&nbsp;&nbsp;&nbsp;
            { isProcessing && <Spinner type="grow" color="dark" />}
          </form>
        </div>
      </Container>
    </>
  );
}

SearchLocation.propTypes = {
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  isProcessing: PropTypes.bool.isRequired
};

export default SearchLocation;
