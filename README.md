<h1 align="center">React Fela</h1>
<p align="center">
Official React bindings for Fela.
<br>
<img alt="TravisCI" src="https://travis-ci.org/rofrischmann/react-fela.svg?branch=master">
<a href="https://codeclimate.com/github/rofrischmann/react-fela/coverage"><img alt="Test Coverage" src="https://codeclimate.com/github/rofrischmann/react-fela/badges/coverage.svg"></a>
<img alt="npm downloads" src="https://img.shields.io/npm/dm/react-fela.svg">
<img alt="gzipped size" src="https://img.shields.io/badge/gzipped-~1.4kb-brightgreen.svg">

</p>
<br>
This package only includes React bindings for [ Fela](http://github.com/rofrischmann/fela). <br>
It assumes you already know about Fela and how to use it.

> [Learn about Fela!](http://github.com/rofrischmann/fela)


## Installation
```sh
npm i --save react-fela
```

The package is also available on [npmcdn](https://npmcdn.com/) for those not using npm.
> You need to include React and Fela on your own as well.

```HTML
<!-- Development build (with warnings)  -->
<script src="https://npmcdn.com/react-fela@1.0.0/dist/react-fela.js"></script>
<!-- Production build (minified)  -->
<script src="https://npmcdn.com/react-fela@1.0.0/dist/react-fela.min.js"></script>
```

## API
### `<Provider renderer>`
**Renderer\<renderer>**

The `<Provider>` component should wrap your whole application. It only accepts a single prop which is your [Fela Renderer](https://github.com/rofrischmann/fela/blob/master/docs/GettingStarted.md#8-rendering).<br>
It uses React's context to pass down the Renderer's render function. It actually is all you need to fully use Fela within your React application.
```javascript
import { Provider } from 'react-fela'
import { render } from 'react-dom'
import React from 'react'

const renderer = new Renderer(mountNode, { /* config */})

render(
  <Provider renderer={renderer}>
    <App />
  </Provider>,
  document.getElementById('app')
)
```
Your components can now directly use the render function as `fela`.
```javascript
import React, { PropTypes } from 'react'

// You may also use stateful class Components
// and call fela from this.context
const App = (props, { fela }) => {
  const className = fela(selector, { color: 'blue' })
  return (
    <div className={className}>
      I am blue. (Da ba dee da ba di)
    </div>
  )
}

App.contextTypes = { fela: PropTypes.func }
export default App

const selector = props => ({
  fontSize: '12px',
  fontWeight: 300,
  color: props.color,
  padding: '10px'
})
```

## Helper HoCs
I have found that there are some recurring patterns on how to actually render your selectors and keyframes. To simplify those, this package provides two HoCs ([Higher-order Components](https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750#.njbld18x8)).
> They only help to write clean and readable code. You do not have to use them nor do they ship any new feature you could not accomplish without.

### `bindPropsToFela(mapper)`
**Function?\<mapper>**

Used to automatically bind the component's props to the render function. This especially fits well if you follow the pattern of [presentational and container components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.2vftfin5s) as the props passed to your component basically describe how a presentational component looks like. It passes the modified render function via props.<br>
Optionally pass a custom mapper to alter the shape of the props passed to Fela.

```javascript
// passes the props with the exact same keys
const EnhancedApp = bindPropsToFela()(App)

const mapper = props => ({
  marginTop: props.top,
  fontSize: props.size
})

// uses an additional mapper to alter the shape
// e.g. Component's `top` prop is passed as `marginTop`
const EnhancedApp = bindPropsToFela(mapper)(App)
```

### `bindStateToFela(mapper)`
**Function?\<mapper>**

Similar to `bindPropsToFela` but with a more dynamic nature. It binds the current component state to Fela's render function.<br>
This is especially useful if you want to modify styles based on user input or user interaction. It adds the modified render function to the component itself (`this.fela`).<br>
You may also pass a mapper to alter the shape. It also accepts the component's props as second parameter.

> It only works with stateful class components as functional components do not have state at all.

```javascript
const EnhancedApp = bindStateToFela()(App)

const mapper = (state, props) => ({
  fontSize: state.size,
  paddingLeft: props.padding,
  paddingRight: props.padding
})

const EnhancedApp = bindStateToFela(mapper)(App)
```


# License
Fela is licensed under the [MIT License](http://opensource.org/licenses/MIT).<br>
Documentation is licensed under [Creative Common License](http://creativecommons.org/licenses/by/4.0/).<br>
Created with ♥ by [@rofrischmann](http://rofrischmann.de).
