// src/components/Testimonials.js
import React, { useState, useContext } from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Chip,
  CardMedia,
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { TranslationContext } from '../App';

// Import logos
import fftechLogo from '../assets/images/55tech-logo.png';
import mevkiLogo from '../assets/images/mevki-logo.png';
import uxCenterLogo from '../assets/images//ux-center-logo.png';
import vempiLogo from '../assets/images/vempi-logo.png';

// ============================================
// KEYFRAME ANIMATIONS
// ============================================

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
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

const float = keyframes`
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(2deg);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

const scaleIn = keyframes`
  from {
    transform: scale(0.95);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const pulseGlow = keyframes`
  0%, 100% {
    box-shadow: 0 2px 8px rgba(37, 99, 235, 0.2), 0 0 0 0 rgba(37, 99, 235, 0.4);
  }
  50% {
    box-shadow: 0 4px 20px rgba(37, 99, 235, 0.5), 0 0 0 10px rgba(37, 99, 235, 0);
  }
`;

const buttonShine = keyframes`
  0% {
    left: -150%;
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    left: 150%;
    opacity: 0;
  }
`;

// Seamless infinite chevron slide (left to right)
const chevronSlide = keyframes`
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(0);
  }
`;

// ============================================
// STYLED COMPONENTS
// ============================================

const SectionWrapper = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(180deg, #fafbfc 0%, #ffffff 50%, #f8fafc 100%)',
  fontFamily: 'Segoe UI',
  padding: '4rem 0',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '5%',
    left: '-8%',
    width: '450px',
    height: '450px',
    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.04) 0%, transparent 70%)',
    borderRadius: '50%',
    pointerEvents: 'none',
    animation: `${float} 12s ease-in-out infinite`,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '5%',
    right: '-8%',
    width: '500px',
    height: '500px',
    background: 'radial-gradient(circle, rgba(147, 197, 253, 0.04) 0%, transparent 70%)',
    borderRadius: '50%',
    pointerEvents: 'none',
    animation: `${float} 15s ease-in-out infinite reverse`,
  },
  [theme.breakpoints.down('md')]: {
    padding: '3rem 0',
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
  letterSpacing: '-0.5px',
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
  marginBottom: '4rem',
  maxWidth: '800px',
  margin: '0 auto',
  marginTop: '2rem',
  marginBottom: '4rem',
  lineHeight: 1.7,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    marginBottom: '2.5rem',
  },
}));

const ClientCard = styled(Card)(({ theme, delay, isHovered }) => ({
  background: '#ffffff',
  borderRadius: '20px',
  border: '1px solid rgba(226, 232, 240, 0.8)',
  boxShadow: '0 2px 16px rgba(15, 23, 42, 0.04), 0 0 1px rgba(15, 23, 42, 0.04)',
  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',
  height: '100%',
  cursor: 'pointer',
  animation: `${fadeInUp} 0.9s ease-out ${delay}s both`,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '3px',
    background: 'linear-gradient(90deg, #3b82f6 0%, #60a5fa 50%, #93c5fd 100%)',
    transform: 'scaleX(0)',
    transformOrigin: 'left',
    transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.02), transparent)',
    transition: 'left 0.7s ease',
  },
  '&:hover': {
    transform: 'translateY(-12px)',
    boxShadow: '0 20px 40px rgba(59, 130, 246, 0.12), 0 0 1px rgba(59, 130, 246, 0.1)',
    border: '1px solid rgba(59, 130, 246, 0.2)',
    '&::before': {
      transform: 'scaleX(1)',
    },
    '&::after': {
      left: '100%',
    },
  },
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  height: '240px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(135deg, #fafbfc 0%, #f8fafc 100%)',
  borderBottom: '1px solid rgba(226, 232, 240, 0.6)',
  position: 'relative',
  overflow: 'hidden',
  padding: '1rem',
  transition: 'all 0.4s ease',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.02) 0%, transparent 70%)',
    opacity: 0,
    transition: 'opacity 0.4s ease',
  },
  '&:hover::before': {
    opacity: 1,
  },
}));

const LogoImage = styled('img')(({ theme }) => ({
  width: '200px',
  height: '200px',
  objectFit: 'contain',
  position: 'relative',
  zIndex: 1,
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  filter: 'brightness(1) contrast(1.05) saturate(1.05)',
  '&:hover': {
    transform: 'scale(1.08)',
    filter: 'brightness(1.05) contrast(1.08) saturate(1.1)',
  },
  [theme.breakpoints.down('sm')]: {
    width: '160px',
    height: '160px',
  },
}));

