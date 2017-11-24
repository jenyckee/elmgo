import React from 'react'
import ReactDOM from 'react-dom'
import Elm from './react-elm'
import { Main } from '../Main.elm';

export default class App extends React.Component {

  constructor() {
    super()
    this.flags = "flags"
  }
  
  setupPorts(ports) {
    console.log(ports)
  }

  render() {
    return <Elm src={Main} ports={this.setupPorts} flags={this.flags}/>
  }
}