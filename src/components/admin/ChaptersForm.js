import React, { PropTypes, Component } from 'react';
import ObjectUtils from '../../utils/object';
import { ChapterContainer } from '../../containers';

class ChaptersForm extends Component {
  constructor() {
    super();

    this.onRenderChapter = this.onRenderChapter.bind(this);
  }
  onRenderChapter(chapter) {
    const { solutionManual: { hasSubchapters } } = this.props;
    return (
      <ChapterContainer
        hasSubchapters={hasSubchapters}
        chapter={chapter}
        key={chapter.number}
      />
    );
  }

  render() {
    const { chapters } = this.props;
    const chaptersArray = ObjectUtils.toArray(chapters);

    return (
      <div>
        { chaptersArray.map(this.onRenderChapter) }
      </div>
    );
  }
}

ChaptersForm.propTypes = {
  chapters: PropTypes.object,
  solutionManual: PropTypes.object,
};

export default ChaptersForm;
