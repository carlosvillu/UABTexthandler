import React from 'react'
import PropTypes from 'prop-types'

import FloatingActionButton from 'material-ui/FloatingActionButton'
import GetApp from 'material-ui/svg-icons/action/get-app'

export default class Downloader extends React.PureComponent {
  static propTypes = {
    domain: PropTypes.object,
    handleClickFlatButton: PropTypes.func,
    setStateQualityEvaluations: PropTypes.func,
    setStateSkipsEvaluations: PropTypes.func,
    setStateStructureEvaluations: PropTypes.func
  }

  componentDidMount() {
    const {
      domain,
      setStateQualityEvaluations,
      setStateSkipsEvaluations,
      setStateStructureEvaluations
    } = this.props
    this.getStatsStructureEvaluationsUseCase$ = domain
      .get('get_stats_structure_evaluations_use_case')
      .$.execute.subscribe(({params, result}) => {
        setStateStructureEvaluations(result)
      })
    this.getStatsQualityEvaluationsUseCase$ = domain
      .get('get_stats_quality_evaluations_use_case')
      .$.execute.subscribe(({params, result}) => {
        setStateQualityEvaluations(result)
      })
    this.getStatsSkipsEvaluationsUseCase$ = domain
      .get('get_stats_skipped_evaluations_use_case')
      .$.execute.subscribe(({params, result}) => {
        setStateSkipsEvaluations(result)
      })
  }

  componentWillUnmount() {
    this.getStatsStructureEvaluationsUseCase$.dispose()
    this.getStatsQualityEvaluationsUseCase$.dispose()
    this.getStatsSkipsEvaluationsUseCase$.dispose()
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
