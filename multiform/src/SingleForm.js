import React, {Component} from 'react';

class SingleForm extends Component{
    constructor(props){
        super(props);
        this.state = {username:"",email:"",password:""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState({[evt.target.name]:evt.target.value})
    }
    handleSubmit(evt){
        evt.preventDefault();
        alert(`${this.state.username}`)
        this.setState({username:''});
        this.setState({email:''});
        this.setState({password:''});
    }

render(){
    return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="user">User Name:</label>
                <input type="text" 
                id="user"
                placeholder="User Name"
                value={this.state.username} 
                name = 'username'
                onChange={this.handleChange}
                />
                <br></br>
                <label htmlFor="email">Email:</label>
                <input type="email" 
                id='email'
                placeholder='Email'
                value={this.state.email} 
                name ='email'
                onChange={this.handleChange}
                />
                <br></br>
                <label htmlFor="password">Password:</label>
                <input type="password" 
                id="password"
                placeholder='Password'
                value={this.state.password} 
                name='password'
                onChange={this.handleChange}
                />
                <button>Click</button>
            </form>
        </div>
    )
}

}
export default SingleForm;