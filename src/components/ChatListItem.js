import React from "react";
import './ChatListItem.css';

export default ({onClick, active, data}) => {
    return(
        <div className={`chatListItem ${active ? 'active' : ''}`} onClick={onClick}>
            <img src={data.image} alt="" />
            <div className="lines">
                <div className="line">
                    <div className="name">
                        {data.title}
                    </div>
                    <div className="date">
                        19:00
                    </div>
                </div>
                <div className="line">
                    <div className="last-msg">
                        <p>Opa, tudo bem? Opa, tudo bem? Opa, tudo bem? Opa, tudo bem? Opa, tudo bem? Opa, tudo bem? Opa, tudo bem? </p>
                    </div>
                </div>
            </div>
        </div>
    );
}