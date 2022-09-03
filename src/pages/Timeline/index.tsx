import React from "react";
import { Container, Header, CreatePost, LabelAndInput } from "./styles";

import Background from "../../components/Background";
import Title1 from "../../components/Title1";
import Label1 from "../../components/Label1"
import Input1 from "../../components/Input1"
import Buttons from "../../components/Buttons";
import Post from "../../components/Post";

export default function Timeline() {
    return (
        <Background>
            <Container>
                <Header>
                    <Title1 style={{ color: "white", marginLeft: 37 }}>
                    CodeLeap Network
                    </Title1>
                </Header>
                <CreatePost>
                    <Title1>What's on your mind?</Title1>
                    <LabelAndInput>
                        <Label1 style={{marginBottom: 7}}>Title</Label1>
                        <Input1 placeholder={"Hello World"}></Input1>
                    </LabelAndInput>
                    <LabelAndInput>
                        <Label1 style={{marginBottom: 7}}>Content</Label1>
                        <Input1 style={{paddingBottom: 43}} placeholder={"Content here"}></Input1>
                    </LabelAndInput>
                    <Buttons style={{ marginTop: 42, marginLeft: 531 }}>Create</Buttons>
                </CreatePost>
                <Post></Post>
            </Container>
        </Background>
    );
}
