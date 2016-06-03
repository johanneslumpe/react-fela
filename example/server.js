import express from 'express'
import proxy from 'express-http-proxy'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './app.jsx'
import fs from 'fs'


import { Renderer } from 'fela/server'
import prefixer from 'fela-plugin-prefixer'
import fallbackValue from 'fela-plugin-fallback-value'
import unit from 'fela-plugin-unit'

import Provider from '../modules/components/Provider'


const renderer = new Renderer({
  plugins: [ prefixer(), fallbackValue(), unit() ]
})

const indexHTML = fs.readFileSync(__dirname + '/index.html').toString()
const app = express()
const host = 'localhost'
const port = 8000

app.get('/', (req, res) => {
  const appHtml = renderToString(
    <Provider renderer={renderer}>
      <App marginTop={30} />
    </Provider>
  )

  const appCSS = renderer.renderToString()

  res.write(indexHTML.replace('<!-- {{app}} -->', appHtml).replace('<!-- {{css}} -->', appCSS))
  res.end()
})

app.listen(port, host, () => {
  console.log('Access the universal app at http://%s:%d', host, port)
})
