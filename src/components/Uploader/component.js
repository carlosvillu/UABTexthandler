import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Paper from 'material-ui/Paper'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import FileUpload from 'material-ui/svg-icons/file/file-upload'
import CircularProgress from 'material-ui/CircularProgress'

class Uploader extends React.PureComponent {
  static propTypes = {
    handleClickFlatButon: PropTypes.func,
    handleDialogClose: PropTypes.func,
    handleDropPaperTexts: PropTypes.func,
    handleDropPaperPrompts: PropTypes.func,
    handleInputChangeTexts: PropTypes.func,
    handleInputChangePrompts: PropTypes.func,
    handleDragOverPaperTexts: PropTypes.func,
    handleDragOverPaperPrompts: PropTypes.func,
    i18n: PropTypes.object,
    stateOpenDialog: PropTypes.bool,
    stateShowSpinner: PropTypes.bool
  }

  render() {
    const {
      handleClickFlatButon,
      handleDialogClose,
      handleDropPaperTexts,
      handleDropPaperPrompts,
      handleInputChangeTexts,
      handleInputChangePrompts,
      handleDragOverPaperTexts,
      handleDragOverPaperPrompts,
      i18n,
      stateOpenDialog,
      stateShowSpinner
    } = this.props

    const spinnerClass = cx('Uploader-spinner', {
      'is-hidden': !stateShowSpinner
    })

    return (
      <div className="Uploader">
        <div className={spinnerClass}>
          <CircularProgress size={80} thickness={5} />
        </div>
        <FloatingActionButton
          className="Uploader-addbutton"
          onClick={handleClickFlatButon}
        >
          <ContentAdd />
        </FloatingActionButton>
        <Dialog
          title={i18n.t('UPLOADER_TITLE_MODAL')}
          className="Uploader-dialog"
          actions={
            [] || [
              <FlatButton
                key={i18n.t('CANCEL')}
                label={i18n.t('CANCEL')}
                onClick={handleDialogClose}
                primary
              />,
              <FlatButton
                keyboardFocused
                key={i18n.t('UPLOAD')}
                label={i18n.t('UPLOAD')}
                onClick={handleDialogClose}
                primary
              />
            ]
          }
          modal={false}
          open={stateOpenDialog}
          onRequestClose={handleDialogClose}
        >
          <div className="Uploader-buttons">
            <label className="Uploader-label" htmlFor="upload">
              <Paper
                onDrop={handleDropPaperTexts}
                onDragOver={handleDragOverPaperTexts}
                className="Uploader-paper"
              >
                <FileUpload />
                <p className="Uploader-claim">{i18n.t('UPLOADER_CLAIM')}</p>
              </Paper>
            </label>
            <input
              accept="text/*"
              className="Uploader-input"
              id="upload"
              multiple
              onChange={handleInputChangeTexts}
              type="file"
            />
            <label className="Uploader-label" htmlFor="prompt">
              <Paper
                onDrop={handleDropPaperPrompts}
                onDragOver={handleDragOverPaperPrompts}
                className="Uploader-paper"
              >
                <FileUpload />
                <p className="Uploader-claim">{i18n.t('UPLOADER_PROMPT')}</p>
              </Paper>
            </label>
            <input
              accept="text/*"
              className="Uploader-input"
              id="prompt"
              multiple
              onChange={handleInputChangePrompts}
              type="file"
            />
          </div>
        </Dialog>
      </div>
    )
  }
}

export default Uploader
