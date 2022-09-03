import React from "react";
import Title1 from "../Title1";
import { Container, Header, Content } from './styles'

interface PostProps{
    children?: React.ReactNode;
};

const Post: React.FC<PostProps> = function ({
    children,
}){
    return(
        <Container>
            <Header>
                <Title1 style={{color:"white", marginLeft: 37}}>titulo do post</Title1>
            </Header>
            <Content>
                
            </Content>
        </Container>
    )
}

export default Post;