import React, { Component } from 'react'

class User extends Component {
	render() {
		let name = this.props.name
		let id = this.props.id

		return (
			<ul>
				<li>ID: {id}</li>
				<li>Name: {name}</li>
			</ul>
		)
	}
}

export default User
