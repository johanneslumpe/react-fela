import React, { Component, PropTypes } from 'react'

export default class Provider extends Component {
  constructor(props, context) {
    super(props, context)
    this.renderer = props.renderer
  }

  getChildContext() {
    return {
      fela: this.renderer.render.bind(this.renderer),
      renderer: this.renderer
    }
  }

  render() {
    return this.props.children
  }
}

Provider.propTypes = { renderer: PropTypes.object.isRequired }
Provider.childContextTypes = {
  fela: PropTypes.func.isRequired,
  renderer: PropTypes.object.isRequired
}
