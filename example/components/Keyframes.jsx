import React, { PropTypes } from 'react'
import { Keyframe } from 'fela'

const Keyframes = (props, { fela }) => (
<div className={fela(container, { name: fela(positionFrames) })}>
  <div className={fela(box, { name: fela(backgroundFrames) })} />
</div>
)

Keyframes.contextTypes = { fela: PropTypes.func.isRequired }
export default Keyframes

const positionFrames = new Keyframe(props => ({
  '0%': {
    paddingLeft: 0,
    paddingTop: 100
  },
  '25%': {
    paddingTop: 0
  },
  '50%': {
    paddingLeft: 'calc(100% - 100px)',
    paddingTop: 100
  },
  '75%': {
    paddingTop: 200
  },
  '100%': {
    paddingTop: 100,
    paddingLeft: 0
  }
}))

const backgroundFrames = new Keyframe(props => ({
  '0%': {
    background: 'blue'
  },
  '25%': {
    background: 'green'
  },
  '50%': {
    background: 'yellow'
  },
  '75%': {
    background: 'red'
  },
  '100%': {
    background: 'blue'
  }
}))

const container = props => ({
  height: 1000,
  animation: props.name + ' 6s linear 0s infinite'
})

const box = props => ({
  height: 100,
  width: 100,
  borderRadius: 100,
  animation: props.name + ' 12s linear 0s infinite'
})
