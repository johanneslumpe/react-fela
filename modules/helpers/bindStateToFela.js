import { PropTypes } from 'react'
import warning from 'fbjs/lib/warning'

const defaultMapper = state => state

export default function bindStateToFela(mapper = defaultMapper) {
  return component => {
    // handle functional Components
    if (!component.prototype.setState) {
      warning(false, 'Binding state to Fela does not work with functional Components. They do not have state at all.')
      return component
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
