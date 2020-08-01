import React, { Component, Fragment } from "react"
// import logo from "./logo.svg"
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: "xxx",
      list: [
        {
          name: "大保健",
          value: 1,
        },
        {
          name: "粉红的回忆",
          value: 2,
        },
      ],
    }
  }
  render() {
    console.log(this,'this render')
    return (
      <Fragment>
        <div>
          <input
            value={this.state.inputValue}
            onChange={this.setInput.bind(this)}
          />
          <button>添加服務</button>
        </div>
        <ul>
          {this.state.list.map((item) => {
            return item
          })}
          <li>大保健</li>
          <li>粉红的回忆</li>
        </ul>
      </Fragment>
    )
  }
  setInput(e){
    console.log(this)
    this.setState({
      'inputValue':e.target.value
    })
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App
