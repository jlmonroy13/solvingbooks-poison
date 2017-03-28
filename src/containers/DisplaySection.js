import { connect } from 'react-redux';
import DisplaySection from '../components/DisplaySection';

const mapStateToProps = (state) => {
  const { searcher } = state;
  return {
    searcher,
  };
};


export default connect(
  mapStateToProps,
  null,
)(DisplaySection);
