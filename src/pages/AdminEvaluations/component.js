import React from 'react'
import PropTypes from 'prop-types'

import Downloader from '../../components/Downloader'
import TableEvaluations from '../../components/TableEvaluations'

const AdminEvaluations = ({i18n}) => (
  <div className="AdminEvaluations">
    <TableEvaluations />
    <Downloader />
  </div>
)

AdminEvaluations.propTypes = {
  i18n: PropTypes.object
}

export default AdminEvaluations
