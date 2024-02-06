import styled from 'styled-components';
import mockImage from '../assets/projects/mock.jpg';
import { standoutTechnologiesData } from '../static/data/projectData';

const TitleContainer = styled.h2`
    color: #333333;
    font-size: 50px;

    @media (max-width: 768px) {
        font-size: 32px;
    }
`;

const ProjectContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #CCCCCC;
    padding-top: 50px;
    padding-bottom: 50px;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: unset;
    }
`;

const ProjectImage = styled.img`
    width: 640px;
    height: 530px;
    border-radius: 16px;

    @media (max-width: 768px) {
        height: 300px;
        width: 90vw;
        margin-top: 30px;
    }
`;

const ProjectPrincipalInformationContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProjectTitle = styled.span`
    color: #808080;
    font-size: 45px;
    font-weight: 600;

    @media (max-width: 768px) {
        font-size: 30px;
    }
`;

const ProjectSubTitle = styled.span`
    font-size: 45px;
    font-weight: 500;

    @media (max-width: 768px) {
       font-size: 30px;
    }
`;

const ProjectTecList = styled.ul`
    list-style: none;
    padding-left: 0;
`;

const ProjectTecListItem = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 15px;
`;

const TechnologiesIcon = styled.img`
    width: 33px;
    height: 33px;
    background-color: #555555;
    padding: 12px;
    border-radius: 100px;
    margin-right: 8px;
    object-fit: contain;
`;

const TechnologiesInformationContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const TechnologiesItemTitle = styled.span`
    color: #808080;
    font-weight: 600;
    letter-spacing: .3px;
    font-size: 16px;
`;

const TechnologiesItemSubTitle = styled.span`
    font-weight: bold;
    font-size: 16px;
    letter-spacing: .3px;
`;

const SeeMoreButton = styled.button`
    margin-top: 15px;
    background-color: transparent;
    border: 1px solid #CCCCCC;
    padding: 14px;
    width: 150px;
    cursor: pointer;
    border-radius: 20px;
    font-weight: 600;
    color: #333333;
    letter-spacing: 0.3px;
    position: relative;
    transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out, transform 0.2s ease-in-out;

    &:hover {
    background-color: linear-gradient(90deg, #CCCCCC, #B09AC2);
    border-color: #B09AC2;
    }

    &:active {
    transform: scale(0.95);
    }

    &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid #B09AC2;
    border-radius: 20px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease-in-out;
    }

    &:hover::before {
    opacity: 1;
    }
`;

export const ProjectsListComponent = () => {
  return (
    <div>
        <TitleContainer>Some of our work.</TitleContainer>
        <ProjectContainer>
            <div>
                <ProjectPrincipalInformationContainer>
                    <ProjectTitle>Title of the project</ProjectTitle>
                    <ProjectSubTitle>Subtitle of the project</ProjectSubTitle>
                </ProjectPrincipalInformationContainer>

                <ProjectTecList>

                {
                    standoutTechnologiesData.map((item) => (
                        <ProjectTecListItem>
                            <TechnologiesIcon src={item.img} alt='technologies icon' />
                            <TechnologiesInformationContainer>
                                <TechnologiesItemTitle>{item.title}</TechnologiesItemTitle>
                                <TechnologiesItemSubTitle>{item.subtitle}</TechnologiesItemSubTitle>
                            </TechnologiesInformationContainer>
                        </ProjectTecListItem>
                    ))
                }

                </ProjectTecList>

                <SeeMoreButton>View project</SeeMoreButton>
            </div>
            <div>
                <ProjectImage src={mockImage} alt="project image" />
            </div>
        </ProjectContainer>


        <ProjectContainer>
            <div>
                <ProjectPrincipalInformationContainer>
                    <ProjectTitle>Title of the project</ProjectTitle>
                    <ProjectSubTitle>Subtitle of the project</ProjectSubTitle>
                </ProjectPrincipalInformationContainer>

                <ProjectTecList>

                {
                    standoutTechnologiesData.map((item) => (
                        <ProjectTecListItem>
                            <TechnologiesIcon src={item.img} alt='technologies icon' />
                            <TechnologiesInformationContainer>
                                <TechnologiesItemTitle>{item.title}</TechnologiesItemTitle>
                                <TechnologiesItemSubTitle>{item.subtitle}</TechnologiesItemSubTitle>
                            </TechnologiesInformationContainer>
                        </ProjectTecListItem>
                    ))
                }

                </ProjectTecList>

                <SeeMoreButton>View project</SeeMoreButton>
            </div>
            <div>
                <ProjectImage src={mockImage} alt="project image" />
            </div>
        </ProjectContainer>

        <ProjectContainer>
            <div>
                <ProjectPrincipalInformationContainer>
                    <ProjectTitle>Title of the project</ProjectTitle>
                    <ProjectSubTitle>Subtitle of the project</ProjectSubTitle>
                </ProjectPrincipalInformationContainer>

                <ProjectTecList>

                {
                    standoutTechnologiesData.map((item) => (
                        <ProjectTecListItem>
                            <TechnologiesIcon src={item.img} alt='technologies icon' />
                            <TechnologiesInformationContainer>
                                <TechnologiesItemTitle>{item.title}</TechnologiesItemTitle>
                                <TechnologiesItemSubTitle>{item.subtitle}</TechnologiesItemSubTitle>
                            </TechnologiesInformationContainer>
                        </ProjectTecListItem>
                    ))
                }

                </ProjectTecList>

                <SeeMoreButton>View project</SeeMoreButton>
            </div>
            <div>
                <ProjectImage src={mockImage} alt="project image" />
            </div>
        </ProjectContainer>
    </div>
  )
}
