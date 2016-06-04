import React, { Component, PropTypes } from 'react'
import bindPropsToFela from '../../modules/helpers/bindPropsToFela'

const Media = ({ fela }) => (
<div className={fela(styles)}>
  Resize your window
</div>
)

export default bindPropsToFela()(Media)

const styles = props => ({
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
