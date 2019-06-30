import React from 'react'
import PropTypes from 'prop-types'

import ReactTable from 'react-table'

class TableQualityEvaluations extends React.PureComponent {
  static propTypes = {
    domain: PropTypes.object,
    i18n: PropTypes.object,
    setStateEvaluations: PropTypes.func,
    stateEvaluations: PropTypes.array,
    title: PropTypes.string
  }

  async componentDidMount() {
    const {setStateEvaluations, domain} = this.props
    setStateEvaluations(
      await domain.get('get_stats_quality_evaluations_use_case').execute()
    )
  }

  componentWillUnmount() {}

  render() {
    const {i18n, stateEvaluations, title} = this.props

    return (
      <div className="TableQualityEvaluations">
        <h2 className="TableQualityEvaluations-Title">{title}</h2>
        <ReactTable
          data={stateEvaluations}
          columns={[
            {
              Header: i18n.t('TABLE_QUALITY_EVALUATION_EVALUATOR'),
              accessor: 'evaluator'
            },
            {
              Header: i18n.t('TABLE_QUALITY_EVALUATION_ID_FILE'),
              accessor: 'idFile'
            },
            {
              Header: i18n.t('TABLE_QUALITY_EVALUATION_QUALITY'),
              accessor: 'quality'
            }
          ]}
          defaultPageSize={20}
          className="-striped -highlight"
          style={{
            height: '80vh'
          }}
        />
        <br />
        <div style={{textAlign: 'center'}}>
          <em>{i18n.t('TABLE_QUALITY_TIP')}</em>
        </div>
      </div>
    )
  }
}

export default TableQualityEvaluations
