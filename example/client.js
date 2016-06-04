import React from 'react'
import { render } from 'react-dom'
import App from './app.jsx'
import { Renderer } from 'fela'
import prefixer from 'fela-plugin-prefixer'
import fallbackValue from 'fela-plugin-fallback-value'
import unit from 'fela-plugin-unit'

import Provider from '../modules/components/Provider'


const renderer = new Renderer(document.getElementById('stylesheet'), {
  plugins: [ prefixer(), fallbackValue(), unit() ]
})


render(
  <Provider renderer={renderer}>
    <App marginTop={30} />
  </Provider>,
  document.getElementById('app')
)
