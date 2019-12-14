import React from 'react'
import PropTypes from 'prop-types'

import ReactTable from 'react-table'

class TableTexts extends React.PureComponent {
  static propTypes = {
    stateTexts: PropTypes.array,
    setStateTexts: PropTypes.func,
    i18n: PropTypes.object,
    domain: PropTypes.object
  }

  async componentDidMount() {
    const {domain, setStateTexts} = this.props
    const texts = await domain.get('get_all_texts_use_case').execute()
    if (texts.length) {
      setStateTexts(texts)
    }
    this.uploadTextsUseCase$ = domain
      .get('upload_texts_use_case')
      .$.execute.subscribe(({params, result}) => {
        setStateTexts([...this.props.stateTexts, result])
      })
  }

  componentWillUnmount() {
    this.uploadTextsUseCase$.dispose()
  }

  render() {
    const {i18n, stateTexts: texts} = this.props

    return (
      <div className="TableTexts">
        <ReactTable
          data={texts}
          columns={[
            {Header: i18n.t('TABLETEXTS_ID'), accessor: 'idText'},
            {Header: i18n.t('TABLETEXTS_STUDENT'), accessor: 'student'},
            {Header: i18n.t('TABLETEXTS_SCHOOL'), accessor: 'school'},
            {Header: i18n.t('TABLETEXTS_LEVEL'), accessor: 'level'},
            {Header: i18n.t('TABLETEXTS_ROOM'), accessor: 'room'},
            {Header: i18n.t('TABLETEXTS_GENDER'), accessor: 'gender'},
            {Header: i18n.t('TABLETEXTS_TIME'), accessor: 'time'},
            {
              Header: i18n.t('TABLETEXT_EVALUATIONS'),
              id: 'evaluations',
              accessor: text => Object.keys(text.evaluations || {}).length
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
          <em>{i18n.t('TABLETEXTS_TIP')}</em>
        </div>
      </div>
    )
  }
}

export default TableTexts
