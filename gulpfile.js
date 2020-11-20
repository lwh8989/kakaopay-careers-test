const { src, dest, series } = require('gulp')
const njk = require('gulp-nunjucks-render')
const prettier = require('gulp-prettier')
const debug = require('gulp-debug')
const del = require('del')

function clean(path) {
  return function clean() {
    return del(path)
  }
}

function html() {
  const options = {
    path: ['src/']
  }
  console.log(src('src/pages/**/*.njk'))
  return src('src/pages/**/*.njk')
    .pipe(debug())
    .pipe(njk(options))
    .pipe(prettier())
    .pipe(dest('build'))
}

function copy() {
  return src('static/**').pipe(dest('build/static'))
}

exports.build = series(clean('build'), copy, html)