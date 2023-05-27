import React from 'react'
import s from './Message.module.css'
import { MessageType } from '../HW1'
import imgAvatar from '../avatar.png'

export type MessagePropsType = {
    message: MessageType
}

const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s.imageAndText}>
                <img
                    id={'hw1-avatar-' + props.message.id}
                    src={imgAvatar}
                    alt="my avatar"
                />
                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        {props.message.user.name}
                    </div>
                    <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
                        <div>{props.message.message.text}</div>
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + props.message.id} className={s.time}>
                <div>{props.message.message.time}</div>
            </div>
        </div>
    )
}

export default Message
