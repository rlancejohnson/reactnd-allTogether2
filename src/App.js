import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow';

export default class App extends Component {
  state = {
    users: [
      { username: 'Amy' }, 
      { username: 'John' }
    ],
    messages: [
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' },
    ]
  }

  addNewMessage = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message]
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
        <div  className="container">
          {users.map((user) => (
            <ChatWindow user={user} messages={messages} addNewMessage={this.addNewMessage}/>
          ))}
        </div>
      </div>
    )
  }
}