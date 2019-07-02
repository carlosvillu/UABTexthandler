import React from 'react'
import PropTypes from 'prop-types'

import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

import NumberSelector from '../NumberSelector'

const QualityQuiz = ({
  active,
  domain,
  form,
  handleChangeQuality,
  handleChangeSelect,
  i18n
}) => {
  const {grade, quality} = form
  const {SECOND_ESO, SECOND_PRIMARY, FOURTH_PRIMARY} = domain
    .get('config')
    .get('GRADES')

  return (
    <div className="QualityQuiz">
      <div className="QualityQuiz-Row">
        <SelectField
          floatingLabelText={i18n.t('QUALITY_QUIZ_SELECT_GRADE')}
          value={grade}
          onChange={handleChangeSelect}
        >
          <MenuItem
            value={SECOND_PRIMARY}
            primaryText={i18n.t('QUALITY_QUIZ_OPTION_SECOND_PRIMARY')}
          />
          <MenuItem
            value={FOURTH_PRIMARY}
            primaryText={i18n.t('QUALITY_QUIZ_OPTION_FOURTH_PRIMARY')}
          />
          <MenuItem
            value={SECOND_ESO}
            primaryText={i18n.t('QUALITY_QUIZ_OPTION_SECOND_ESO')}
          />
        </SelectField>
      </div>
      <div className="QualityQuiz-Row">
        <NumberSelector
          hidden={!active}
          max={QualityQuiz.MAX_QUALITY_TEXT}
          label={i18n.t('QUALITY_QUIZ_NUMBER_SELECTR_LABEL')}
          onChangeNumber={handleChangeQuality}
          number={quality}
        />
      </div>
    </div>
  )
}

QualityQuiz.MAX_QUALITY_TEXT = 6

QualityQuiz.propTypes = {
  active: PropTypes.bool,
  domain: PropTypes.object,
  form: PropTypes.object,
  handleChangeQuality: PropTypes.func,
  handleChangeSelect: PropTypes.func,
  i18n: PropTypes.object
}

export default QualityQuiz
