import React, { useState, useContext } from 'react';
import { Box, Container, Typography, Collapse } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import { FaReact, FaPython, FaJava, FaNodeJs, FaPhp, FaAngular, FaLaptopCode, FaServer, FaDatabase, FaChevronDown } from 'react-icons/fa';
import { SiJavascript, SiFlutter, SiDotnet, SiMysql, SiSupabase, SiPostgresql } from 'react-icons/si';
import { DiMongodb } from 'react-icons/di';
import { TranslationContext } from '../App';

// Keyframe animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-15px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Styled components
const SectionWrapper = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%)',
  padding: '6rem 0',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '10%',
    right: '-5%',
    width: '400px',
    height: '400px',
    background: 'radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, transparent 70%)',
    borderRadius: '50%',
    pointerEvents: 'none',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '15%',
    left: '-5%',
    width: '350px',
    height: '350px',
    background: 'radial-gradient(circle, rgba(96, 165, 250, 0.06) 0%, transparent 70%)',
    borderRadius: '50%',
    pointerEvents: 'none',
  },
  [theme.breakpoints.down('md')]: {
    padding: '4rem 0',
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '3rem',
  fontWeight: 800,
  textAlign: 'center',
  marginBottom: '1rem',
  background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-12px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80px',
    height: '4px',
    background: 'linear-gradient(90deg, #2563EB 0%, #60A5FA 100%)',
    borderRadius: '2px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
}));

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  textAlign: 'center',
  color: '#64748b',
  maxWidth: '800px',
  margin: '0 auto',
  marginTop: '2rem',
  marginBottom: '4rem',
  lineHeight: 1.7,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    marginBottom: '3rem',
  },
}));

const AccordionPanel = styled(Box)(({ expanded, theme }) => ({
  marginBottom: '1.5rem',
  borderRadius: '16px',
  overflow: 'hidden',
  background: 'linear-gradient(135deg, #ffffffff 0%, #ffffffff 100%)', // # HERE - Accordion panel background color
  border: '2px solid rgba(37, 99, 235, 0.1)', // # HERE - Accordion panel border color
  boxShadow: expanded 
    ? '0 12px 40px rgba(37, 99, 235, 0.12)'
    : '0 6px 20px rgba(37, 99, 235, 0.06)',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  animation: `${fadeIn} 0.5s ease-out`,
  '&:hover': {
    boxShadow: expanded
      ? '0 16px 50px rgba(37, 99, 235, 0.15)'
      : '0 8px 30px rgba(37, 99, 235, 0.1)',
    border: '2px solid rgba(37, 99, 235, 0.25)',
  },
  [theme.breakpoints.down('sm')]: {
    borderRadius: '12px',
    marginBottom: '1rem',
  },
}));

const PanelHeader = styled(Box)(({ expanded, theme }) => ({
  padding: '2rem 2.5rem',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  transition: 'all 0.3s ease',
  background: '#ffffffff', // # HERE - Panel header background color
  '&:hover': {
    background: 'transparent', // # HERE - Panel header hover background color
  },
  [theme.breakpoints.down('md')]: {
    padding: '1.5rem 1.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '1.25rem 1rem',
  },
}));

const HeaderLeft = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',
  [theme.breakpoints.down('md')]: {
    gap: '1rem',
  },
  [theme.breakpoints.down('sm')]: {
    gap: '0.75rem',
  },
}));

const CategoryIconWrapper = styled(Box)(({ expanded, theme }) => ({
  width: '56px',
  height: '56px',
  borderRadius: '14px',
  background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.08) 0%, rgba(59, 130, 246, 0.12) 100%)', // # HERE - Category icon background color
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.6rem',
  color: '#2563EB', // # HERE - Category icon color
  transition: 'all 0.3s ease',
  border: '2px solid rgba(37, 99, 235, 0.15)', // # HERE - Category icon border color
  flexShrink: 0,
  '& svg': {
    filter: 'drop-shadow(0 2px 6px rgba(37, 99, 235, 0.2))',
  },
  [theme.breakpoints.down('md')]: {
    width: '48px',
    height: '48px',
    fontSize: '1.4rem',
    borderRadius: '12px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '40px',
    height: '40px',
    fontSize: '1.2rem',
    borderRadius: '10px',
  },
}));

const HeaderText = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
  minWidth: 0,
  flex: 1,
});

const CategoryTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.6rem',
  fontWeight: 700,
  color: '#1e293b', // Category title text color
  transition: 'all 0.3s ease',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.3rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.1rem',
  },
}));

const CategoryCount = styled(Typography)(({ theme }) => ({
  fontSize: '0.9rem',
  fontWeight: 600,
  color: '#64748b', // Category count text color
  transition: 'all 0.3s ease',
  [theme.breakpoints.down('md')]: {
    fontSize: '0.85rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem',
  },
}));

const ChevronIcon = styled(FaChevronDown)(({ expanded, theme }) => ({
  fontSize: '1.3rem',
  color: '#2563EB', // Chevron icon color
  transition: 'transform 0.3s ease',
  transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
  flexShrink: 0,
  [theme.breakpoints.down('md')]: {
    fontSize: '1.1rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}));

const PanelContent = styled(Box)(({ theme }) => ({
  padding: '0 2.5rem 2.5rem 2.5rem', // # HERE - Content area padding
  [theme.breakpoints.down('md')]: {
    padding: '0 1.5rem 1.5rem 1.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '0 1rem 1rem 1rem',
  },
}));

const TechGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
  gap: '0.75rem', // Horizontal and vertical gap between icons
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
    gap: '0.65rem', // Horizontal and vertical gap between icons
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
    gap: '0.5rem', // Horizontal and vertical gap between icons
  },
}));

