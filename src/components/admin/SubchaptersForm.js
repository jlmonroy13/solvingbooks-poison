import React, { Component, PropTypes } from 'react';
import ObjectUtils from '../../utils/object';
import Subchapter from './Subchapter';

const SubchaptersForm = (props) => {
  const { chapters, chapterNumber } = props;
  const subchaptersArray = ObjectUtils.toArray(chapters[chapterNumber].subchapters);


  function onRenderSubchapter(subchapter) {
    return (
      <Subchapter
        subchapter={subchapter}
        key={subchapter.number}
        chapterNumber={chapterNumber}
      />
    );
  }

  return (
    <div>
      { subchaptersArray.map(onRenderSubchapter) }
    </div>
  );
}

SubchaptersForm.propTypes = {
  chapters: PropTypes.object,
  chapterNumber: PropTypes.number,
};

export default SubchaptersForm;
