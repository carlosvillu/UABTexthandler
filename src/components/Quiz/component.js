import React from 'react'
import PropTypes from 'prop-types'

import Toggle from 'material-ui/Toggle'
import Slider from 'material-ui/Slider'
import FlatButton from 'material-ui/FlatButton'

import Reason from '../Reason'

const Row = ({children}) => {
  const [first, last] = React.Children.toArray(children)
  return (
    <div className="Quiz-row">
      <div className="Quiz-cell">{first}</div>
      <div className="Quiz-cell">{last}</div>
    </div>
  )
}
Row.propTypes = {children: PropTypes.array}

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
    handleChangeToggle: PropTypes.func,
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
      handleChangeToggle,
      handleClickFlatButton,
      i18n
    } = this.props

    return (
      <div className="Quiz">
        <Row>
          <Toggle
            label={i18n.t('QUIZ_INTRODUCTION')}
            onToggle={handleChangeToggle('introduction')}
          />
          <Toggle
            label={i18n.t('QUIZ_OPINION')}
            onToggle={handleChangeToggle('opinion')}
          />
        </Row>
        {evaluation.reasons.map((reason, index) => (
          <Reason
            title={`${i18n.t('QUIZ_REASON')} ${index + 1}`}
            key={index}
            justification={reason.justification}
            onChange={handleChangeReason(index)}
            type={reason.type}
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
          <Toggle
            label={i18n.t('QUIZ_EXTENSIVE')}
            onToggle={handleChangeToggle('extensive')}
          />
          <Toggle
            label={i18n.t('QUIZ_SYNTHETIC')}
            onToggle={handleChangeToggle('synthetic')}
          />
        </Row>
        <Row>
          <Toggle
            label={i18n.t('QUIZ_OPINION_OTHER_TYPE')}
            onToggle={handleChangeToggle('otherOpinion')}
          />
          <Toggle
            label={i18n.t('QUIZ_OPINION_CONECTOR')}
            onToggle={handleChangeToggle('opinionConector')}
          />
        </Row>
        <Row>
          <EvaluationSlider
            label={`${i18n.t('QUIZ_REASON_CONECTORS')} ${
              evaluation.reasonConectors
            }`}
            onChange={handleChangeSlider('reasonConectors')}
            value={evaluation.reasonConectors}
          />
          <EvaluationSlider
            label={`${i18n.t('QUIZ_REASON_EXPLICATION')} ${
              evaluation.reasonExplication
            }`}
            onChange={handleChangeSlider('reasonExplication')}
            value={evaluation.reasonExplication}
          />
        </Row>
        <Row>
          <Toggle
            label={i18n.t('QUIZ_CONCLUSION')}
            onToggle={handleChangeToggle('conclusion')}
          />
          <EvaluationSlider
            label={`${i18n.t('QUIZ_OTHER_CONECTORS')} ${
              evaluation.otherConectors
            }`}
            onChange={handleChangeSlider('otherConectors')}
            value={evaluation.otherConectors}
          />
        </Row>
        <Row>
          <EvaluationSlider
            label={`${i18n.t('QUIZ_QUALITY')} ${evaluation.quality}`}
            min={1}
            max={6}
            onChange={handleChangeSlider('quality')}
            value={evaluation.quality}
          />
          <div />
        </Row>
      </div>
    )
  }
}

export default Quiz
