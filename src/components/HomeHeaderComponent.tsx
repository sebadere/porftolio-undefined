import styled from 'styled-components';

const Container = styled.div`
    margin-top: 100px;
    @media (max-width: 768px) {
        margin-top: 50px;
    }
`;

const TitleContainer = styled.h1`
    display: flex;
    flex-direction: column;
`;

const Text = styled.span`
    color: #333333;
    font-weight: bold;
    font-size: 70px;
    font-family: 'Roboto', sans-serif;

    @media (max-width: 768px) {
        font-size: 40px;
    }
`;

const SpecialText = styled.span`
    color: #B09AC2;
    font-weight: bold;
    font-size: 70px;
    font-family: 'Roboto', sans-serif;

    @media (max-width: 768px) {
        font-size: 40px;
    }
`;

export const HomeHeaderComponent = () => {
  return (
    <Container id='home'>
        <TitleContainer>
            <Text>Elevating Ideas</Text>
            <Text>through</Text>
            <SpecialText>Code and Creativity.</SpecialText>
        </TitleContainer>
    </Container>
  )
}
