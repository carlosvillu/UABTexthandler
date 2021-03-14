import React from 'react'
import PropTypes from 'prop-types'

import SelectorDashboard from '../../components/SelectorDashboard'
import TableCSV from '../../components/TableCSV'
import DownloaderCSV from '../../components/DownloaderCSV'

const AdminDashboard = ({
  i18n,
  stateCSV,
  statefilters,
  setStateCSV,
  setStateFilters
}) => {
  const title = Object.values(statefilters).join('_')
  return (
    <div className="AdminDashboard">
      <div className="AdminDashboard-selectors">
        <SelectorDashboard
          onChangeCSV={({csv, filters}) => {
            setStateFilters(filters)
            setStateCSV(csv)
          }}
        />
      </div>
      <div className="AdminDashboard-table">
        <TableCSV
          numberOfResults={csv => csv.filter(row => row.fileID !== '').length}
          findHeaderProto={csv => csv.find(row => row.fileID !== '')}
          csv={stateCSV}
          title={title}
        />
      </div>
      <DownloaderCSV
        findHeaderProto={csv => csv.find(row => row.fileID !== '')}
        csv={stateCSV}
        filename={title}
      />
    </div>
  )
}

AdminDashboard.propTypes = {
  i18n: PropTypes.object,
  stateCSV: PropTypes.array,
  statefilters: PropTypes.object,
  setStateCSV: PropTypes.func,
  setStateFilters: PropTypes.func
}

export default AdminDashboard
