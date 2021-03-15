import React from 'react'
import PropTypes from 'prop-types'

import ReactTable from 'react-table'

class TableCSV extends React.PureComponent {
  static propTypes = {
    domain: PropTypes.object,
    numberOfResults: PropTypes.number,
    findHeaderProto: PropTypes.func,
    i18n: PropTypes.object,
    csv: PropTypes.array,
    title: PropTypes.string
  }

  render() {
    const {i18n, csv, title, findHeaderProto, numberOfResults} = this.props

    if (!Array.isArray(csv) || csv.length === 0) {
      return <h1>{i18n.t('TableCSV_WAITING_CSV')}</h1>
    }

    const proto = findHeaderProto(csv)

    if (!proto) {
      return <h1>{i18n.t('TableCSV_NO_RESULTS')}</h1>
    }

    const num = numberOfResults(csv)

    return (
      <div className="TableCSV">
        <h2 className="TableCSV-Title">{`${title} (${num})`}</h2>
        <ReactTable
          data={csv}
          columns={Object.keys(proto).map(key => ({
            Header: key.toUpperCase(),
            accessor: key
          }))}
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

export default TableCSV
