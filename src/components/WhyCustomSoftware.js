import React, { useState, useContext } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import SecurityIcon from '@mui/icons-material/Security';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import SpeedIcon from '@mui/icons-material/Speed';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import logoWhite from '../assets/images/logo_white.png';
import { TranslationContext } from '../App';

// Keyframe animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
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
    top: '15%',
    right: '-5%',
    width: '500px',
    height: '500px',
    background: 'radial-gradient(circle, rgba(37, 99, 235, 0.06) 0%, transparent 70%)',
    borderRadius: '50%',
    pointerEvents: 'none',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '20%',
    left: '-5%',
    width: '450px',
    height: '450px',
    background: 'radial-gradient(circle, rgba(96, 165, 250, 0.05) 0%, transparent 70%)',
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
  maxWidth: '900px',
  margin: '0 auto',
  marginTop: '2rem',
  marginBottom: '4rem',
  lineHeight: 1.6,
  [theme.breakpoints.down('md')]: {
    fontSize: '1.1rem',
    marginBottom: '3rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    marginBottom: '2.5rem',
  },
}));

const InteractiveContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '4rem',
  [theme.breakpoints.down('lg')]: {
    gap: '3rem',
  },
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: '3rem',
  },
}));

const CircularLayout = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '600px',
  height: '600px',
  flexShrink: 0,
  [theme.breakpoints.down('lg')]: {
    width: '500px',
    height: '500px',
  },
  [theme.breakpoints.down('md')]: {
    width: '450px',
    height: '450px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '350px',
    height: '350px',
  },
}));

const CenterCircle = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '180px',
  height: '180px',
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
  border: '4px solid rgba(255, 255, 255, 0.9)',
  boxShadow: '0 16px 48px rgba(37, 99, 235, 0.4), inset 0 4px 12px rgba(255, 255, 255, 0.2)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  left: '50%',
  top: '50%',
  marginLeft: '-90px',
  marginTop: '-90px',
  zIndex: 2,
  cursor: 'pointer',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  animation: `${pulse} 3s ease-in-out infinite`,
  '&:hover': {
    transform: 'scale(1.1)',
    boxShadow: '0 20px 60px rgba(37, 99, 235, 0.5), inset 0 4px 12px rgba(255, 255, 255, 0.3)',
    animation: 'none',
  },
  [theme.breakpoints.down('lg')]: {
    width: '160px',
    height: '160px',
    marginLeft: '-80px',
    marginTop: '-80px',
  },
  [theme.breakpoints.down('md')]: {
    width: '140px',
    height: '140px',
    marginLeft: '-70px',
    marginTop: '-70px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '110px',
    height: '110px',
    marginLeft: '-55px',
    marginTop: '-55px',
  },
}));

const LogoImage = styled('img')(({ theme }) => ({
  maxWidth: '130px',
  height: 'auto',
  filter: 'brightness(1.1) drop-shadow(0 4px 12px rgba(0, 0, 0, 0.2))',
  [theme.breakpoints.down('lg')]: {
    maxWidth: '120px',
  },
  [theme.breakpoints.down('md')]: {
    maxWidth: '110px',
  },
}));

const IconButton = styled(Box)(({ theme, active, angle }) => ({
  position: 'absolute',
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  background: active 
    ? 'linear-gradient(135deg, #2563EB 0%, #60A5FA 100%)'
    : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
  border: active ? '3px solid #2563EB' : '3px solid rgba(37, 99, 235, 0.2)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: active 
    ? '0 12px 32px rgba(37, 99, 235, 0.4)' 
    : '0 4px 16px rgba(37, 99, 235, 0.15)',
  left: '50%',
  top: '50%',
  marginLeft: '-50px',
  marginTop: '-50px',
  transform: `translate(${Math.cos(angle) * 200}px, ${Math.sin(angle) * 200}px)`,
  zIndex: active ? 3 : 1,
  '& svg': {
    fontSize: '2.5rem',
    color: active ? '#ffffff' : '#2563EB',
    transition: 'all 0.3s ease',
  },
  '&:hover': {
    transform: `translate(${Math.cos(angle) * 200}px, ${Math.sin(angle) * 200}px) scale(1.15)`,
    boxShadow: '0 16px 40px rgba(37, 99, 235, 0.35)',
    border: '3px solid #2563EB',
    '& svg': {
      animation: `${rotate} 0.6s ease`,
    },
  },
  [theme.breakpoints.down('lg')]: {
    width: '90px',
    height: '90px',
    marginLeft: '-45px',
    marginTop: '-45px',
    transform: `translate(${Math.cos(angle) * 180}px, ${Math.sin(angle) * 180}px)`,
    '&:hover': {
      transform: `translate(${Math.cos(angle) * 180}px, ${Math.sin(angle) * 180}px) scale(1.15)`,
    },
    '& svg': {
      fontSize: '2.2rem',
    },
  },
  [theme.breakpoints.down('md')]: {
    width: '80px',
    height: '80px',
    marginLeft: '-40px',
    marginTop: '-40px',
    transform: `translate(${Math.cos(angle) * 160}px, ${Math.sin(angle) * 160}px)`,
    '&:hover': {
      transform: `translate(${Math.cos(angle) * 160}px, ${Math.sin(angle) * 160}px) scale(1.15)`,
    },
    '& svg': {
      fontSize: '2rem',
    },
  },
  [theme.breakpoints.down('sm')]: {
    width: '65px',
    height: '65px',
    marginLeft: '-32.5px',
    marginTop: '-32.5px',
    transform: `translate(${Math.cos(angle) * 120}px, ${Math.sin(angle) * 120}px)`,
    '&:hover': {
      transform: `translate(${Math.cos(angle) * 120}px, ${Math.sin(angle) * 120}px) scale(1.15)`,
    },
    '& svg': {
      fontSize: '1.6rem',
    },
  },
}));

