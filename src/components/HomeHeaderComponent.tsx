import styled from 'styled-components';

const Container = styled.div`
    margin-top: 100px;
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
`;

const SpecialText = styled.span`
    color: #B09AC2;
    font-weight: bold;
    font-size: 70px;
    font-family: 'Roboto', sans-serif;
`;

export const HomeHeaderComponent = () => {
  return (
    <Container>
        <TitleContainer>
            <Text>Elevating Ideas</Text>
            <Text>through</Text>
            <SpecialText>Code and Creativity.</SpecialText>
        </TitleContainer>
    </Container>
  )
}
