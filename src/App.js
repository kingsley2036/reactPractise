import React, { Component, Fragment } from "react";
// import logo from "./logo.svg"
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      lists: [
        {
          name: "大保健",
          value: 1,
        },
        {
          name: "粉红的回忆",
          value: 2,
        },
      ],
    };
  }
  render() {
    console.log(this, "this render");
    return (
      <Fragment>
        <div>
          <input
            value={this.state.inputValue}
            onChange={this.setInput.bind(this)}
          />
          <button onClick={this.addService.bind(this)}>添加服務</button>
        </div>
        <ul>
          {this.state.lists.map((item, index) => {
            return <li key={item+index}>{item.name}</li>;
          })}
        </ul>
      </Fragment>
    );
  }
  setInput(e) {
    console.log(this);
    this.setState({
      inputValue: e.target.value,
    });
  }
  addService() {
    this.setState({
      lists: [
        ...this.state.lists,
        { value: this.state.lists.length, name: this.state.inputValue },
      ],
      inputValue:''
    });
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

export default App;
