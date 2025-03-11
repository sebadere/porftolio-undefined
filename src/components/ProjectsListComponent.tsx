import React, { useState } from 'react';
import styled from 'styled-components';
import mockImage from '../assets/projects/mock.jpg';
import reggiImage from '../assets/projects/reggi_admin_panel.png';
import reggiImage2 from '../assets/projects/panel_de_control_reggi.jpg';
import standoutImage from '../assets/projects/standout_login.jpg';
import standoutImage2 from '../assets/projects/panel_standout.jpeg';
import cuidaElMangoImage from '../assets/projects/cuida_el_mango_panel.jpg';
import detalleMangoImage from '../assets/projects/detalle_mango.jpg';
import { standoutTechnologiesData } from '../static/data/projectData';
import tsIcon from '../assets/projects/technologies/ts.png';
import reactIcon from '../assets/projects/technologies/react.png';
import figmaIcon from '../assets/projects/technologies/figma.png';
import firebaseIcon from '../assets/projects/technologies/firebase.png';

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
    /* Center horizontally in mobile */
    align-items: center;
    justify-content: center;
  }
`;

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* Center horizontally */
  gap: 12px;/* Spacing between arrows and image */
  @media (max-width: 900px) {  
    gap: 6px;
  }
`;

const CarouselButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 30px;
  color: #333;
  margin: 0 8px;          /* Add horizontal margin so arrows don’t hug the edges */

  &:hover {
    color: #B09AC2;
  }
`;

const ProjectImage = styled.img`
  width: 640px;
  max-width: 100%;
  height: auto;
  max-height: 530px;
  border-radius: 16px;
  object-fit: contain;
  @media (max-width: 768px) {
      width: 90vw;
      height: auto;
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
  @media (max-width: 768px) {
      margin: 20px auto;
  }
`;

const DescriptionContainer = styled.div`
  max-width: 640px;
  font-size: 18px;
  color: #555555;
  line-height: 1.6;
`;

export const ProjectsListComponent = () => {
    // State to manage toggle between image/carousel and description per project
    const [expandedProjects, setExpandedProjects] = useState([false, false, false]);
    // State to manage the current carousel image index per project
    const [currentImageIndices, setCurrentImageIndices] = useState([0, 0, 0]);

    // Data for each project, now including an array of images and its own array of technologies
    const projects = [
        {
            title: "StandOut Agency",
            subtitle: "Streamlined Digital Operations",
            images: [standoutImage, standoutImage2],
            description: "Standout Agency was an all-encompassing backoffice solution developed for a leading digital positioning company. The primary objective was to empower the Standout team by providing a unified platform to manage their teams, monitor sales, oversee collections, and implement discounts efficiently. By incorporating a gamification approach, the system was designed to inspire and motivate employees to engage actively with the platform and record their sales. This innovative solution not only streamlines operational processes but also transforms everyday tasks into a rewarding and dynamic experience, redefining the way digital marketing services are managed and delivered.",
            technologies: standoutTechnologiesData // Same tech list for StandOut Agency
        },
        {
            title: "Reggi y Cia",
            subtitle: "Seamless Auction Management",
            images: [reggiImage, reggiImage2],
            description: "Reggi y Cia was a project commissioned by Almoby to develop a comprehensive platform for managing live auctions for an auction house. The platform was designed to provide complete control over the auction process, enabling live streaming of the events while allowing team members to upload and edit auction details in real time. This solution streamlined the management of auctions by integrating traditional processes with cutting-edge digital tools, ensuring accurate and timely updates. By bridging the gap between live event broadcasting and efficient backend management, the platform elevated the overall operational efficiency and transparency of the auction process.",
            technologies: standoutTechnologiesData // Same tech list for Reggi y Cia
        },
        {
            title: "Cuida el Mango",
            subtitle: "Smart Expense Tracking",
            images: [cuidaElMangoImage, detalleMangoImage],
            description: "Cuida el Mango is a personal finance management solution designed to empower users to take control of their monthly expenses. The platform offers a comprehensive dashboard where individuals can easily track, analyze, and manage their spending habits over time. By providing clear, interactive visualizations and intuitive tools, Cuida el Mango transforms financial management into an engaging and transparent experience. Users can monitor their expenses month by month, allowing them to make informed decisions, set budgets, and work towards improved financial stability.",
            technologies: [
                {
                    img: figmaIcon,
                    title: 'FIGMA',
                    subtitle: 'Application modeling'
                },
                {
                    img: reactIcon,
                    title: 'REACT',
                    subtitle: 'Frontend development'
                },
                {
                    img: firebaseIcon,
                    title: 'Firebase',
                    subtitle: 'Database management'
                },
                {
                    img: tsIcon,
                    title: 'Typsescript',
                    subtitle: 'Backend development'
                }
                // Add more technologies if needed
            ]
        }
    ];

    const handleViewProject = (index: any) => {
        // Toggle between description and carousel
        setExpandedProjects(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    const handlePrevious = (projectIndex: any) => {
        setCurrentImageIndices(prevState => {
            const newState = [...prevState];
            const totalImages = projects[projectIndex].images.length;
            newState[projectIndex] = (newState[projectIndex] - 1 + totalImages) % totalImages;
            return newState;
        });
    };

    const handleNext = (projectIndex: any) => {
        setCurrentImageIndices(prevState => {
            const newState = [...prevState];
            const totalImages = projects[projectIndex].images.length;
            newState[projectIndex] = (newState[projectIndex] + 1) % totalImages;
            return newState;
        });
    };

    return (
        <div id='projects'>
            <TitleContainer>Some of our work.</TitleContainer>
            {projects.map((project, index) => (
                <ProjectContainer key={index}>
                    <div>
                        <ProjectPrincipalInformationContainer>
                            <ProjectTitle>{project.title}</ProjectTitle>
                            <ProjectSubTitle>{project.subtitle}</ProjectSubTitle>
                        </ProjectPrincipalInformationContainer>

                        <ProjectTecList>
                            {project.technologies.map((tech, techIndex) => (
                                <ProjectTecListItem key={techIndex}>
                                    <TechnologiesIcon src={tech.img} alt='technologies icon' />
                                    <TechnologiesInformationContainer>
                                        <TechnologiesItemTitle>{tech.title}</TechnologiesItemTitle>
                                        <TechnologiesItemSubTitle>{tech.subtitle}</TechnologiesItemSubTitle>
                                    </TechnologiesInformationContainer>
                                </ProjectTecListItem>
                            ))}
                        </ProjectTecList>

                        <SeeMoreButton onClick={() => handleViewProject(index)}>
                            Description
                        </SeeMoreButton>
                    </div>
                    <div>
                        {expandedProjects[index] ? (
                            <DescriptionContainer>
                                {project.description}
                            </DescriptionContainer>
                        ) : (
                            <CarouselContainer>
                                <CarouselButton onClick={() => handlePrevious(index)}>◀</CarouselButton>
                                <ProjectImage src={project.images[currentImageIndices[index]]} alt="project image" />
                                <CarouselButton onClick={() => handleNext(index)}>▶</CarouselButton>
                            </CarouselContainer>
                        )}
                    </div>
                </ProjectContainer>
            ))}
        </div>
    );
};
