import React, { PropTypes } from 'react'
import { Keyframe } from 'fela'

import Keyframes from './components/Keyframes'
import Media from './components/Media'

const center = props => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  width: '100%',
  height: '100%',
  flexDirection: 'column'
})

const animation = new Keyframe(props => ({
  '0%': {
    color: props.color
  },
  '50%': {
    color: 'blue'
  },
  '80%': {
    color: 'yellow'
  },
  '100%': {
    color: props.color
  }
}))

const welcome = props => ({
  padding: '50px',
  color: props.color,
  fontSize: props.fontSize,
  animation: props.name + ' 2s infinite'
})

const info = props => ({
  fontSize: '20px',
  color: 'gray',
  flexDirection: 'column',
  ':hover': {
    color: 'lightgray'
  }
})

const App = (props, { fela }) => {
  const welcomeStyles = fela(welcome, {
    color: 'rgb(50, 50, 50)',
    fontSize: '80px',
    name: fela(animation, { color: 'green' })
  })

  return (
    <div className={fela(center)}>
      <div className={welcomeStyles}>Welcome to Fela.</div>
      <div className={fela(info)}>
        <div>
          <Media color={'red'} />
        </div>
        <div>
          <Keyframes />
        </div>
      </div>
    </div>
  )
}

App.contextTypes = { fela: PropTypes.func.isRequired }
export default App
