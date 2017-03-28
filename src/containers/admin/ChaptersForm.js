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

export default connect(
  mapStateToProps,
  null,
)(ChaptersForm);
