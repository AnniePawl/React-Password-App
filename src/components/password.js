import React, { Component } from 'react';

class Password extends Component {
	constructor(props) {
		super(props);
		this.state = { password: 'p@ssw0rd' };
	}

	generatePassword() {
		// generate pword here
		const str = 'abcdefghijklmnopqrstuvwxyz';
		let pword = '';
		console.log('generating password');
		for (let i = 0; i < 10; i++) {
			const r = Math.floor(Math.random() * str.length);
			pword += str[r];
		}

		this.setState({ password: pword });
	}

	render() {
		return (
			<div>
				<div>{this.state.password}</div>
				{/* <div>{this.setState({ password: newPassword })}</div>
         */}
				<div>
					<button
						onClick={(e) => {
							this.generatePassword();
						}}
					>
						Generate Password
					</button>
				</div>

				<div>
					<input
						onChange={(e) => {
							this.setState({ password: e.target.value });
						}}
						value={this.state.password}
					/>
				</div>
			</div>
		);
	}
}

export default Password;
