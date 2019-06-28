import React from 'react'
import PropTypes from 'prop-types'

import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

const QualityQuiz = ({i18n, quality, handleChangeSelect}) => {
  const {grade} = quality
  return (
    <div className="QualityQuiz">
      <SelectField
        floatingLabelText={i18n.t('QUALITY_QUIZ_SELECT_GRADE')}
        value={grade}
        onChange={handleChangeSelect}
      >
        <MenuItem
          value={2}
          primaryText={i18n.t('QUALITY_QUIZ_OPTION_SECOND_PRIMARY')}
        />
        <MenuItem
          value={3}
          primaryText={i18n.t('QUALITY_QUIZ_OPTION_FOURTH_PRIMARY')}
        />
        <MenuItem
          value={4}
          primaryText={i18n.t('QUALITY_QUIZ_OPTION_SECOND_ESO')}
        />
      </SelectField>
    </div>
  )
}

QualityQuiz.propTypes = {
  handleChangeSelect: PropTypes.func,
  i18n: PropTypes.object,
  quality: PropTypes.object
}

export default QualityQuiz
