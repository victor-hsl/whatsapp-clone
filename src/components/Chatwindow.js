import React, {useState, useEffect, useRef} from 'react';
import MessageItem from './MessageItem';
import EmojiPicker from 'emoji-picker-react';
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';
import './Chatwindow.css';

export default ({user}) => {
    const body = useRef();
    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if(SpeechRecognition !== undefined) {
        recognition = new SpeechRecognition();
    }

    const [emojiOpen, setEmojiOpen] = useState(false);
    const [text, setText] = useState('');
    const [listening, setListening] = useState(false);
    const [list, setList] = useState([
        {author: 123, body: 'testes1112'},
        {author: 123, body: 'essagestes1'},
        {author: 124, body: 'teadsae'}
    ]);

    useEffect(() => {
        if(body.current.scrollHeight > body.current.offsetHeight) {
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
        }
    }, [list]);

    const handleEmojiClick = (e, emojiObject) => {
        setText( text + emojiObject.emoji )
    };

    const handleSend = () => {

    }

    const handleMic = () => {
        if(recognition !== null) {
            recognition.onstart = () => {
                setListening(true);
            }
            recognition.onend = () => {
                setListening(false);
            }
            recognition.onresult = (e) => {
                setText( e.results[0][0].transcript);
            }
            recognition.onerror = (e) => {
                if(e.error === 'audio-capture'){
                    alert('Erro na captura de audio! Verifique seu microfone.');
                } 
                else if(e.error === 'no-speech'){
                    alert('Nenhuma fala foi detectada!');
                }
                else if (e.error === 'not-allowed') {
                    alert('Erro, gravação não permitida! Permita clicando a esquerda do endereço do site.');
                }
            }
            recognition.start();
        } else {
            alert('Erro! Verifique seu navegador');
        }
    }

    return(
        <div className='chatwindow'>
            <div className='chatwindow-header'>
                <div className='header-info'>
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt=""/>
                    <div className='header-name'>Victor Hugo</div>
                </div>
                <div className='header-buttons'>
                    <div className='chatwindow-btn'>
                        <SearchIcon style={{color: '#919191'}} />
                    </div>
                    <div className='chatwindow-btn'>
                        <AttachFileIcon style={{color: '#919191'}} />
                    </div>
                    <div className='chatwindow-btn'>
                        <MoreVertIcon style={{color: '#919191'}} />
                    </div>
                </div>
            </div>
            <div ref={body} className='chatwindow-body'>
                {list.map((item, key) => (
                    <MessageItem
                        user={user}
                        key={key}
                        data={item}
                    />
                ))}
            </div>

            <div className='emojiarea' style={{height: emojiOpen ? '200px' : '0px'}}>
                <EmojiPicker
                    onEmojiClick={handleEmojiClick}
                    disableSearchBar
                />
            </div>
            <div className='chatwindow-footer'>
                <div className='pre'>
                    <div className='chatwindow-btn' onClick={() => setEmojiOpen(false)} style={{width: emojiOpen?40:0}}>
                        <CloseIcon style={{color: '#919191'}} />
                    </div>
                    <div className='chatwindow-btn' onClick={() => setEmojiOpen(true)}>
                        <InsertEmoticonIcon style={{color: emojiOpen?'#009688':'#919191'}} />
                    </div>
                </div>
                <div className='inputarea'>
                    <input 
                        className='input-message'
                        type='text' 
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder='Digite uma mensagem'
                    />
                </div>
                <div className='pos'>
                    {text === '' &&
                        <div className='chatwindow-btn'>
                            <MicIcon onClick={handleMic} style={{color: listening? '#126ECE' : '#919191'}} />
                        </div>
                    }
                    {text !== '' &&
                        <div onClick={handleSend} className='chatwindow-btn'>
                            <SendIcon style={{color: '#919191'}} />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};