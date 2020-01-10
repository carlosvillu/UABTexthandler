import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

class CanvasTexto extends PureComponent {
  static propTypes = {
    children: PropTypes.string,
    domain: PropTypes.object,
    i18n: PropTypes.object,
    prompt: PropTypes.string,
    setStateCurrentUser: PropTypes.func,
    stateCurrentUser: PropTypes.object,
    text: PropTypes.object
  }

  static defaultProps = {children: ''}

  async componentDidMount() {
    const user = await this.props.domain.get('current_users_use_case').execute()
    this.props.setStateCurrentUser(user)
  }

  render() {
    const {children, text, i18n, prompt, stateCurrentUser} = this.props
    const noQuotesPrompt = prompt.replace('"', '')

    if (!stateCurrentUser) {
      return null
    }

    return (
      <div className="CanvasTexto">
        <h2 className="CanvasTexto-student">
          <span className="CanvasTexto-student">
            {i18n.t('CANVASTEXTO_STUDENT')}:
          </span>
          {stateCurrentUser?.isAdmin && (
            <span className="CanvasTexto-number">{`${text.idText}-${text.time}-${text.gender}(${text.level})`}</span>
          )}
          {!stateCurrentUser?.isAdmin && (
            <span className="CanvasTexto-number">{text.student}</span>
          )}
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
