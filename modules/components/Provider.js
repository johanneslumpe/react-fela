import { Component, PropTypes } from 'react'

export default class Provider extends Component {
  getChildContext() {
    return {
      fela: this.props.renderer.render.bind(this.props.renderer)
    }
  }

  render() {
    return this.props.children
  }
}

Provider.propTypes = { renderer: PropTypes.object.isRequired }
Provider.childContextTypes = { fela: PropTypes.func.isRequired }