const ClientName = styled(Typography)(({ theme }) => ({
  fontSize: '1.35rem',
  fontWeight: 700,
  color: '#0f172a',
  marginBottom: '0.75rem',
  textAlign: 'center',
  letterSpacing: '-0.3px',
  transition: 'color 0.3s ease',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.25rem',
  },
}));

const ClientDescription = styled(Typography)(({ theme }) => ({
  fontSize: '0.875rem',
  color: '#64748b',
  marginBottom: '1.75rem',
  textAlign: 'center',
  lineHeight: 1.6,
  fontWeight: 400,
  padding: '0 0.25rem',
  minHeight: '90px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.85rem',
    minHeight: 'auto',
  },
}));

const ServicesTitle = styled(Typography)(({ theme }) => ({
  fontSize: '0.8rem',
  fontWeight: 700,
  color: '#1e293b',
  marginBottom: '1.25rem',
  textTransform: 'uppercase',
  letterSpacing: '0.8px',
  textAlign: 'center',
}));

const ServiceItem = styled(Box)(({ theme, delay }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  marginBottom: '0.85rem',
  padding: '0.75rem 1rem',
  borderRadius: '12px',
  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.02) 0%, rgba(147, 197, 253, 0.02) 100%)',
  border: '1px solid rgba(59, 130, 246, 0.06)',
  animation: `${slideIn} 0.6s ease-out ${delay}s both`,
  position: 'relative',
  overflow: 'hidden',
  '& svg': {
    color: '#3b82f6',
    fontSize: '1.1rem',
    flexShrink: 0,
  },
}));

const ServiceText = styled(Typography)(({ theme }) => ({
  fontSize: '0.875rem',
  color: '#334155',
  lineHeight: 1.5,
  fontWeight: 500,
}));

const ChevronContainer = styled(Box)(({ isHovered }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: isHovered ? 'flex' : 'none',
  alignItems: 'center',
  pointerEvents: 'none',
  zIndex: 0,
  overflow: 'hidden',
}));

const ChevronTrack = styled(Box)(({ isHovered }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '4rem',
  position: 'absolute',
  left: 0,
  whiteSpace: 'nowrap',
  // Linear timing for constant speed, no easing
  // SPEED: Change the duration value below (higher = slower, lower = faster)
  animation: isHovered ? `${chevronSlide} 15s linear infinite` : 'none',  // ← SPEED CONTROL: 8s = 8 seconds per cycle
  animationPlayState: isHovered ? 'running' : 'paused',
}));

const Chevron = styled(Box)({
  width: 0,
  height: 0,
  flexShrink: 0,
  // CUSTOMIZE CHEVRON HEIGHT HERE - Change these two values (they should be equal)
  borderTop: '32px solid transparent',      // ← HEIGHT: Increase to make taller
  borderBottom: '32px solid transparent',   // ← HEIGHT: Increase to make taller
  // CUSTOMIZE CHEVRON WIDTH HERE - Change this value
  borderLeft: '32px solid rgba(0, 30, 255, 0.2)',  // ← WIDTH: Increase first number to make wider
});

const ViewMoreButton = styled(Box)(({ isHovered }) => ({
  marginTop: '1.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  // CUSTOMIZE BUTTON HEIGHT HERE - Change the padding value below
  padding: '0.75rem 1.5rem',  // ← VERTICAL PADDING: Increase first value to make taller
  background: 'linear-gradient(135deg, #2563EB 0%, #3B82F6 100%)',
  color: '#FFFFFF',
  fontWeight: 600,
  // CUSTOMIZE TEXT SIZE HERE - Change this font size value
  fontSize: '0.9rem',  // ← TEXT SIZE: Increase to make text larger (e.g., '1.4rem', '1.6rem')
  borderRadius: '12px',
  minHeight: '23px',  // ← MINIMUM HEIGHT: Increase to make button taller
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',
  animation: isHovered ? `${pulseGlow} 2s ease-in-out infinite` : 'none',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-50%',
    left: '-150%',
    width: '100%',
    height: '200%',
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
    transform: 'skewX(-20deg)',
    animation: isHovered ? `${buttonShine} 2.5s ease-in-out infinite` : 'none',
    zIndex: 1,
  },
  '& span': {
    position: 'relative',
    zIndex: 2,
  },
  '&:hover': {
    background: 'linear-gradient(135deg, #1D4ED8 0%, #2563EB 100%)',
    transform: 'scale(1.05)',
  },
  '&:active': {
    transform: 'scale(0.98)',
  },
}));

