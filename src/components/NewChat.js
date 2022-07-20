import React, {useState} from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './NewChat.css';
export default ({user, chatlist, show, setShow}) => {
    const [list, setList] = useState([
        {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar.png', name: 'Victor'},
        {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar.png', name: 'Victor'},
        {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar.png', name: 'Victor'},
        {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar.png', name: 'Victor'}
    ]);
    return (
        <div className='newchat' style={{left: show ? 0 : -416}}>
            <div className='newchat-head'>
                <div className='newchat-back' onClick={() => setShow(false)}>
                    <ArrowBackIcon style={{color: '#FFF'}} />
                </div>
                <div className='newchat-title'>Nova conversa</div>
            </div>
            <div className='newchat-list'>
                {list.map((item, key) => (
                    <div className='newchat-item' key={key}>
                        <img src={item.avatar} alt=""/>
                        <div className='newchat-name'>{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};