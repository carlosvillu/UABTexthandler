import Downloader from './component'

import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'

export default compose(
  withHandlers({
    handleClickFlatButton: props => evt => {}
  })
)(Downloader)
