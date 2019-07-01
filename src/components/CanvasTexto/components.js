import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

class CanvasTexto extends PureComponent {
  static propTypes = {
    children: PropTypes.string,
    i18n: PropTypes.object,
    prompt: PropTypes.string,
    student: PropTypes.number
  }
  static defaultProps = {children: ''}

  render() {
    const {children, student, i18n, prompt} = this.props
    const noQuotesPrompt = prompt.replace('"', '')
    return (
      <div className="CanvasTexto">
        <h2 className="CanvasTexto-student">
          <span className="CanvasTexto-student">
            {i18n.t('CANVASTEXTO_STUDENT')}:
          </span>
          <span className="CanvasTexto-number">{student}</span>
          <span className="CanvasTexto-prompt">{noQuotesPrompt}</span>
        </h2>
        <div
          className="CanvasTexto-content"
          dangerouslySetInnerHTML={{
            __html: children
              .split(/\n\n/)
              .reduce(
                (acc, paragraph) => (acc += paragraph + '</p><br/><p>'),
                '<p>'
              )
          }}
        />
      </div>
    )
  }
}

export default CanvasTexto
