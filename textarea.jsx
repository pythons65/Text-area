import React, { Component } from 'react';
import w3CodeColor from './theme'

class TextArea extends Component{
  constructor(){
    super();
    this.state = {
      value:'',
      list:[]
    }
  }

handleChange(e){
  this.setState({value:e.target.value},this.afterChange(e.target.value,e))
}
afterChange(a,e){
  var textLines = a.substr(0, e.target.selectionStart).split("\n").length;


  var data = a.split(/\r\n|\r|\n/)
  var num1 = 0
  this.state.list = data.map((i)=> {
    num1++;
    if (num1 != 1){
      return <div class="line-number">{num1}</div>
    }
    
    })
}
handleScroll(e){
  var xt = (e.target.scrollTop)
  document.getElementById("line").scrollTop = xt;
}
render(){
  return (
    <div id="editor">
    
    <div id="line">
     <div className="line-number" id="default">1</div>
     {this.state.list}
    </div>
    <textarea name="co" cols="50" wrap="off" id="input" onChange={(e)=> this.handleChange(e)} value={this.state.value} onScroll={(e)=>this.handleScroll(e)}></textarea>   
    </div>
  )
}
}

export default TextArea