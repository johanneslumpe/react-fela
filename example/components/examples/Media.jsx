import React, { Component, PropTypes } from 'react'

const Media = (props, { fela }) => <div className={fela(styles)}>
                                     Resize your window
                                   </div>

Media.contextTypes = { fela: PropTypes.func.isRequired }
export default Media

const styles = props => ({
  padding: 40,
  textAlign: 'center',
  color: 'white',
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
