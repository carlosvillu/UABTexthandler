import React from 'react'
import PropTypes from 'prop-types'

import ReactTable from 'react-table'

class TableSkipEvaluations extends React.PureComponent {
  static propTypes = {
    domain: PropTypes.object,
    i18n: PropTypes.object,
    setStateSkips: PropTypes.func,
    stateSkips: PropTypes.array,
    title: PropTypes.string
  }

  async componentDidMount() {
    const {setStateSkips, domain} = this.props
    setStateSkips(
      await domain.get('get_stats_skipped_evaluations_use_case').execute()
    )
  }

  componentWillUnmount() {}

  render() {
    const {i18n, stateSkips, title} = this.props

    return (
      <div className="TableSkipEvaluations">
        <h2 className="TableSkipEvaluations-Title">{title}</h2>
        <ReactTable
          data={stateSkips}
          columns={[
            {
              Header: i18n.t('TABLE_SKIPS_EVALUATIONS_ID_FILE'),
              accessor: 'idFile'
            },
            {
              Header: i18n.t('TABLE_SKIPS_EVALUATIONS_QUALITY'),
              accessor: 'quality'
            },
            {
              Header: i18n.t('TABLE_SKIPS_EVALUATIONS_STRUCTURE'),
              accessor: 'structure'
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

export default TableSkipEvaluations
