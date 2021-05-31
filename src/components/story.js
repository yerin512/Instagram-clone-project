import React from 'react';
import styled from 'styled-components';

import plus from '../images/plus.svg'

const Story = () => {
    return (
        <StotyContainer>
           <ul className="story-list">
                <li className="story-item story-my">
                    <div className="story-item-img">
                        <img src="" alt="" />
                    </div>
                    <p>내 스토리</p>
                </li>
                <li className="story-item">
                    <div className="story-item-img">
                        <img src="" alt="" />
                    </div>
                    <p>username</p>
                </li>
                <li className="story-item">
                    <div className="story-item-img">
                        <img src="" alt="" />
                    </div>
                    <p>username</p>
                </li>
                <li className="story-item">
                    <div className="story-item-img">
                        <img src="" alt="" />
                    </div>
                    <p>username</p>
                </li>
                <li className="story-item">
                    <div className="story-item-img">
                        <img src="" alt="" />
                    </div>
                    <p>username</p>
                </li>
                <li className="story-item">
                    <div className="story-item-img">
                        <img src="" alt="" />
                    </div>
                    <p>username</p>
                </li>
                <li className="story-item">
                    <div className="story-item-img">
                        <img src="" alt="" />
                    </div>
                    <p>username</p>
                </li>
                <li className="story-item">
                    <div className="story-item-img">
                        <img src="" alt="" />
                    </div>
                    <p>username</p>
                </li>
                <li className="story-item">
                    <div className="story-item-img">
                        <img src="" alt="" />
                    </div>
                    <p>username</p>
                </li>
           </ul>
        </StotyContainer>
    );
};

export default Story;

const StotyContainer = styled.section`
    width: 100%;
    height: 100px;
    padding: 16px;
    background: rgba(var(--d87,255,255,255),1);
    border: 1px solid rgba(var(--b6a,219,219,219),1);

    .story-list {
        display: flex;
        overflow-x: auto;
        font-size: 12px;
    }

    .story-item {
        margin-right: 10px;
        
        &-img {
            width: 56px;
            height: 56px;
            margin: 0 auto;
            background-color: aliceblue;
            border-radius: 112px;
        }
    }
`;