const InfoPanel = styled(Box)(({ theme }) => ({
  flex: 1,
  maxWidth: '600px',
  padding: '3rem',
  borderRadius: '20px',
  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
  border: '2px solid rgba(37, 99, 235, 0.15)',
  boxShadow: '0 12px 40px rgba(37, 99, 235, 0.12)',
  minHeight: '300px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  animation: `${slideInRight} 0.5s ease-out`,
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '5px',
    height: '100%',
    background: 'linear-gradient(180deg, #2563EB 0%, #60A5FA 100%)',
  },
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
    padding: '2.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '2rem',
  },
}));

const InfoTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.8rem',
  fontWeight: 700,
  color: '#1e293b',
  marginBottom: '1.5rem',
  lineHeight: 1.3,
  animation: `${fadeIn} 0.5s ease-out`,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  },
}));

const InfoDescription = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  color: '#64748b',
  lineHeight: 1.8,
  animation: `${fadeIn} 0.5s ease-out 0.1s both`,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}));

const WhyCustomSoftware = () => {
  const { translations } = useContext(TranslationContext);
  const [selectedBenefit, setSelectedBenefit] = useState(0);

  // Translation helper function
  const t = (key) => translations[key] || key;

  const benefits = [
    {
      icon: <SecurityIcon />,
      title: t('whycustomsoftware.benefit_gdpr_title'),
      description: t('whycustomsoftware.benefit_gdpr_description'),
      angle: 0,
    },
    {
      icon: <TrendingUpIcon />,
      title: t('whycustomsoftware.benefit_scalable_title'),
      description: t('whycustomsoftware.benefit_scalable_description'),
      angle: Math.PI / 3,
    },
    {
      icon: <IntegrationInstructionsIcon />,
      title: t('whycustomsoftware.benefit_integration_title'),
      description: t('whycustomsoftware.benefit_integration_description'),
      angle: (2 * Math.PI) / 3,
    },
    {
      icon: <SpeedIcon />,
      title: t('whycustomsoftware.benefit_efficiency_title'),
      description: t('whycustomsoftware.benefit_efficiency_description'),
      angle: Math.PI,
    },
    {
      icon: <EmojiObjectsIcon />,
      title: t('whycustomsoftware.benefit_innovation_title'),
      description: t('whycustomsoftware.benefit_innovation_description'),
      angle: (4 * Math.PI) / 3,
    },
    {
      icon: <SupportAgentIcon />,
      title: t('whycustomsoftware.benefit_support_title'),
      description: t('whycustomsoftware.benefit_support_description'),
      angle: (5 * Math.PI) / 3,
    },
  ];

  const handleCenterClick = () => {
    // Cycle through benefits when logo is clicked
    setSelectedBenefit((prev) => (prev + 1) % benefits.length);
  };

  return (
    <SectionWrapper id="why-custom-software">
      <Container maxWidth="xl">
        <Box sx={{ marginBottom: '4rem' }}>
          <SectionTitle variant="h2">
            {t('whycustomsoftware.section_title')}
          </SectionTitle>
          <SectionSubtitle dangerouslySetInnerHTML={{ __html: t('whycustomsoftware.section_subtitle') }} />
        </Box>

        <InteractiveContainer>
          {/* Circular Icon Layout */}
          <CircularLayout>
            <CenterCircle onClick={handleCenterClick}>
              <LogoImage 
                src={logoWhite} 
                alt={t('whycustomsoftware.logo_alt')}
              />
            </CenterCircle>
            
            {benefits.map((benefit, index) => (
              <IconButton
                key={index}
                active={selectedBenefit === index}
                angle={benefit.angle}
                onClick={() => setSelectedBenefit(index)}
              >
                {benefit.icon}
              </IconButton>
            ))}
          </CircularLayout>

          {/* Information Panel */}
          <InfoPanel key={selectedBenefit}>
            <InfoTitle>
              {benefits[selectedBenefit].title}
            </InfoTitle>
            <InfoDescription>
              {benefits[selectedBenefit].description}
            </InfoDescription>
          </InfoPanel>
        </InteractiveContainer>
      </Container>
    </SectionWrapper>
  );
};

export default WhyCustomSoftware;
