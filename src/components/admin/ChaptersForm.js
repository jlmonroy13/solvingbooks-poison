import React, { PropTypes } from 'react';
import ObjectUtils from '../../utils/object';
import { ChapterContainer } from '../../containers';

const ChaptersForm = (props) => {
  const { chapters } = props;
  const chaptersArray = ObjectUtils.toArray(chapters);

  function onRenderChapter(chapter) {
    const { solutionManual: { hasSubchapters } } = props;
    return (
      <ChapterContainer
        hasSubchapters={hasSubchapters}
        chapter={chapter}
        key={chapter.number}
      />
    );
  }

  return (
    <div>
      { chaptersArray.map(onRenderChapter) }
    </div>
  );
};

ChaptersForm.propTypes = {
  chapters: PropTypes.object,
  solutionManual: PropTypes.object,
};

export default ChaptersForm;
