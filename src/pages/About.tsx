import styled from "styled-components";
import aboutUsImage from '../assets/about-us/example.jpg';

const AboutUsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 100px;
    margin-bottom: 100px;
`;

const InformationContainer = styled.div`
    margin-left: 50px;
`;

const Image = styled.img`
    width: 100%;
    height: 430px;
`;

const Title = styled.h2`
    color: #333333;
    font-size: 50px;
`;

const TextContent = styled.p`
    color: #555555;
    font-size: 22px;
    font-weight: 600;
`;

export const About = () => {
  return (
    <AboutUsContainer>
        <Image src={aboutUsImage} alt="about us image" />
        <InformationContainer>
            <Title>About us.</Title>
            <TextContent>We are a passionate team of creative minds, uniting expertise in design, frontend, and backend development to breathe life into diverse projects. Our mission is to transcend conventional boundaries by crafting solutions that challenge the status quo. Driven by technical excellence and seamless collaboration, we are dedicated to transforming ideas into impactful digital experiences. Welcome to our space where innovation and coding seamlessly converge.</TextContent>
        </InformationContainer>
    </AboutUsContainer>
  )
}
