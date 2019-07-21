import React from 'react'
import PropTypes from 'prop-types'

import ReactTable from 'react-table'

class TableTextsWithoutQualityEvaluations extends React.PureComponent {
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
      await domain
        .get('get_stats_texts_without_quality_evaluations_use_case')
        .execute()
    )
  }

  render() {
    const {i18n, stateEvaluations, title} = this.props

    return (
      <div className="TableTextsWithoutQualityEvaluations">
        <h2 className="TableTextsWithoutQualityEvaluations-Title">{title}</h2>
        <ReactTable
          data={stateEvaluations}
          columns={[
            {
              Header: i18n.t('TABLE_TEXTS_WITHOUT_QUALITY_EVALUATION_ID_FILE'),
              accessor: 'idFile'
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
          <em>{i18n.t('TABLE_TEXTS_WITHOUT_QUALITY_TIP')}</em>
        </div>
      </div>
    )
  }
}

export default TableTextsWithoutQualityEvaluations
