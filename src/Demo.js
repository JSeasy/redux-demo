import React, { Component } from 'react';
import {connect} from "react-redux"
import {up,down,upAsync}from "./store/action-creators"
 
class Demo extends Component {
    constructor(props) {
        super(props);
        this.up = this.up.bind(this)
        this.down = this.down.bind(this)
        
    }
    
    render() { 
       
        var state = this.props.f.reducer //输出已cdf组成的actions和state
        console.log(state)
    //    const state = this.props.store.getState()
        return (
        <div>
            <span>{state}</span>
           <select name = "value" ref = { select => this.select = select}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
           </select>
           <button onClick = {this.up}>+</button>
           <button onClick = {this.down}>-</button>
        </div>
        );
    }
   up(){
       var {value} = this.select
       value = parseInt(value)
       this.props.g(value)
   }
   down(){
    var {value} = this.select
    value = parseInt(value)
   this.props.d(value)
   }
   
}
// 新的状态及函数名称在这里定义
const a = (state /*, ownProps*/) => {
    return {
      f:state
    };
  };
const b = {
   c:up,d:down,g:upAsync
  };
export default connect(a,b)(Demo)