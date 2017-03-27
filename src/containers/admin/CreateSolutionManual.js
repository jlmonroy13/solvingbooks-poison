import { connect } from 'react-redux';
import CreateSolutionManual from '../../components/admin/CreateSolutionManual';
import { setBasicInfoSolutionManual, setChapters } from '../../actions/admin';

const mapStateToProps = (state) => {
  const { chapters } = state.admin;

  return {
    chapters,
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
)(CreateSolutionManual);
