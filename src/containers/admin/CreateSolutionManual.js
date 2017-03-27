import { connect } from 'react-redux';
import CreateSolutionManual from '../../components/admin/CreateSolutionManual';
import { setBasicInfoSolutionManual } from '../../actions/admin';

const mapStateToProps = (state) => {
  const { authentication } = state;

  return {
    authentication,
  };
};

const mapDispatchToProps = dispatch => ({
  onSetBasicInfo: (data) => {
    dispatch(setBasicInfoSolutionManual(data));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateSolutionManual);
