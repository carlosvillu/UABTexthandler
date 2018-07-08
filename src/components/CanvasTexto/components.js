import React from 'react'
import PropTypes from 'prop-types'

import Paper from 'material-ui/Paper'

class CanvasTexto extends React.PureComponent {
  static propTypes = {
    children: PropTypes.string,
    i18n: PropTypes.object,
    student: PropTypes.number
  }
  static defaultProps = {children: ''}

  render() {
    const {children, student, i18n} = this.props
    return (
      <div className="CanvasTexto">
        <Paper className="CanvasTexto-canvas" zDepth={1}>
          <h2 className="CanvasTexto-student">
            <span className="CanvasTexto-student">
              {i18n.t('CANVASTEXTO_STUDENT')}:
            </span>
            {student}
          </h2>
          <div
            dangerouslySetInnerHTML={{
              __html: children
                .split(/\n/)
                .reduce(
                  (acc, paragraph) => (acc += paragraph + '</p><p>'),
                  '<p>'
                )
            }}
          />
        </Paper>
      </div>
    )
  }
}

export default CanvasTexto
