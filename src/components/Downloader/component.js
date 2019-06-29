import React from 'react'
import PropTypes from 'prop-types'

import FloatingActionButton from 'material-ui/FloatingActionButton'
import GetApp from 'material-ui/svg-icons/action/get-app'

export default class Downloader extends React.PureComponent {
  static propTypes = {
    domain: PropTypes.object,
    handleClickFlatButton: PropTypes.func,
    setStateEvaluations: PropTypes.func
  }

  componentDidMount() {
    const {setStateEvaluations, domain} = this.props
    this.getStatsStructureEvaluationsUseCase$ = domain
      .get('get_stats_structure_evaluations_use_case')
      .$.execute.subscribe(({params, result}) => {
        setStateEvaluations(result)
      })
  }

  componentWillUnmount() {
    this.getStatsStructureEvaluationsUseCase$.dispose()
  }

  render() {
    const {handleClickFlatButton} = this.props

    return (
      <div className="Downloader">
        <FloatingActionButton
          className="Downloader-downloadbutton"
          onClick={handleClickFlatButton}
        >
          <GetApp />
        </FloatingActionButton>
      </div>
    )
  }
}
