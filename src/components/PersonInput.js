import React from 'react';
import axios from 'axios';
export default class PersonInput extends React.Component{
    constructor(props) {
        super(props);
        this.state = {name: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
handleChange(event){
    this.setState({name:event.target.value});
};
handleSubmit(event){
    
        event.preventDefault();
        console.log(this.state.name);
    axios
    .post(`http://192.168.0.157:2345/projectapp`)
    .then(res=>{
        console.log(res);
        console.log(res.data);
    });
};
render(){
    return(
    <form onSubmit={this.handleSubmit}>
    
        <label>
            person Name:
            <input type="text" name={this.state.name} onChange={ this.handleChange}/>
        </label>
    <button type="submit">Add</button>
    </form>
    );
}
}