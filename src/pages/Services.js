import React, { useState, useEffect, useRef, useContext } from 'react';
import { Container, Typography, Grid, Box, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import CodeIcon from '@mui/icons-material/Code';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CloudIcon from '@mui/icons-material/Cloud';
import DevicesIcon from '@mui/icons-material/Devices';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { TranslationContext } from '../App';

// Importing local images
import customSoftwareImg from '../assets/images/custom-software.jpg';
import aiImg from '../assets/images/ai.jpg';
import cloudImg from '../assets/images/cloud.jpg';
import mobileAppImg from '../assets/images/mobile-app.jpg';
import ecommerceImg from '../assets/images/ecommerce.jpg';
import consultImg from '../assets/images/consult.jpg';

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  height: '100%',
  borderRadius: '16px',
  overflow: 'hidden',
  background: '#ffffff',
  border: '1px solid #e2e8f0',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
  display: 'flex',
  flexDirection: 'column',
}));

const ImageWrapper = styled(Box)({
  position: 'relative',
  width: '100%',
  height: '180px',
  overflow: 'hidden',
  background: '#f1f5f9',
});

const ServiceImage = styled(CardMedia)({
  height: '100%',
  width: '100%',
  objectFit: 'cover',
});

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(2rem, 5vw, 2.75rem)',
  fontWeight: 700,
  textAlign: 'center',
  marginBottom: '0.75rem',
  background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  letterSpacing: '-0.02em',
}));

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
  textAlign: 'center',
  color: '#64748b',
  maxWidth: '700px',
  margin: '0 auto',
  lineHeight: 1.6,
}));

const ServiceTitle = styled(Typography)({
  fontSize: '1.35rem',
  fontWeight: 700,
  color: '#1e293b',
  marginBottom: '0.75rem',
  lineHeight: 1.3,
});

const ServiceDescription = styled(Typography)({
  fontSize: '0.95rem',
  color: '#64748b',
  lineHeight: 1.6,
  marginBottom: '1rem',
});

const KeyFeaturesList = styled(Box)({
  marginTop: 'auto',
  paddingTop: '0.75rem',
});

const KeyFeatureItem = styled(Typography)({
  fontSize: '0.875rem',
  color: '#475569',
  lineHeight: 1.5,
  marginBottom: '0.5rem',
  display: 'flex',
  alignItems: 'flex-start',
  '&::before': {
    content: '"✓"',
    color: '#2563EB',
    fontWeight: 'bold',
    fontSize: '1rem',
    marginRight: '0.5rem',
    marginTop: '0.1rem',
    flexShrink: 0,
  },
});

const Services = () => {
  const { translations } = useContext(TranslationContext);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Translation helper function
  const t = (key) => translations[key] || key;

  // Consolidated services data (9 → 6)
  const services = [
    {
      title: t('services.custom_software_development_title'),
      description: t('services.custom_software_development_description'),
      image: customSoftwareImg,
      icon: <CodeIcon />,
      keyFeatures: [
        t('services.custom_software_feature_enterprise_applications'),
        t('services.custom_software_feature_crm_erp'),
        t('services.custom_software_feature_agile_integration'),
      ],
    },
    {
      title: t('services.ai_powered_solutions_title'),
      description: t('services.ai_powered_solutions_description'),
      image: aiImg,
      icon: <SmartToyIcon />,
      keyFeatures: [
        t('services.ai_powered_feature_machine_learning'),
        t('services.ai_powered_feature_chatbots'),
        t('services.ai_powered_feature_process_automation'),
      ],
    },
    {
      title: t('services.cloud_infrastructure_services_title'),
      description: t('services.cloud_infrastructure_services_description'),
      image: cloudImg,
      icon: <CloudIcon />,
      keyFeatures: [
        t('services.cloud_infrastructure_feature_migration'),
        t('services.cloud_infrastructure_feature_devops'),
        t('services.cloud_infrastructure_feature_hybrid_cloud'),
      ],
    },
    {
      title: t('services.mobile_web_development_title'),
      description: t('services.mobile_web_development_description'),
      image: mobileAppImg,
      icon: <DevicesIcon />,
      keyFeatures: [
        t('services.mobile_web_feature_progressive_web'),
        t('services.mobile_web_feature_native_development'),
        t('services.mobile_web_feature_cross_platform'),
      ],
    },
    {
      title: t('services.ecommerce_solutions_title'),
      description: t('services.ecommerce_solutions_description'),
      image: ecommerceImg,
      icon: <ShoppingCartIcon />,
      keyFeatures: [
        t('services.ecommerce_feature_custom_platforms'),
        t('services.ecommerce_feature_payment_gateway'),
        t('services.ecommerce_feature_omnichannel'),
      ],
    },
    {
      title: t('services.consulting_digital_strategy_title'),
      description: t('services.consulting_digital_strategy_description'),
      image: consultImg,
      icon: <TrendingUpIcon />,
      keyFeatures: [
        t('services.consulting_feature_digital_transformation'),
        t('services.consulting_feature_systems_integration'),
        t('services.consulting_feature_data_engineering'),
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Box
      id="services"
      ref={sectionRef}
      sx={{
        background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%)',
        paddingTop: { xs: '4rem', md: '5rem' },
        paddingBottom: { xs: '4rem', md: '5rem' },
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ marginBottom: '3.5rem' }}>
          <SectionTitle variant="h2">
            {t('services.section_title')}
          </SectionTitle>
          <SectionSubtitle>
            {t('services.section_subtitle')}
          </SectionSubtitle>
        </Box>

        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={4} 
              key={index}
              sx={{
                display: 'flex',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: `all 0.6s ease-out ${index * 0.15}s`,
              }}
            >
              <StyledCard>
                <ImageWrapper>
                  <ServiceImage
                    component="img"
                    image={service.image}
                    alt={service.title}
                  />
                </ImageWrapper>

                <CardContent
                  sx={{
                    padding: '1.75rem 1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                  }}
                >
                  <ServiceTitle variant="h5">
                    {service.title}
                  </ServiceTitle>

                  <ServiceDescription variant="body2">
                    {service.description}
                  </ServiceDescription>

                  <KeyFeaturesList>
                    {service.keyFeatures.map((feature, idx) => (
                      <KeyFeatureItem key={idx}>
                        {feature}
                      </KeyFeatureItem>
                    ))}
                  </KeyFeaturesList>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
