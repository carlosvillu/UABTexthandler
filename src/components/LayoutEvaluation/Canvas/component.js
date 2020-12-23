import React from 'react'
import PropTypes from 'prop-types'

import CanvasTexto from '../../../components/CanvasTexto'

const Canvas = ({text, noMoreTexts, i18n}) => {
  return (
    <div className="LayoutEvaluation-BodyCanvas">
      {text ? (
        <CanvasTexto text={text} prompt={text.prompt}>
          {text.normalize}
        </CanvasTexto>
      ) : (
        <h2>
          {!noMoreTexts
            ? i18n.t('LAYOUT_EVALUATION_CANVAS_LOOKING_TEXTS')
            : i18n.t('LAYOUT_EVALUATION_CANVAS_NO_MORE_TEXTS')}
        </h2>
      )}
    </div>
  )
}

Canvas.propTypes = {
  i18n: PropTypes.object,
  noMoreTexts: PropTypes.bool,
  text: PropTypes.shape({
    normalize: PropTypes.string,
    prompt: PropTypes.string,
    student: PropTypes.string
  })
}

export default Canvas
