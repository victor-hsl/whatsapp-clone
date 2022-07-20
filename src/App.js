import React, {useState, useEffect} from 'react';
import './App.css';
import ChatIntro from './components/ChatIntro';
import NewChat from './components/NewChat';
import ChatWindow from './components/Chatwindow';
import ChatListItem from './components/ChatListItem';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import Login from './components/Login';

export default () => {
	const [user, setUser] = useState(null);
	const [chatList, setChatList] = useState([
		{
			chatId: 1,
			title: 'Fulano de Tal',
			image: 'https://www.w3schools.com/howto/img_avatar.png'
		},
		{
			chatId: 2,
			title: 'Cicrano de Tal',
			image: 'https://www.w3schools.com/howto/img_avatar.png'
		},
		{
			chatId: 3,
			title: 'Fulano de Tal',
			image: 'https://www.w3schools.com/howto/img_avatar.png'
		},
		{
			chatId: 4,
			title: 'Fulano de Tal',
			image: 'https://www.w3schools.com/howto/img_avatar.png'
		}
	]);
	const [activeChat, setActiveChat] = useState({});
	const [showNewChat, setShowNewChat] = useState(false);
	
	const handleLoginData = async (u) => {
		let newUser = {
			id: u.uid,
			name: u.displayName,
			avatar: u.photoURL
		};

		setUser(newUser);
	}

	if(user === null) {
		return (<Login onReceive={handleLoginData}/>);
	}
	return (
	<div className="app-window">
		<div className='sidebar'>
			<NewChat
				show={showNewChat}
				chatlist={chatList}
				user={user}
				setShow={setShowNewChat}
			/>
			<header>
				<img src={user.avatar} alt=''/>
				<div className='header-buttons'>
					<div className='header-btn'>
						<DonutLargeIcon style={{color: '#919191'}} />
					</div>
					<div className='header-btn' onClick={() => setShowNewChat(true)}>
						<ChatIcon style={{color: '#919191'}} />
					</div>
					<div className='header-btn'>
						<MoreVertIcon style={{color: '#919191'}} />
					</div>
				</div>
			</header>
			<div className='search'>
				<div className='search-input'>
					<SearchIcon fontSize='small' style={{color: '#919191'}} />
					<input type="search" placeholder='Procurar ou começar uma nova conversa' />
				</div>
			</div>
			<div className='chatlist'>
				{chatList.map((item, key) => (
					<ChatListItem 
						key={key}
						data={item}
						onClick={() => setActiveChat(chatList[key])}
						active={activeChat.chatId === chatList[key].chatId}
					/>
				))}
			</div>
		</div>
		<div className='contentarea'>
			{activeChat.chatId  !== undefined &&
				<ChatWindow user={user}/>
			}
			{activeChat.chatId === undefined && 
				<ChatIntro/>
			}
		</div>
	</div>
	);
}