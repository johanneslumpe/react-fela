import React, { PropTypes } from 'react'

export default component => {
  const autoBind = (props, context) => {
    const render = selector => context.fela(selector, props)
    return component({
      ...props,
      fela: render
    }, context)
  }
  autoBind.contextTypes = { fela: PropTypes.func.isRequired }
  return autoBind
}
