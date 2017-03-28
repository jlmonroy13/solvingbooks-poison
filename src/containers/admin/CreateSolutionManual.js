import { connect } from 'react-redux';
import CreateSolutionManual from '../../components/admin/CreateSolutionManual';
import { setBasicInfoSolutionManual, setChapters, setHasSubchapters } from '../../actions/admin';

const mapStateToProps = (state) => {
  const { chapters, solutionManual } = state.admin;

  return {
    chapters,
    solutionManual,
  };
};

const mapDispatchToProps = dispatch => ({
  onSetBasicInfo: data => {
    dispatch(setBasicInfoSolutionManual(data));
  },
  onSetChapters: chapters => {
    dispatch(setChapters(chapters));
  },
  onSetHasSubchapters: status => {
    dispatch(setHasSubchapters(status));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateSolutionManual);
