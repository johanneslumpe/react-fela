import React, { PropTypes } from 'react'

const defaultMapper = state => state

export default function bindStateToFela(mapper = defaultMapper) {
  return component => {
    // handle functional Components
    if (!component.prototype.setState) {
      console.warn('Does not work with functional Components.')
    }

    // handle stateful class Components
    class EnhancedComponent extends component {
      render() {
        this.fela = (selector, additionalProps, plugins) => this.context.fela(selector, additionalProps ? {
          ...mapper(this.state, this.props),
          ...additionalProps
        } : mapper(this.state, this.props), plugins)
        return super.render()
      }
    }

    EnhancedComponent.contextTypes = {
      ...component.contextTypes,
      fela: PropTypes.func.isRequired
    }

    return EnhancedComponent
  }
}
