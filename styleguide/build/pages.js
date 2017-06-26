const glob = require('glob')
const path = require('path')
const fs = require('fs')
const mkdirp = require('mkdirp')

const pagesDir = path.resolve(__dirname, '..', 'src', 'pages')
const distDir = path.resolve(__dirname, '..', 'dist')

glob(pagesDir + '/**/*.js', (err, files) => {
  files.forEach((f) => {
    const htmlFilename = f.replace(pagesDir, distDir).replace(/\.js$/, '.html')
    const html = require(f)

    mkdirp.sync(path.dirname(htmlFilename))
    fs.writeFileSync(htmlFilename, html)
  })

  console.log('wrote %d pages', files.length)
})

