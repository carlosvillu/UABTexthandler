import React from 'react'
import PropTypes from 'prop-types'

import LayoutEvaluation from '../../components/LayoutEvaluation'
import QualityQuiz from '../../components/QualityQuiz'

class Quality extends React.Component {
  static propTypes = {
    domain: PropTypes.object,
    handleClickSkipButton: PropTypes.func,
    setStateText: PropTypes.func,
    stateText: PropTypes.object
  }

  async componentDidMount() {
    const user = await this.props.domain.get('current_users_use_case').execute()
    const text = await this.props.domain
      .get('get_next_evaluation_texts_use_case')
      .execute({user})
    this.props.setStateText(text)
  }

  render() {
    const {stateText, handleClickSkipButton} = this.props
    return (
      <LayoutEvaluation text={stateText}>
        <LayoutEvaluation.Canvas />
        <LayoutEvaluation.Quiz
          onClickSave={() => console.log('SAVE')}
          onClickSkip={handleClickSkipButton}
        >
          <QualityQuiz
            onChangeGrade={grade => console.log(`NEXT GRADE ${grade}`)}
          />
        </LayoutEvaluation.Quiz>
      </LayoutEvaluation>
    )
  }
}

export default Quality
