import { connect } from 'react-redux';
import ChaptersForm from '../../components/admin/ChaptersForm';
import { setBasicInfoSolutionManual, setChapters } from '../../actions/admin';

const mapStateToProps = (state) => {
  const { chapters, solutionManual } = state.admin;

  return {
    chapters,
    solutionManual,
  };
};

const mapDispatchToProps = dispatch => ({
  onSetBasicInfo: (data) => {
    dispatch(setBasicInfoSolutionManual(data));
  },
  onSetChapters: (chapters) => {
    dispatch(setChapters(chapters));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChaptersForm);
