import React from 'react'


export default function ProfilePreview(){
    return (
        <div className="profile-preview">
            <div className="avatar"></div>
            <div className="name">Jerry Dog</div>
            <div className="role">Sniffer</div>
            <div className="skills">
                <div className="skill">Dance</div>
                <div className="skill">Sing</div>
                <div className="skill">Play</div>
            </div>
        </div>
    )
}