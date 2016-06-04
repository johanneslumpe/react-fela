import React, { Component, PropTypes } from 'react'

export default class UserAction extends Component {
  render() {
    const { fela } = this.context
    return (
      <div>
        <div className={fela(styles.button) + ' ' + fela(styles.activeButton)}>Click me</div>
        <div className={fela(styles.button) + ' ' + fela(styles.hoverButton)}>Hover me</div>
        <div className={fela(styles.button) + ' ' + fela(styles.hoverActiveButton)}>Hover me, then Click me</div>
      </div>
    )
  }
}

UserAction.contextTypes = { fela: PropTypes.func.isRequired }
export default UserAction

const styles = {
  button: () => ({
    margin: 10,
    padding: 5,
    fontSize: 20,
    color: 'black',
    borderRadius: 5,
    textAlign: 'center',
    border: '1px solid lightgray',
    boxShadow: '0px 1px 2px rgba(0,0,0,0.34)'
  }),
  hoverButton: () => ({
    ':hover': {
      backgroundColor: 'rgba(0, 0, 255, 0.3)'
    }
  }),
  activeButton: () => ({
    ':active': {
      backgroundColor: 'rgba(255, 0, 0, 0.3)'
    }
  }),
  hoverActiveButton: () => ({
    ':hover': {
      backgroundColor: 'rgba(0, 255, 0, 0.3)',
      ':active': {
        backgroundColor: 'rgba(0, 0,0, 0.3)'
      }
    }
  })
}
