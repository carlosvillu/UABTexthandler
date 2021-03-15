import React from 'react'
import PropTypes from 'prop-types'

import FloatingActionButton from 'material-ui/FloatingActionButton'
import GetApp from 'material-ui/svg-icons/action/get-app'

export default class DownloaderCSV extends React.PureComponent {
  static propTypes = {
    csv: PropTypes.array,
    filename: PropTypes.string,
    handleClickFlatButton: PropTypes.func
  }

  render() {
    const {handleClickFlatButton, csv} = this.props

    if (!Array.isArray(csv) || csv.length === 0) {
      return null
    }

    return (
      <div className="DownloaderCSV">
        <FloatingActionButton
          className="DownloaderCSV-downloadbutton"
          onClick={handleClickFlatButton}
        >
          <GetApp />
        </FloatingActionButton>
      </div>
    )
  }
}
