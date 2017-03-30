import { connect } from 'react-redux';
import SubchaptersForm from '../../components/admin/SubchaptersForm';

const mapStateToProps = (state) => {
  const { chapters } = state.admin;

  return {
    chapters,
  };
};

export default connect(
  mapStateToProps,
  null,
)(SubchaptersForm);
