import { connect } from 'react-redux';
import Chapter from '../../components/admin/Chapter';
import { setSubchapters, setChapterWithExercises } from '../../actions/admin';

const mapDispatchToProps = dispatch => ({
  onSetSubchapters: (chapterId, subchapters) => {
    dispatch(setSubchapters(chapterId, subchapters));
  },
  onSetChapterWithExercises: chapter => {
    dispatch(setChapterWithExercises(chapter));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(Chapter);
