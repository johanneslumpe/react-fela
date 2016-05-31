import express from 'express'
import proxy from 'express-http-proxy'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Renderer } from 'fela/server'
import prefixer from 'fela-plugin-prefixer'
import fallbackValue from 'fela-plugin-fallback-value'
import unit from 'fela-plugin-unit'
import fs from 'fs'

import App from './app.js'
import Provider from '../modules/components/Provider'

const indexHTML = fs.readFileSync(__dirname + '/index.html').toString()
const app = express()
const host = 'localhost'
const port = 8000

app.get('/', (req, res) => {
  const renderer = new Renderer({
    plugins: [ prefixer(), fallbackValue(), unit() ]
  })

  const appHtml = renderToString(
    <Provider renderer={renderer}>
      <App />
    </Provider>
  )

  const appCSS = renderer.renderToString()

  res.write(indexHTML.replace('<!-- {{app}} -->', appHtml).replace('<!-- {{css}} -->', appCSS))
  res.end()
})

app.listen(port, host, () => {
  console.log('Access the universal app at http://%s:%d', host, port)
})
