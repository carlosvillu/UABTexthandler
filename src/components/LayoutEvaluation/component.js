import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Canvas from './Canvas'
import Quiz from './Quiz'

const LayoutEvaluation = ({children, text}) => {
  return (
    <div className="LayoutEvaluation">
      <Helmet />
      <div className="LayoutEvaluation-Body">
        {React.Children.map(children, element =>
          React.cloneElement(element, {text})
        )}
      </div>
    </div>
  )
}

LayoutEvaluation.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  text: PropTypes.shape({
    student: PropTypes.string,
    normalize: PropTypes.string
  })
}

LayoutEvaluation.Canvas = Canvas
LayoutEvaluation.Quiz = Quiz

export default LayoutEvaluation
