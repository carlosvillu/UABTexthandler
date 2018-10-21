import React from 'react'
import PropTypes from 'prop-types'

import FloatingActionButton from 'material-ui/FloatingActionButton'
import GetApp from 'material-ui/svg-icons/action/get-app'

export default class Downloader extends React.PureComponent {
  static propTypes = {handleClickFlatButon: PropTypes.func}
  render() {
    const {handleClickFlatButon} = this.props

    return (
      <div className="Downloader">
        <FloatingActionButton
          className="Downloader-downloadbutton"
          onClick={handleClickFlatButon}
        >
          <GetApp />
        </FloatingActionButton>
      </div>
    )
  }
}
