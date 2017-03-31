import React, { PropTypes, Component } from 'react';
import ObjectUtils from '../../utils/object';
import { SubchapterContainer } from '../../containers';

class SubchaptersForm extends Component {
  constructor() {
    super();

    this.onRenderSubchapter = this.onRenderSubchapter.bind(this);
  }

  onRenderSubchapter(subchapter) {
    const { chapterNumber } = this.props;
    return (
      <SubchapterContainer
        subchapter={subchapter}
        key={subchapter.number}
        chapterNumber={chapterNumber}
      />
    );
  }

  render() {
    const { chapters, chapterNumber } = this.props;
    const subchaptersArray = ObjectUtils.toArray(chapters[chapterNumber].subchapters);

    return (
      <div>
        { subchaptersArray.map(this.onRenderSubchapter) }
      </div>
    );
  }
}

SubchaptersForm.propTypes = {
  chapters: PropTypes.object,
  chapterNumber: PropTypes.number,
};

export default SubchaptersForm;
