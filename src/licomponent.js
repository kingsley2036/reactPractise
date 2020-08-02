import React, { Component } from 'react';
class LiComponent extends Component {
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }
    render() { 
        return ( 
            <li
            onClick={this.handleClick}>
                {this.props.content}
            </li>
         );
    }
    handleClick(){
        console.log(this.props.index)
        this.props.delete(this.props.index)
    }
}
 
export default LiComponent ;