import React from 'react'
import PropTypes from 'prop-types'

import LayoutEvaluation from '../../components/LayoutEvaluation'
import QualityQuiz from '../../components/QualityQuiz'

class Quality extends React.Component {
  static propTypes = {
    domain: PropTypes.object,
    handleClickSaveButton: PropTypes.func,
    handleClickSkipButton: PropTypes.func,
    handleChangeQuality: PropTypes.func,
    setStateGrade: PropTypes.object,
    setStateText: PropTypes.func,
    stateGrade: PropTypes.number,
    stateText: PropTypes.object
  }

  async componentDidMount() {
    if (this.props.stateGrade) {
      this.props.setStateText(null)
      const user = await this.props.domain
        .get('current_users_use_case')
        .execute()
      const text = await this.props.domain
        .get('get_next_evaluation_texts_use_case')
        .execute({user, grade: this.props.stateGrade, type: 'quality'})
      this.props.setStateText(text)
    }
  }

  async componentDidUpdate(prevProps) {
    if (this.props.stateGrade !== prevProps.stateGrade) {
      this.props.setStateText(null)
      const user = await this.props.domain
        .get('current_users_use_case')
        .execute()
      const text = await this.props.domain
        .get('get_next_evaluation_texts_use_case')
        .execute({user, grade: this.props.stateGrade, type: 'quality'})
      this.props.setStateText(text)
    }
  }

  render() {
    const {
      handleChangeQuality,
      handleClickSaveButton,
      handleClickSkipButton,
      setStateGrade,
      stateGrade,
      stateText
    } = this.props

    return (
      <LayoutEvaluation text={stateText}>
        <LayoutEvaluation.Canvas />
        <LayoutEvaluation.Quiz
          onClickSave={handleClickSaveButton}
          onClickSkip={handleClickSkipButton}
        >
          <QualityQuiz
            onChangeGrade={setStateGrade}
            onChangeQuality={handleChangeQuality}
            active={Boolean(stateText)}
            grade={stateGrade}
          />
        </LayoutEvaluation.Quiz>
      </LayoutEvaluation>
    )
  }
}

export default Quality
