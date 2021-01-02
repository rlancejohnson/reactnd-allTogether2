import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Message from './Message.js'
import NewMessageForm from './NewMessageForm.js'

export default class ChatWindow extends Component {
    render() {
        const { user, messages, addNewMessage } = this.props

        return (
            <div className="chat-window">
                <h2>Super Awesome Chat</h2>
                <div className="name sender">{user.username}</div>
                <ul className="message-list">
                {messages.map((message, index) => (
                    <Message key={index} user={user} message={message}/>
                ))}
                </ul>
                <NewMessageForm user={user} addNewMessage={addNewMessage}/>
            </div>
        )
    }
}

ChatWindow.propTypes = {
    user: PropTypes.object.isRequired,
    messages: PropTypes.array.isRequired
}