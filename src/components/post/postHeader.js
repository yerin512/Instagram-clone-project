import React from 'react';
import styled from 'styled-components';

import profile from '../../images/noprofile.jpg'

 const postHeader = () => {
    return (
        <div>
            <PostHeaderContainer>
                <img src={profile} alt=""/>
                <p>yerin_</p>
                <div>. . .</div>
            </PostHeaderContainer>
        </div>
    )
}

const PostHeaderContainer = styled.section`
display:flex;
width:100%;
background-color: #fff;

img{ width:32px;
height:32px;}

div{align-items:right}
`;



export default postHeader;