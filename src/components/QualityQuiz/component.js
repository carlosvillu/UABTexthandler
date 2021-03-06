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
  handleChangeSelectGrade,
  handleChangeSelectGenre,
  i18n
}) => {
  const {grade, genre, quality} = form
  const {
    SECOND_PRIMARY,
    THIRD_PRIMARY,
    FOURTH_PRIMARY,
    FIFTH_PRIMARY,
    SIXTH_PRIMARY,
    SECOND_ESO
  } = domain.get('config').get('GRADES')
  const {OPINION, NARRATIVE} = domain.get('config').get('GENRE')

  return (
    <div className="QualityQuiz">
      <div className="QualityQuiz-Row">
        <SelectField
          floatingLabelText={i18n.t('QUALITY_QUIZ_SELECT_GRADE')}
          value={grade}
          onChange={handleChangeSelectGrade}
        >
          <MenuItem
            value={SECOND_PRIMARY}
            primaryText={i18n.t('QUALITY_QUIZ_OPTION_SECOND_PRIMARY')}
          />
          <MenuItem
            value={THIRD_PRIMARY}
            primaryText={i18n.t('QUALITY_QUIZ_OPTION_THIRD_PRIMARY')}
          />
          <MenuItem
            value={FOURTH_PRIMARY}
            primaryText={i18n.t('QUALITY_QUIZ_OPTION_FOURTH_PRIMARY')}
          />
          <MenuItem
            value={FIFTH_PRIMARY}
            primaryText={i18n.t('QUALITY_QUIZ_OPTION_FIFTH_PRIMARY')}
          />
          <MenuItem
            value={SIXTH_PRIMARY}
            primaryText={i18n.t('QUALITY_QUIZ_OPTION_SIXTH_PRIMARY')}
          />
          <MenuItem
            value={SECOND_ESO}
            primaryText={i18n.t('QUALITY_QUIZ_OPTION_SECOND_ESO')}
          />
        </SelectField>
      </div>
      <div className="QualityQuiz-Row">
        <SelectField
          floatingLabelText={i18n.t('QUALITY_QUIZ_SELECT_GENRE')}
          value={genre}
          onChange={handleChangeSelectGenre}
        >
          <MenuItem
            value={OPINION}
            primaryText={i18n.t('QUALITY_QUIZ_OPTION_OPINION')}
          />
          <MenuItem
            value={NARRATIVE}
            primaryText={i18n.t('QUALITY_QUIZ_OPTION_NARRATIVE')}
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
  handleChangeSelectGrade: PropTypes.func,
  handleChangeSelectGenre: PropTypes.func,
  i18n: PropTypes.object
}

export default QualityQuiz
