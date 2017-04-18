import { connect } from 'react-redux';
import SolutionManualDetail from '../../components/admin/SolutionManualDetail';
import ObjectUtils from '../../utils/object';

const exercisesCounter = (solutionManual) => {
  let counter = 0;
  solutionManual.chapters && solutionManual.chapters.map(chapter => {
    if (solutionManual.hasSubchapters) {
      chapter.subchapters.map(subchapter => {
        subchapter.exercises.map(exercise => {
          if (exercise.imageUrl) counter += 1;
        });
      });
    } else {
      chapter.exercises && chapter.exercises.map(exercise => {
        if (exercise.imageUrl) counter += 1;
      });
    }
  });
  return counter;
}

const mapStateToProps = (state) => {
  const { solutionManuals, searcher: { solutionManual } } = state;
  const solutionManualsArr = ObjectUtils.toArray(solutionManuals);

  return {
    solutionManuals: solutionManualsArr,
    solutionManual,
    exerciseCounter: exercisesCounter(solutionManual),
  };
};

export default connect(
  mapStateToProps,
  null,
)(SolutionManualDetail);
