import React from 'react'
import PropTypes from 'prop-types'

export default function Message({ user, message }) {
    return (
        <li className={message.username === user.username ? 'message sender' : 'message recipient'}>
                <p>{`${message.username}: ${message.text}`}</p>
        </li>
    )
}

Message.propTypes = {
    user: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
}