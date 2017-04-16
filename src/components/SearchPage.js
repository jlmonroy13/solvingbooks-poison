import React, { PropTypes } from 'react';
import { DisplaySectionContainer, SearcherContainer, AuthenticationModalContainer } from '../containers';

const SearchPage = (props) => {
  const { bookNameUrl } = props.params;
  return (
    <div>
      <SearcherContainer bookNameUrl={bookNameUrl}/>
      <DisplaySectionContainer/>
      <AuthenticationModalContainer />
    </div>
  );
};

SearchPage.propTypes = {
  params: PropTypes.object,
};

export default SearchPage;
