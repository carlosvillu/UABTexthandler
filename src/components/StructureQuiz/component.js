import React from 'react'
import PropTypes from 'prop-types'

import Slider from 'material-ui/Slider'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

import Reason from './Reason'
import RadioButtonGroup from './RadioButtonGroup'
import RangeInput from './RangeInput'

const Row = ({children, fullWidth = false}) => {
  const [first, last] = React.Children.toArray(children)
  return (
    <div className="StructureQuiz-row">
      <div className="StructureQuiz-cell">{first}</div>
      {!fullWidth && <div className="StructureQuiz-cell">{last}</div>}
    </div>
  )
}
Row.propTypes = {children: PropTypes.array, fullWidth: PropTypes.bool}

const EvaluationSlider = ({value, onChange, label, min = 0, max = 10}) => {
  return (
    <div className="Slider">
      <span className="Slider-label">{label}</span>
      <Slider
        style={{width: '100%'}}
        sliderStyle={{margin: '0 0'}}
        min={min}
        max={max}
        step={1}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

EvaluationSlider.propTypes = {
  label: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  onChange: PropTypes.func,
  value: PropTypes.number
}

class StructureQuiz extends React.PureComponent {
  static MAX_REASONS = 20
  static YES = 'YES'
  static NO = 'NO'
  static propTypes = {
    evaluation: PropTypes.object,
    handleChangeReason: PropTypes.func,
    handleChangeSelect: PropTypes.func,
    handleChangeSlider: PropTypes.func,
    handleChangeSwitch: PropTypes.func,
    handleChangeTextArea: PropTypes.func,
    handleClickFlatButton: PropTypes.func,
    i18n: PropTypes.object,
    onInit: PropTypes.func
  }

  componentDidMount() {
    const {onInit, evaluation} = this.props
    onInit && onInit(evaluation)
  }

  render() {
    const {
      evaluation,
      handleChangeReason,
      handleChangeSelect,
      handleChangeSlider,
      handleChangeSwitch,
      handleChangeTextArea,
      handleClickFlatButton,
      i18n
    } = this.props

    return (
      <div className="StructureQuiz">
        <Row>
          <RadioButtonGroup
            name="introduction"
            label={i18n.t('QUIZ_INTRODUCTION')}
            onChange={handleChangeSwitch('introduction')}
          />
          <RadioButtonGroup
            name="opinion"
            label={i18n.t('QUIZ_OPINION')}
            onChange={handleChangeSwitch('opinion')}
          />
        </Row>
        {evaluation.reasons.map((reason, index) => (
          <Reason
            isLast={evaluation.reasons.length === index + 1}
            justification={reason.justification}
            key={index}
            onChange={handleChangeReason(index)}
            title={`${i18n.t('QUIZ_REASON')} ${index + 1}`}
            types={reason.types}
          />
        ))}
        <Row>
          <FlatButton
            disabled={evaluation.reasons.length === StructureQuiz.MAX_REASONS}
            label="Add Reason"
            primary
            onClick={handleClickFlatButton}
          />
          <div />
        </Row>
        <Row>
          <RadioButtonGroup
            name="endConclusion"
            label={i18n.t('QUIZ_END_CONCLUSION')}
            onChange={handleChangeSwitch('endConclusion')}
          />
          <SelectField
            floatingLabelText={i18n.t('QUIZ_END_TYPE_CONCLUSION')}
            onChange={handleChangeSelect('endTypeConclusion')}
            disabled={
              !evaluation.endConclusion ||
              evaluation.endConclusion === StructureQuiz.NO
            }
            value={evaluation.endTypeConclusion}
          >
            <MenuItem value={null} primaryText="" />
            <MenuItem
              value="extensive"
              primaryText={i18n.t('QUIZ_EXTENSIVE')}
            />
            <MenuItem
              value="synthetic"
              primaryText={i18n.t('QUIZ_SYNTHETIC')}
            />
            <MenuItem
              value="thesis_rep"
              primaryText={i18n.t('QUIZ_THESIS_REP')}
            />
          </SelectField>
        </Row>
        <Row>
          <RadioButtonGroup
            name="opinionConector"
            label={i18n.t('QUIZ_OPINION_CONECTOR')}
            onChange={handleChangeSwitch('opinionConector')}
          />
          <div />
        </Row>
        <Row>
          <RangeInput
            label={i18n.t('QUIZ_REASON_CONECTORS')}
            onChange={handleChangeSlider('reasonConectors')}
            value={evaluation.reasonConectors}
          />
          <RangeInput
            label={i18n.t('QUIZ_REASON_EXPLICATION')}
            onChange={handleChangeSlider('reasonExplication')}
            value={evaluation.reasonExplication}
          />
        </Row>
        <Row>
          <RadioButtonGroup
            name="conclusion"
            label={i18n.t('QUIZ_CONCLUSION')}
            onChange={handleChangeSwitch('conclusion')}
          />
          <div />
        </Row>
        <Row fullWidth>
          <TextField
            fullWidth
            hintText={i18n.t('QUIZ_FREE_TEXT_HINT')}
            floatingLabelText={i18n.t('QUIZ_FREE_TEXT_LABEL')}
            multiLine
            rows={2}
            value={evaluation.freeText}
            onChange={handleChangeTextArea}
          />
          <div />
        </Row>
      </div>
    )
  }
}

export default StructureQuiz
