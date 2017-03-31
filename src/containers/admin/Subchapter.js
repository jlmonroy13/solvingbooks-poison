import { connect } from 'react-redux';
import Subchapter from '../../components/admin/Subchapter';
import { setSubchapterInfo } from '../../actions/admin';

const mapDispatchToProps = dispatch => ({
  onSetSubchapterInfo: (subchapter, chapterId) => {
    dispatch(setSubchapterInfo(subchapter, chapterId));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(Subchapter);
