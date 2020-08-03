import React, { Component, Fragment } from "react";
// import logo from "./logo.svg"
import "./App.css";
import Licomponent  from './licomponent'

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
            ref={(input)=>{this.input=input}}
          />
          <button onClick={this.addService.bind(this)}>添加服務</button>
        </div>
        <ul ref={(ul)=>{this.myul=ul}}>
           {this.state.lists.map((item, index) => {
            return <Licomponent  
             key={item+index} 
             content={item.name}
             index={index}
             delete={this.deleteItem.bind(this)}
             > 
             </Licomponent>;
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
    // this.input
    console.log(this.input.value,'input')
    this.setState({
      lists: [
        ...this.state.lists,
        { value: this.state.lists.length, name: this.state.inputValue },
      ],
      inputValue:''
    },()=>{
        // this.myul
      console.log(this.myul,'myul')
    });
  }
  deleteItem(index){
    let array=this.state.lists
    array.splice(index,1)
    this.setState({
      lists:array
    })
  }
}


export default App;
