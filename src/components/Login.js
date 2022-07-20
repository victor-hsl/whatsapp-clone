import React from 'react';
import Api from '../Api';
import '../App.css';

export default ({onReceive}) => {
    const facebookLogin = async () => {
        let result = await Api.fbPopup();
        if(result){
            onReceive(result.user);
        } else {
            alert('erro');
        }
    }
    return(
        <div className='login'>
            <button onClick={facebookLogin} >
                Logar com Facebook
            </button>
        </div>
    );
}