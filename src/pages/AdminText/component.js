import React from 'react'
import PropTypes from 'prop-types'

import Uploader from '../../components/Uploader'
import TableTexts from '../../components/TableTexts'

const AdminText = ({i18n}) => (
  <div className="UploadText">
    <TableTexts />
    <Uploader />
  </div>
)

AdminText.propTypes = {
  i18n: PropTypes.object
}

export default AdminText
