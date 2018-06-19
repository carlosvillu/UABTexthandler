export const reader = file =>
  new Promise((resolve, reject) => {
    const reader = new window.FileReader()
    reader.readAsText(file, 'UTF-8')
    reader.onload = evt => resolve(evt.target.result)
  })
