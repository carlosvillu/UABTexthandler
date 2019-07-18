import React from 'react'
import PropTypes from 'prop-types'

import Downloader from '../../components/Downloader'
import TableStructureEvaluations from '../../components/TableStructureEvaluations'
import TableQualityEvaluations from '../../components/TableQualityEvaluations'
import TableSkipEvaluations from '../../components/TableSkipEvaluations'
import TableTextsWithoutQualityEvaluations from '../../components/TableTextsWithoutQualityEvaluations'

const AdminEvaluations = ({i18n}) => (
  <div className="AdminEvaluations">
    <TableStructureEvaluations
      tip={false}
      title={i18n.t('ADMIN_EVALUATIONS_STUCTURE_TITLE')}
    />
    <TableQualityEvaluations
      tip={false}
      title={i18n.t('ADMIN_EVALUATIONS_QUALITY_TITLE')}
    />
    <TableTextsWithoutQualityEvaluations
      tip={false}
      title={i18n.t('ADMIN_EVALUATIONS_TEXTS_WITHOUT_QUALITY_TITLE')}
    />
    <TableSkipEvaluations title={i18n.t('ADMIN_EVALUATIONS_SKIP_TITLE')} />
    <Downloader />
  </div>
)

AdminEvaluations.propTypes = {
  i18n: PropTypes.object
}

export default AdminEvaluations
