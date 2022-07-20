import React from 'react';
import './MessageItem.css';

export default ({data, user}) => {
    return (
        <div className='message-line' style={{justifyContent: user.id === data.author ? 'flex-end' : 'flex-start'}}>
            <div className='message-item' style={{backgroundColor: user.id === data.author ? '#DCF8C6' : '#FFF'}}>
                <div className='text'>{data.body}</div>
                <div className='date'>19:00</div>
            </div>
        </div>
    );
};