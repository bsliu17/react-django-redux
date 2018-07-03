import * as React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { bindActionCreators, Dispatch } from 'redux'

import { MonsterActions } from './actions'

import { RootState } from '../../reducers'
import { omit } from '../../utils'

export namespace App {
  export interface Props extends RouteComponentProps<void> {
    monsters: RootState.MonsterState
    actions: MonsterActions
  }

  export interface State {
    inputName: string
  }
}

class App extends React.Component<App.Props, App.State> {
  state = {
    inputName: ''
  }

  constructor(props: App.Props) {
    super(props)
  }
  handleClick = () => {
    this.props.actions.changeName(this.state.inputName)
  }

  handleInputOnChange = (e: any) => {
    this.setState({
      inputName: e.target.value
    })
  }

  render() {
    const { monsters } = this.props
    return (
      <div>
        Monster Name: {monsters.name}
        <div>
          <input
            type="text"
            onChange={this.handleInputOnChange}
          />
          <button onClick={this.handleClick}>Click</button>
        </div>
      </div>
    )
  }
}

const mapStateToprops = (state: RootState) => {
  return {
    monsters: state.monsters
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(omit(MonsterActions, 'Type'), dispatch)
})

export default connect(
  mapStateToprops,
  mapDispatchToProps
)(App)

