import React, { PropTypes } from 'react'

const defaultMapper = props => props

export default function bindPropsToFela(mapper = defaultMapper) {
  return component => {
    // handle functional Components
    if (!component.prototype.setState) {
      const enhancedComponent = (props, context) => {
        const fela = (selector, additionalProps, plugins) => context.fela(selector, additionalProps ? {
          ...mapper(props),
          ...additionalProps
        } : mapper(props), plugins)
        return component({ ...props, fela }, context)
      }

      enhancedComponent.contextTypes = {
        ...component.contextTypes,
        fela: PropTypes.func.isRequired
      }

      return enhancedComponent
    }

    // handle stateful class Components
    class EnhancedComponent extends component {
      constructor(props, context) {
        super(props, context)
        this.fela = (selector, additionalProps, plugins) => context.fela(selector, additionalProps ? {
          ...mapper(props),
          ...additionalProps
        } : mapper(props), plugins)
      }
    }

    EnhancedComponent.contextTypes = {
      ...component.contextTypes,
      fela: PropTypes.func.isRequired
    }

    return EnhancedComponent
  }
}
