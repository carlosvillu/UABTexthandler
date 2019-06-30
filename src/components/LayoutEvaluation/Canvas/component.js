import React from 'react'
import PropTypes from 'prop-types'

import CanvasTexto from '../../../components/CanvasTexto'

const Canvas = ({text, i18n}) => {
  return (
    <div className="LayoutEvaluation-BodyCanvas">
      {text ? (
        <CanvasTexto student={text.student} prompt={text.prompt}>
          {text.normalize}
        </CanvasTexto>
      ) : (
        <h2>{i18n.t('LAYOUT_EVALUATION_CANVAS_LOOKING_TEXTS')}</h2>
      )}
    </div>
  )
}

Canvas.propTypes = {
  i18n: PropTypes.object,
  text: PropTypes.shape({
    normalize: PropTypes.string,
    prompt: PropTypes.string,
    student: PropTypes.string
  })
}

export default Canvas
