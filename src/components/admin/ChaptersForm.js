import React, { Component, PropTypes } from 'react';
import ObjectUtils from '../../utils/object';
import Chapter from './Chapter';

class ChaptersForm extends Component {
  constructor() {
    super();
    this.state = {
      chapterName: '',
      exercises: '',
      subchapters: '',
    };

    this.onChangeField = this.onChangeField.bind(this);
    this.onRenderChapter = this.onRenderChapter.bind(this);
  }

  onChangeField(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onRenderChapter(chapter) {
    const { solutionManual: { hasSubchapters } } = this.props;
    return (
      <Chapter
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
