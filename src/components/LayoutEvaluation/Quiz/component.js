import React from 'react'
import PropTypes from 'prop-types'

import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'

const Quiz = ({children, text, i18n, onClickSkip, onClickSave}) => {
  return (
    <div className="LayoutEvaluation-BodyQuiz">
      {children}
      {text && (
        <div className="LayoutEvaluation-buttons">
          <FlatButton
            label={i18n.t('LAYOUT_EVALUATION_QUIZ_BUTTON_SKIP')}
            onClick={onClickSkip}
          />
          <RaisedButton
            label={i18n.t('LAYOUT_EVALUATION_QUIZ_BUTTON_SAVE')}
            onClick={onClickSave}
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
  onClickSave: PropTypes.func,
  onClickSkip: PropTypes.func,
  text: PropTypes.shape({
    student: PropTypes.string,
    normalize: PropTypes.string
  })
}

export default Quiz
