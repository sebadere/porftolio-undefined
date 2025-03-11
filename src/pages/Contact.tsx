import styled from "styled-components";

const Container = styled.div`
  border-top: 1px solid #CCCCCC;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 100px;
  padding-top: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    /* Center vertically in mobile */
    justify-content: center;
    align-items: center;
    /* Optional: Add a gap for spacing between the header and mail container */
    gap: 24px;
    border: 1px solid red;
  }
`;

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1px solid red;
    }
`;

const MailContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.span`
    color: #333333;
    font-size: 50px;

    @media (max-width: 768px) {
        font-size: 32px;
    }
`;

const Subtitle = styled.span`
    font-size: 40px;
    color: #B09AC2;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 32px;
    }
`;

const Email = styled.span`
    font-size: 24px;
    letter-spacing: .5px;
    color: #333333;
    width: 50%;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 25px;
        width: 100%;
        margin-top: 40px;
    }
`;

export const Contact = () => {
    return (
        <Container id="contact">
            <HeaderContainer>
                <Title>Contact us.</Title>
                <Subtitle>We keep it simple.</Subtitle>
            </HeaderContainer>
            <MailContainer>
                <Email>derewicki.sebastian@gmail.com</Email>
                <Email>ariel18vola@gmail.com</Email>
            </MailContainer>

        </Container>
    )
}
