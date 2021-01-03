import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ChatWindow extends Component {
    state = {
        user: {
            username: ''
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            user: {
                [name]: value
            }
        })
    }

    isDisabled = () => {
        return this.state.user.username === ''
    }

    addNewUser = (event) => {
        event.preventDefault()
        this.props.addNewUser(this.state.user)
        this.resetForm()
    }

    resetForm = () => {
        this.setState({
            user: {
                username: ''
            }
        })
    }

    render() {
        const { user } = this.state

        return (
            <div className="chat-window">
                <h1>Add User</h1>
                <form className="input-group"
                    onSubmit={this.addNewUser}>
                    <input type="text"
                        className="form-control"
                        name="username"
                        placeholder="Enter a username..."
                        value={user.username}
                        onChange={this.handleChange}/>
                    <div className="input-group-append">
                        <button type="submit"
                            className="btn submit-button"
                            disabled={this.isDisabled()}>ADD</button>
                    </div>
                    
                </form>
            </div>
        )
    }
}

ChatWindow.propTypes = {
    addNewUser: PropTypes.func.isRequired
}