import React, { Component, PropTypes } from 'react'

const Pseudo = (props, { fela }) => (
  <div>
    <div className={fela(styles.firstLetter)}>First letter is colored red.</div>
    <br/>
    <div className={fela(styles.beforeAfter)}>Who's after me?</div>
    <br/>
    <input className={fela(styles.input)} placeholder="Webkit-based browsers show this placeholder in green" />
  </div>
)

Pseudo.contextTypes = { fela: PropTypes.func.isRequired }
export default Pseudo

const styles = {
  firstLetter: () => ({
    fontSize: 20,
    ':first-letter': {
      color: 'red',
      fontSize: 26,
      fontWeight: 600
    }
  }),
  beforeAfter: () => ({
    fontSize: 20,
    ':before': {
      content: '\':before\'',
      color: 'gray'
    },
    ':after': {
      color: 'red',
      content: '"It\'s me"',
      fontSize: 18
    }
  }),
  input: () => ({
    appearance: 'none',
    outline: 'none',
    width: 'calc(100% - 20px)',
    fontSize: 18,
    margin: '5px 10px',
    padding: '5px 5px 5px 8px',
    border: '1px solid gray',
    borderRadius: 5,
    userSelect: 'text',
    '::-webkit-input-placeholder': {
      color: 'green'
    }
  })
}
