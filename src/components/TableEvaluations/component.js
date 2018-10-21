import React from 'react'
import PropTypes from 'prop-types'

import ReactTable from 'react-table'

class TableEvaluations extends React.PureComponent {
  static propTypes = {
    domain: PropTypes.object,
    i18n: PropTypes.object,
    setStateEvaluations: PropTypes.func,
    stateEvaluations: PropTypes.array
  }

  async componentDidMount() {
    const {setStateEvaluations, domain} = this.props
    setStateEvaluations(
      await domain.get('get_stats_evaluations_use_case').execute()
    )
  }

  componentWillUnmount() {}

  render() {
    const {i18n, stateEvaluations} = this.props

    return (
      <div className="TableEvaluations">
        <ReactTable
          data={stateEvaluations}
          columns={[
            {Header: i18n.t('TABLEEVALUATIONS_EMAIL'), accessor: 'evaluator'},
            {Header: i18n.t('TABLEEVALUATIONS_TEXT_ID'), accessor: 'idFile'},
            {
              Header: i18n.t('TABLEEVALUATIONS_INTRODUCTION'),
              accessor: 'introduction'
            },
            {Header: i18n.t('TABLEEVALUATIONS_THESIS'), accessor: 'thesis'},
            {Header: i18n.t('TABLEEVALUATIONS_REASONS'), accessor: 'reasons'},
            {
              Header: i18n.t('TABLEEVALUATIONS_EXP_EXAMPLE'),
              accessor: 'expExample'
            },
            {
              Header: i18n.t('TABLEEVALUATIONS_EXP_EVIDENCE'),
              accessor: 'expEvidence'
            },
            {
              Header: i18n.t('TABLEEVALUATIONS_EXP_EXPERT'),
              accessor: 'expExpert'
            },
            {
              Header: i18n.t('TABLEEVALUATIONS_EXP_EXPANSION'),
              accessor: 'expExpansion'
            },
            {
              Header: i18n.t('TABLEEVALUATIONS_END_EXTENSIVE'),
              accessor: 'endExtensive'
            },
            {
              Header: i18n.t('TABLEEVALUATIONS_END_SYNTHETIC'),
              accessor: 'endSynthetic'
            },
            {
              Header: i18n.t('TABLEEVALUATIONS_END_THESIS'),
              accessor: 'endThesis'
            },
            {
              Header: i18n.t('TABLEEVALUATIONS_CONN_THESIS'),
              accessor: 'connThesis'
            },
            {
              Header: i18n.t('TABLEEVALUATIONS_CONN_REASONS'),
              accessor: 'connReasons'
            },
            {
              Header: i18n.t('TABLEEVALUATIONS_CONN_EXPLANTIONS'),
              accessor: 'connExplanations'
            },
            {Header: i18n.t('TABLEEVALUATIONS_CONN_END'), accessor: 'connEnd'}
          ]}
          defaultPageSize={20}
          className="-striped -highlight"
          style={{
            height: '80vh'
          }}
        />
        <br />
        <div style={{textAlign: 'center'}}>
          <em>{i18n.t('TABLETEXTS_TIP')}</em>
        </div>
      </div>
    )
  }
}

export default TableEvaluations
