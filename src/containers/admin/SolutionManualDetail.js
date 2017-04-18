import { connect } from 'react-redux';
import SolutionManualDetail from '../../components/admin/SolutionManualDetail';
import ObjectUtils from '../../utils/object';

const mapStateToProps = (state) => {
  const { solutionManuals, searcher: { solutionManual } } = state;
  const solutionManualsArr = ObjectUtils.toArray(solutionManuals);

  return {
    solutionManuals: solutionManualsArr,
    solutionManual,
  };
};


export default connect(
  mapStateToProps,
  null,
)(SolutionManualDetail);
