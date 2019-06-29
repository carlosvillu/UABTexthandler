import React from 'react'
import PropTypes from 'prop-types'

import Downloader from '../../components/Downloader'
import TableStructureEvaluations from '../../components/TableStructureEvaluations'

const AdminEvaluations = ({i18n}) => (
  <div className="AdminEvaluations">
    <TableStructureEvaluations />
    <Downloader />
  </div>
)

AdminEvaluations.propTypes = {
  i18n: PropTypes.object
}

export default AdminEvaluations
