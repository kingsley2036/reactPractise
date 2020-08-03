import React, { Component } from 'react';
import propTypes from 'prop-types'
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
LiComponent.propTypes={
    content:propTypes.string,
    delete:propTypes.func, 
    index:propTypes.number
}
 
export default LiComponent ;