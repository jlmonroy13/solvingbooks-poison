import React, { PropTypes } from 'react';
import { Searcher } from './';

const SearchPage = (props) => {
  const { bookNameUrl } = props.params;
  return (
    <Searcher bookNameUrl={bookNameUrl}/>
  );
};

SearchPage.propTypes = {
  params: PropTypes.object,
};

export default SearchPage;
