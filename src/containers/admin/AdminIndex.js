import { connect } from 'react-redux';
import AdminIndex from '../../components/admin/AdminIndex';
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
)(AdminIndex);
