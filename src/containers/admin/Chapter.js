import { connect } from 'react-redux';
import Chapter from '../../components/admin/Chapter';
import { setSubchapters } from '../../actions/admin';

const mapDispatchToProps = dispatch => ({
  onSetSubchapters: (chapterId, subchapters) => {
    dispatch(setSubchapters(chapterId, subchapters));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(Chapter);
