import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddUserForm from './AddUserForm.js';
import ChatWindow from './ChatWindow.js';

export default class App extends Component {
  state = {
    users: [],
    messages: []
  }

  addNewMessage = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message]
    }))
  }

  addNewUser = (user) => {
    this.setState((prevState) => ({
      ...prevState,
      users: [...prevState.users, user]
    }))
  }

  render() {
    const { users, messages } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div>
          <AddUserForm addNewUser={this.addNewUser}/>
        </div>
        <div className="container">
          {users.map((user) => (
            <ChatWindow user={user} messages={messages} addNewMessage={this.addNewMessage}/>
          ))}
        </div>
      </div>
    )
  }
}