import React, { useState, useEffect } from 'react'
import ChatBox, { ChatFrame } from 'react-chat-plugin';

function Example() {
    const [attr, setAttr] = useState({
        showChatbox: false,
        showIcon: true,
        messages: [
            {
                text: 'Chat With Us',
                type: 'notification',
            },

        ],
    });
    const handleClickIcon = () => {
        // toggle showChatbox and showIcon
        setAttr({
            ...attr,
            showChatbox: !attr.showChatbox,
            showIcon: !attr.showIcon,
        });
    };
    const handleOnSendMessage = (message) => {
        setAttr({
            ...attr,
            messages: attr.messages.concat({
                author: {
                    // username: 'user1',
                    id: 1,
                    avatarUrl: 'https://image.flaticon.com/icons/svg/2446/2446032.svg',
                },
                text: message,
                type: 'text',
                // timestamp: +new Date(),
            }),
        });
    };
    return (
        <div >  <ChatFrame

            chatbox={
                <ChatBox
                    onSendMessage={handleOnSendMessage}
                    userId={1}
                    messages={attr.messages}
                    width={'300px'}
                    showTypingIndicator={true}
                // activeAuthor={{ username: 'user2', id: 2, avatarUrl: null }}
                />
            }
            // icon={<RobotIcon className="Icon" />}
            clickIcon={handleClickIcon}
            showChatbox={attr.showChatbox}
            showIcon={attr.showIcon}
            iconStyle={{ background: 'red', fill: 'white' }}
        >


        </ChatFrame>
        </div>
    );
}
export default Example