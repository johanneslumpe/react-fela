import React from 'react'
import Container from './components/layout/Container.jsx'
import UserAction from './components/examples/UserAction.jsx'
import ChildIndex from './components/examples/ChildIndex.jsx'
import Media from './components/examples/Media.jsx'
import Keyframes from './components/examples/Keyframes.jsx'
import Pseudo from './components/examples/Pseudo.jsx'

import bindStateToFela from '../modules/helper/bindStateToFela'

class App extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = { offset: 20 }
    this.move = this.move.bind(this)
  }

  move() {
    this.setState({ offset: this.state.offset + 5 })
  }

  render() {
    return (
      <div>
        <h1 className={this.fela(selector)} onClick={this.move}>Fela Examples</h1>
        <Container group title="1. Pseudo classes">
          <Container title="1.1. user action">
            <UserAction />
          </Container>
          <Container noPadding title="1.2. child index & child type">
            <ChildIndex items={14} />
          </Container>
          <Container title="1.3. other">
            <Pseudo />
          </Container>
        </Container>
        <Container group title="3. Media queries">
          <Container noPadding>
            <Media />
          </Container>
        </Container>
        <Container group title="5. Keyframe animations">
          <Container noPadding>
            <Keyframes />
          </Container>
        </Container>
      </div>
    )
  }
}

export default bindStateToFela(state => ({ top: state.offset }))(App)

const selector = props => {
  console.log(props)
  return {
    marginTop: props.top,
    marginBottom: 30,
    fontSize: 40,
    fontWeight: 600,
    textAlign: 'center',
    color: 'rgb(82, 67, 203)'
  }
}
