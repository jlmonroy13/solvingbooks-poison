import { connect } from 'react-redux';
import SolutionManualDetail from '../../components/admin/SolutionManualDetail';
import ObjectUtils from '../../utils/object';

const mapStateToProps = (state) => {
  const { solutionManuals } = state;
  const solutionManualsArr = ObjectUtils.toArray(solutionManuals);

  return {
    solutionManuals: solutionManualsArr,
  };
};


export default connect(
  mapStateToProps,
  null,
)(SolutionManualDetail);
