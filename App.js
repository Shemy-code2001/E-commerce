import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaFacebook, FaTwitter, FaLinkedin, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const Section = styled.section`
  padding: 4rem 8rem;
  position: relative;
  overflow: hidden;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #ffd700;
  color: #000;
  border: none;
  cursor: pointer;
  border-radius: 25px;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e6c200;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

const HeroSection = styled(Section)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  color: #fff;
  height: 100vh;
  background-image: url('https://i.pinimg.com/564x/f5/71/bf/f571bf639b68de4ef373bdc692bdd0ce.jpg');
  background-size: cover;
  background-position: center;
  animation: ${fadeIn} 1s ease-out;
`;

const HeroContent = styled.div`
  max-width: 50%;
  z-index: 2;
  animation: ${slideUp} 1s ease-out;
`;

const Logo = styled.div`
  font-weight: bold;
  position: absolute;
  top: 2rem;
  left: 4rem;
  font-size: 1.5rem;
  z-index: 3;
`;

const PhoneNumber = styled.div`
  position: absolute;
  top: 2rem;
  right: 16rem;
  font-size: 0.9rem;
  z-index: 3;
`;

const StartProject = styled(Button)`
  position: absolute;
  top: 2rem;
  right: 4rem;
  z-index: 3;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #ccc;
`;

const CTAButton = styled(Button)`
  font-size: 1.1rem;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialIcon = styled.a`
  color: #fff;
  transition: color 0.3s ease;

  &:hover {
    color: #ffd700;
  }
`;

const YellowCircle = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  background-color: rgba(255, 215, 0, 0.2);
  border-radius: 50%;
  z-index: 1;
  top: 50%;
  right: 15%;
  transform: translateY(-50%);
`;

const ProjectCount = styled.div`
  position: absolute;
  top: 20%;
  right: 10%;
  text-align: right;
  z-index: 3;
`;

const Number = styled.span`
  font-size: 4rem;
  font-weight: bold;
  color: #ffd700;
`;

const Text = styled.span`
  display: block;
  font-size: 1rem;
`;

const ProjectSection = styled(Section)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f4f4f4;
  color: #333;
  background-image: url('https://i.pinimg.com/564x/8d/5b/69/8d5b69823fd02de0e6d8a4e0d307d219.jpg');
  background-size: cover;
  background-position: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const ProjectImageWrapper = styled.div`
  position: relative;
  width: 45%;
  height: 400px;
  margin-right: 4rem;
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.2));
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const NavigationButton = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  background-color: rgba(255, 215, 0, 0.8);
  padding: 0.75rem;
  border-radius: 50%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  z-index: 2;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ffd700;
    transform: translateY(-50%) scale(1.1);
  }

  &:first-child {
    left: -2rem;
  }

  &:last-child {
    right: -2rem;
  }
`;

const ProjectInfo = styled.div`
  width: 45%;
`;

const ProjectTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333;
`;

const ProjectDetails = styled.ul`
  font-size: 1.2rem;
  color: #555;
  line-height: 1.8;
  list-style-type: none;
  padding: 0;
`;

const ProjectDetailItem = styled.li`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;

  &:before {
    content: '•';
    color: #ffd700;
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }
`;

const HeroSectionComponent = () => {
  return (
    <HeroSection>
      <Logo>EVEY</Logo>
      <PhoneNumber>+212 612 345 678</PhoneNumber>
      <StartProject>START PROJECT</StartProject>

      <HeroContent>
        <Title>Effective solutions for your business</Title>
        <Subtitle>We make awesome websites that sell</Subtitle>
        <CTAButton>Our works</CTAButton>
        <SocialIcons>
          <SocialIcon href="#"><FaFacebook size={24} /></SocialIcon>
          <SocialIcon href="#"><FaTwitter size={24} /></SocialIcon>
          <SocialIcon href="#"><FaLinkedin size={24} /></SocialIcon>
        </SocialIcons>
      </HeroContent>

      <YellowCircle />
      <ProjectCount>
        <Number>200+</Number>
        <Text>projects in our portfolio</Text>
      </ProjectCount>
    </HeroSection>
  );
};

const ProjectSectionComponent = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const projects = [
    {
      image: "https://i.pinimg.com/736x/bd/67/bd/bd67bdb77687a1637114ec12a1cf38db.jpg",
      title: "E-commerce Platform",
      details: [
        "User targeting",
        "Custom animations",
        "Integration with other CRM",
        "Responsive design"
      ]
    },
    {
      image: "https://i.pinimg.com/564x/0c/72/53/0c7253f202f52a3b0d90a83eecc7867e.jpg",
      title: "E-commerce Platform",
      details: [
        "User targeting",
        "Custom animations",
        "Integration with other CRM",
        "Responsive design"
      ]
    },
    {
      image: "https://i.pinimg.com/736x/64/a6/50/64a65062fbcdf68f00da6f85dd80e4de.jpg",
      title: "E-commerce Platform",
      details: [
        "User targeting",
        "Custom animations",
        "Integration with other CRM",
        "Responsive design"
      ]
    },
    {
      image: "https://i.pinimg.com/564x/5a/de/3e/5ade3e11b0d8ed1ea1e75d85ee0ebc52.jpg",
      title: "E-commerce Platform",
      details: [
        "User targeting",
        "Custom animations",
        "Integration with other CRM",
        "Responsive design"
      ]
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const interval = setInterval(nextProject, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ProjectSection>
      <ProjectImageWrapper>
        <NavigationButton onClick={prevProject}>
          <FaChevronLeft size={20} color="#000" />
        </NavigationButton>
        <ProjectImage src={projects[currentProject].image} alt="Project Image" />
        <NavigationButton onClick={nextProject}>
          <FaChevronRight size={20} color="#000" />
        </NavigationButton>
      </ProjectImageWrapper>
      <ProjectInfo>
        <ProjectTitle>{projects[currentProject].title}</ProjectTitle>
        <ProjectDetails>
          {projects[currentProject].details.map((detail, index) => (
            <ProjectDetailItem key={index}>{detail}</ProjectDetailItem>
          ))}
        </ProjectDetails>
        <Button>View Project</Button>
      </ProjectInfo>
    </ProjectSection>
  );
};

const App = () => {
  return (
    <>
      <HeroSectionComponent />
      <ProjectSectionComponent />
    </>
  );
};

export default App;
