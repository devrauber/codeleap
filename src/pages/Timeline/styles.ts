import styled from 'styled-components';

export const Container = styled.div`
    width: 800px;
    min-height: 100%;
    background-color: white;
`;

export const Header = styled.div`
    width: 800px;
    height: 92px;
    background-color: black;
    display: flexbox;
    justify-content: flex-start;
    align-items: center;
`;

export const CreatePost = styled.div`
    max-width: 723px;
    max-height: 349px;
    display: flex;
    background-color: transparent;
    border: 1px solid #999999;
    margin: 44px 38px;
    padding: 23px 30px;
    flex-direction: column;
    align-items: flex-start;
`;

export const LabelAndInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: calc(100% - 34px);
    margin-bottom: 19px;
`;




