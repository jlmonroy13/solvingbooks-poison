import React, { PropTypes } from 'react';
import { Searcher } from './';

const SearchPage = (props) => {
  const { bookName } = props.params;
  return (
    <Searcher bookNameUrl={bookName}/>
  );
};

SearchPage.propTypes = {
  params: PropTypes.object,
};

export default SearchPage;
