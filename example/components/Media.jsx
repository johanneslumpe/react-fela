import React from 'react'
import bindPropsToRenderer from '../../modules/helper/bindPropsToRenderer'

const Media = ({ fela }) => (
<div className={fela(selector)}>
  Resize your window
</div>
)

export default bindPropsToRenderer(Media)

const selector = props => ({
  padding: 40,
  textAlign: 'center',
  color: props.color,
  fontSize: 40,
  backgroundColor: 'red',
  '@media (max-width: 500px)': {
    backgroundColor: 'blue'
  },
  '@media (orientation:portrait)': {
    backgroundColor: 'orange'
  },
  '@media (min-width: 1000px)': {
    backgroundColor: 'green'
  }
})
