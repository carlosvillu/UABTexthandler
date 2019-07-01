import NumberSelector from './component'

import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'

export default compose(
  withHandlers({
    handleClickNumber: props => index => () => {
      props.onChangeNumber(index)
    }
  })
)(NumberSelector)
