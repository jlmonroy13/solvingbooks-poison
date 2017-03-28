import React, { PropTypes } from 'react';
import { Searcher } from './';
import { DisplaySectionContainer, SearcherContainer } from '../containers';

const SearchPage = (props) => {
  const { bookNameUrl } = props.params;
  return (
    <div>
      <SearcherContainer bookNameUrl={bookNameUrl}/>
      <DisplaySectionContainer/>
    </div>
  );
};

SearchPage.propTypes = {
  params: PropTypes.object,
};

export default SearchPage;
