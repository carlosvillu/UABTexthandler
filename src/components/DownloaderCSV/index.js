import DownloaderCSV from './component'

import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'

import saveFile from '../../lib/saveFile'

const SEPARATOR = ';'

export default compose(
  withHandlers({
    handleClickFlatButton: props => () => {
      const proto = props.findHeaderProto(props.csv)
      const headers = Object.keys(proto)
      const csv = props.csv.reduce((acc, current) => {
        const row = headers
          .map(key => `"${current[key] ?? ''}"`)
          .join(SEPARATOR)
        return acc + '\n' + row
      }, headers.join(SEPARATOR))

      saveFile(
        new window.Blob([csv], {type: 'text/csv;charset=utf-8'}),
        props.filename
      )
    }
  })
)(DownloaderCSV)
