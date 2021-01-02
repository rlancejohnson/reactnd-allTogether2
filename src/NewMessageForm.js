import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NewMessageForm extends Component {
    state = {
        message: {
            username: '',
            text: ''
        }
    }

    setMessage = (event) => {
        this.setState ({
            message: {
                username: this.props.user.username,
                text: event.target.value
            }
        })
    }

    isDisabled = () => {
        return this.state.message === ''
    };

    addNewMessage = (event) => {
        event.preventDefault()
        this.props.addNewMessage(this.state.message)
        this.resetForm()
    }

    resetForm = () => {
        this.setState({
            message: {
                username: '',
                text: ''
            }
        })
    }

    render() {
        const { message } = this.state

        return (
            <div>
              <form className="input-group"
                    onSubmit={this.addNewMessage}>
                <input type="text" 
                       className="form-control" placeholder="Enter your message..."
                       value={message.text}
                       onChange={this.setMessage}/>
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.isDisabled()}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
        )
    }
}

NewMessageForm.propTypes = {
    user: PropTypes.object.isRequired,
    addNewMessage: PropTypes.func.isRequired
}