// ============================================
// MAIN COMPONENT
// ============================================

const TrustedByInnovators = () => {
  const { translations } = useContext(TranslationContext);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Translation helper function
  const t = (key) => translations[key] || key;

  // CLIENT DATA with translation keys
  const clients = [
    {
      name: '55tech',
      logo: fftechLogo,
      description: 'testimonials.client_description_55tech',
      services: [
        'testimonials.service_custom_software_development',
        'testimonials.service_web_scraping',
        'testimonials.service_api_systems_integration',
        'testimonials.service_data_engineering_analytics',
      ],
      url: 'https://55-tech.com/',
    },
    {
      name: 'Mevki',
      logo: mevkiLogo,
      description: 'testimonials.client_description_mevki',
      services: [
        'testimonials.service_web_application_development',
        'testimonials.service_cross_platform_app_development',
        'testimonials.service_ai_powered_solutions',
        'testimonials.service_cloud_based_services',
      ],
      url: 'https://mevki.com/',
    },
    {
      name: 'User Experience Center',
      logo: uxCenterLogo,
      description: 'testimonials.client_description_ux_center',
      services: [
        'testimonials.service_web_application_development',
        'testimonials.service_custom_software_development',
        'testimonials.service_data_engineering_analytics',
        'testimonials.service_consulting_digital_transformation',
      ],
      url: 'https://ux.center/home',
    },
    {
      name: 'Vempi',
      logo: vempiLogo,
      description: 'testimonials.client_description_vempi',
      services: [
        'testimonials.service_custom_software_development',
        'testimonials.service_ecommerce_solutions',
        'testimonials.service_consulting_digital_strategy',
        'testimonials.service_cloud_based_services',
      ],
      url: 'https://vempi.com/index/default.aspx?id=3',
    },
  ];

  const handleCardClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Generate enough chevrons to fill the button width twice for seamless loop
  const generateChevrons = () => {
    const chevrons = [];
    for (let i = 0; i < 20; i++) {
      chevrons.push(<Chevron key={i} />);
    }
    return chevrons;
  };

  return (
    <SectionWrapper id="trusted-by-innovators">
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box sx={{ marginBottom: '3.5rem' }}>
          <SectionTitle variant="h2">
            {t('testimonials.section_title')}
          </SectionTitle>
          <SectionSubtitle>
            {t('testimonials.section_subtitle')}
          </SectionSubtitle>
        </Box>

        {/* Client Cards Grid */}
        <Grid container spacing={4}>
          {clients.map((client, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <ClientCard
                delay={index * 0.15}
                isHovered={hoveredIndex === index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleCardClick(client.url)}
              >
                {/* Logo Section */}
                <LogoContainer>
                  <LogoImage 
                    src={client.logo} 
                    alt={`${client.name} ${t('testimonials.logo_alt_text')}`}
                  />
                </LogoContainer>

                {/* Content Section */}
                <CardContent sx={{ padding: '1.75rem 1.5rem' }}>
                  <ClientName>{client.name}</ClientName>
                  <ClientDescription>{t(client.description)}</ClientDescription>

                  {/* Services Provided */}
                  <ServicesTitle>
                    {t('testimonials.services_delivered_title')}
                  </ServicesTitle>

                  {client.services.map((service, serviceIndex) => (
                    <ServiceItem key={serviceIndex} delay={0.1 * serviceIndex}>
                      <CheckCircleIcon />
                      <ServiceText>{t(service)}</ServiceText>
                    </ServiceItem>
                  ))}

                  {/* View More Button */}
                  <ViewMoreButton isHovered={hoveredIndex === index}>
                    <ChevronContainer isHovered={hoveredIndex === index}>
                      <ChevronTrack isHovered={hoveredIndex === index}>
                        {generateChevrons()}
                        {generateChevrons()}
                      </ChevronTrack>
                    </ChevronContainer>
                    <span>{t('testimonials.visit_website_button')}</span>
                  </ViewMoreButton>
                </CardContent>
              </ClientCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default TrustedByInnovators;
