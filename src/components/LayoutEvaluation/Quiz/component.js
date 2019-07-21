import React from 'react'
import PropTypes from 'prop-types'

import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'

const Quiz = ({
  children,
  handleClickSave,
  handleClickSkip,
  i18n,
  stateDisableButtons,
  text
}) => {
  return (
    <div className="LayoutEvaluation-BodyQuiz">
      {children}
      {text && (
        <div className="LayoutEvaluation-buttons">
          <FlatButton
            disabled={stateDisableButtons}
            label={i18n.t('LAYOUT_EVALUATION_QUIZ_BUTTON_SKIP')}
            onClick={handleClickSkip}
          />
          <RaisedButton
            disabled={stateDisableButtons}
            label={i18n.t('LAYOUT_EVALUATION_QUIZ_BUTTON_SAVE')}
            onClick={handleClickSave}
            primary
            style={{margin: 12}}
          />
        </div>
      )}
    </div>
  )
}

Quiz.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  i18n: PropTypes.object,
  handleClickSave: PropTypes.func,
  handleClickSkip: PropTypes.func,
  stateDisableButtons: PropTypes.bool,
  text: PropTypes.shape({
    student: PropTypes.string,
    normalize: PropTypes.string
  })
}

export default Quiz
