import { connect } from 'react-redux';
import DisplaySection from '../components/DisplaySection';

const mapStateToProps = (state) => {
  const { searcher, routing: { locationBeforeTransitions: { pathname } } } = state;
  return {
    searcher,
    pathname,
  };
};


export default connect(
  mapStateToProps,
  null,
)(DisplaySection);
