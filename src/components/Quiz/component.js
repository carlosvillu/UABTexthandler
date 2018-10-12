import React from 'react'
import PropTypes from 'prop-types'

import Slider from 'material-ui/Slider'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'

import Reason from './Reason'
import RadioButtonGroup from './RadioButtonGroup'
import RangeInput from './RangeInput'

const Row = ({children, fullWidth = false}) => {
  const [first, last] = React.Children.toArray(children)
  return (
    <div className="Quiz-row">
      <div className="Quiz-cell" style={{width: fullWidth ? '100%' : '45%'}}>
        {first}
      </div>
      <div className="Quiz-cell" style={{width: fullWidth ? '0%' : '45%'}}>
        {last}
      </div>
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

class Quiz extends React.PureComponent {
  static MAX_REASONS = 20
  static propTypes = {
    evaluation: PropTypes.object,
    handleChangeReason: PropTypes.func,
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
      handleChangeSlider,
      handleChangeSwitch,
      handleChangeTextArea,
      handleClickFlatButton,
      i18n
    } = this.props

    return (
      <div className="Quiz">
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
            justification={reason.justification}
            key={index}
            onChange={handleChangeReason(index)}
            title={`${i18n.t('QUIZ_REASON')} ${index + 1}`}
            types={reason.types}
          />
        ))}
        <Row>
          <FlatButton
            disabled={evaluation.reasons.length === Quiz.MAX_REASONS}
            label="Add Reason"
            primary
            onClick={handleClickFlatButton}
          />
          <div />
        </Row>
        <Row>
          <RadioButtonGroup
            name="extensive"
            label={i18n.t('QUIZ_EXTENSIVE')}
            onChange={handleChangeSwitch('extensive')}
          />
          <RadioButtonGroup
            name="synthetic"
            label={i18n.t('QUIZ_SYNTHETIC')}
            onChange={handleChangeSwitch('synthetic')}
          />
        </Row>
        <Row>
          <RadioButtonGroup
            name="otherOpinion"
            label={i18n.t('QUIZ_OPINION_OTHER_TYPE')}
            onChange={handleChangeSwitch('otherOpinion')}
          />
          <RadioButtonGroup
            name="opinionConector"
            label={i18n.t('QUIZ_OPINION_CONECTOR')}
            onChange={handleChangeSwitch('opinionConector')}
          />
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
          <RangeInput
            label={i18n.t('QUIZ_OTHER_CONECTORS')}
            onChange={handleChangeSlider('otherConectors')}
            value={evaluation.otherConectors}
          />
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

export default Quiz
