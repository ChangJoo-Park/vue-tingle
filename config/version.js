const fs = require('fs')
const pack = require('../package.json')

// update installation.md
const installation = fs
  .readFileSync('./gitbook/installation.md', 'utf-8')
  .replace(
    /https:\/\/unpkg\.com\/vue-tingle@[\d.]+.[\d]+\/dist\/vue-tingle\.js/,
    'https://unpkg.com/vue-tingle@' + pack.version + '/dist/vue-tingle.js.'
  )
fs.writeFileSync('./gitbook/installation.md', installation)
