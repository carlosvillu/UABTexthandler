import React from 'react'
import PropTypes from 'prop-types'

import ReactTable from 'react-table'

class TableEvaluations extends React.PureComponent {
  static propTypes = {i18n: PropTypes.object, domain: PropTypes.object}
  state = {texts: []}
  async componentDidMount() {
    const evaluations = await this.props.domain
      .get('get_stats_evaluations_use_case')
      .execute()
    console.log(evaluations) //eslint-disable-line
  }

  componentWillUnmount() {
    // this.uploadTextsUseCase$.dispose()
  }

  render() {
    const {i18n} = this.props
    const {texts} = this.state
    return (
      <div className="TableEvaluations">
        <ReactTable
          data={texts}
          columns={[]}
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
