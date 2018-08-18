class Signin extends React.Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:''
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.signIn = this.signIn.bind(this);  
  }
  
  handleEmailChange(e) {
    this.setState({email: e.target.value});    
  }
  handlePasswordChange(e) {
    this.setState({password: e.target.value});  
  }

  signIn() {
    alert("Email address is " + this.state.email + " and password is " + this.state.password);

    axios.post('/signin', {
      email: this.state.email,
      password: this.state.password      
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() { 
    return (
      <form className="signin">
	<h3 className="signin-heading">Sign In</h3>
	<label for="inputEmail" className="ema-pass">Email Address</label>
	<input type="email" id="inputEmail" onChange={this.handleEmailChange} className="form-control" placeholder="example@xyz.com" required autocomplete autofocus />
	<label for="inputPassword" className="ema-pass">Password</label>
	<input type="password" id="inputPassword" onChange={this.handlePasswordChange} className="form-control" required />
	<button className="btn btn-lg btn-primary btn-block" type="button" onClick={this.signIn}>Sign In</button>
      </form>
    );
	
  }
}

ReactDOM.render(<Signin />, document.getElementById('app'));
