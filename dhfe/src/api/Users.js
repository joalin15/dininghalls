import React, { Component } from 'react';
import User from './User'

class Users extends Component {
  constructor() {
      super()
      this.state = {
        users: []
      }
    }
  componentDidMount() {
    fetch('http://localhost:4000/users')
      .then(response => {
        return response.json()
      })
      .then(json => {
        this.setState({users: json})
        console.log('parsed /users json', json)
      })
      .catch(ex => console.log('/users parsing failed', ex))
  }
  render() {
      let users = this.state.users
      let userElements = []
      if (users) {
        userElements = users.map((user) => {
          let name = user.name
          let id = user._id
          return (
            <ul key={id}>
              <li><User key={id} id={id} name={name}/></li>
            </ul>
          )
        })
      }

      return (
        <div>
          <h1>Users</h1>
          {userElements}
        </div>
      )
    }
  }

export default Users