const TechItem = styled(Box)(({ delay }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  animation: `${slideIn} 0.5s ease-out ${delay}s both`,
}));

const TechIconWrapper = styled(Box)(({ theme }) => ({
  width: '100px',
  height: '100px',
  borderRadius: '16px',
  background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, rgba(59, 130, 246, 0.08) 100%)', // # HERE - Tech icon container background color
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid rgba(37, 99, 235, 0.1)', // # HERE - Tech icon container border color
  transition: 'all 0.3s ease',
  flexShrink: 0,
  '& svg': {
    fontSize: '4rem',
    filter: 'drop-shadow(0 3px 8px rgba(0, 0, 0, 0.1))',
    width: '100%',
    height: '100%',
    maxWidth: '64px',
    maxHeight: '64px',
  },
  [theme.breakpoints.down('md')]: {
    width: '80px',
    height: '80px',
    borderRadius: '14px',
    '& svg': {
      fontSize: '3.2rem',
      maxWidth: '52px',
      maxHeight: '52px',
    },
  },
  [theme.breakpoints.down('sm')]: {
    width: '60px',
    height: '60px',
    borderRadius: '12px',
    '& svg': {
      fontSize: '2.5rem',
      maxWidth: '40px',
      maxHeight: '40px',
    },
  },
}));

const TechName = styled(Typography)(({ theme }) => ({
  fontSize: '1.35rem',
  fontWeight: 700,
  color: '#1e293b', // Tech name text color
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.15rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}));

// Technology data organized by category
const categories = [
  {
    id: 'backend',
    title: 'technologystack.category_backend_title',
    icon: <FaServer />,
    technologies: [
      { name: 'Python', icon: <FaPython size={64} color="#3776AB" /> },
      { name: 'C#', icon: <SiDotnet size={64} color="#512BD4" /> },
      { name: 'Java', icon: <FaJava size={64} color="#007396" /> },
      { name: 'Node.js', icon: <FaNodeJs size={64} color="#339933" /> },
      { name: '.NET', icon: <SiDotnet size={64} color="#512BD4" /> },
      { name: 'PHP', icon: <FaPhp size={64} color="#777BB4" /> },
    ],
  },
  {
    id: 'frontend',
    title: 'technologystack.category_frontend_title',
    icon: <FaLaptopCode />,
    technologies: [
      { name: 'React', icon: <FaReact size={64} color="#61DAFB" /> },
      { name: 'JavaScript', icon: <SiJavascript size={64} color="#F7DF1E" /> },
      { name: 'Flutter', icon: <SiFlutter size={64} color="#02569B" /> },
      { name: 'Angular', icon: <FaAngular size={64} color="#DD0031" /> },
    ],
  },
  {
    id: 'databases',
    title: 'technologystack.category_databases_title',
    icon: <FaDatabase />,
    technologies: [
      { name: 'MySQL', icon: <SiMysql size={64} color="#4479A1" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql size={64} color="#336791" /> },
      { name: 'MongoDB', icon: <DiMongodb size={64} color="#47A248" /> },
      { name: 'Supabase', icon: <SiSupabase size={64} color="#3ECF8E" /> },
    ],
  },
];

const TechnologyStack = () => {
  const { translations } = useContext(TranslationContext);
  const [expandedPanels, setExpandedPanels] = useState(['backend']);

  // Translation helper function
  const t = (key) => translations[key] || key;

  const handlePanelClick = (panelId) => {
    setExpandedPanels(prev => 
      prev.includes(panelId) 
        ? prev.filter(id => id !== panelId)
        : [...prev, panelId]
    );
  };

  return (
    <SectionWrapper id="technologies">
      <Container maxWidth="lg">
        <Box sx={{ marginBottom: '4rem' }}>
          <SectionTitle variant="h2">
            {t('technologystack.section_title')}
          </SectionTitle>
          <SectionSubtitle>
            {t('technologystack.section_subtitle')}
          </SectionSubtitle>
        </Box>
        <Box>
          {categories.map((category) => (
            <AccordionPanel
              key={category.id}
              expanded={expandedPanels.includes(category.id)}
            >
              <PanelHeader
                expanded={expandedPanels.includes(category.id)}
                onClick={() => handlePanelClick(category.id)}
              >
                <HeaderLeft>
                  <CategoryIconWrapper expanded={expandedPanels.includes(category.id)}>
                    {category.icon}
                  </CategoryIconWrapper>
                  <HeaderText>
                    <CategoryTitle>
                      {t(category.title)}
                    </CategoryTitle>
                    <CategoryCount>
                      {category.technologies.length} {t('technologystack.technologies')}
                    </CategoryCount>
                  </HeaderText>
                </HeaderLeft>
                <ChevronIcon expanded={expandedPanels.includes(category.id)} />
              </PanelHeader>
              <Collapse in={expandedPanels.includes(category.id)} timeout={400}>
                <PanelContent>
                  <TechGrid>
                    {category.technologies.map((tech, index) => (
                      <TechItem key={index} delay={index * 0.08}>
                        <TechIconWrapper>{tech.icon}</TechIconWrapper>
                        <TechName>{tech.name}</TechName>
                      </TechItem>
                    ))}
                  </TechGrid>
                </PanelContent>
              </Collapse>
            </AccordionPanel>
          ))}
        </Box>
      </Container>
    </SectionWrapper>
  );
};

export default TechnologyStack;
