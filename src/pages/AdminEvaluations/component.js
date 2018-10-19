import React from 'react'
import PropTypes from 'prop-types'

import Uploader from '../../components/Uploader'
import TableEvaluations from '../../components/TableEvaluations'

const AdminEvaluations = ({i18n}) => (
  <div className="AdminEvaluations">
    <TableEvaluations />
    <Uploader />
  </div>
)

AdminEvaluations.propTypes = {
  i18n: PropTypes.object
}

export default AdminEvaluations
