
class Signin extends React.Component {
	render() { 
		return (
			<form className="signin">
				<h3 className="signin-heading">Sign In</h3>
				<label for="inputEmail" className="ema-pass">Email Address</label>
				<input type="email" id="inputEmail" className="form-control" placeholder="example@xyz.com" required autocomplete autofocus />
				<label for="inputPassword" className="ema-pass">Password</label>
				<input type="password" id="inputPassword" className="form-control" required />
				<button className="btn btn-lg btn-primary btn-block" type="button">Sign In</button>
		        </form>
			);
	
	}


}

ReactDOM.render(<Signin />, document.getElementById('app'));
