import React from 'react'
import PropTypes from 'prop-types'

import Paper from 'material-ui/Paper'

class CanvasTexto extends React.PureComponent {
  static propTypes = {
    text: PropTypes.string
  }
  render() {
    const {text} = this.props
    return (
      <div className="CanvasTexto">
        <Paper className="CanvasTexto-canvas" zDepth={1}>
          {text}
        </Paper>
      </div>
    )
  }
}

export default CanvasTexto
