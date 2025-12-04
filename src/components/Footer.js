// src/components/Footer.js
import React, { useContext } from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Stack } from '@mui/material';
import { Email, LinkedIn } from '@mui/icons-material';
import logo from '../assets/images/logo.png';
import { TranslationContext } from '../App';

const Footer = () => {
  const { translations } = useContext(TranslationContext);
  const currentYear = new Date().getFullYear();

  // Translation helper function
  const t = (key) => {
    const translation = translations[key] || key;
    // Handle dynamic year replacement
    return translation.replace('{currentYear}', currentYear);
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#000000',
        color: '#fff',
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Container maxWidth="lg">
        {/* Main Footer Content */}
        <Box sx={{ py: { xs: 4, md: 5 } }}>
          <Grid container spacing={{ xs: 3, md: 6 }}>
            {/* Contact Section - Left (No Heading) */}
            <Grid item xs={12} sm={6} md={4}>
              <Stack spacing={2.5}>
                {/* Logo */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                  }}
                >
                  <Box
                    component="img"
                    src={logo}
                    alt={t('footer.logo_alt_text')}
                    sx={{
                      height: '32px',
                      width: '32px',
                      display: 'block',
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#FFF',
                      fontWeight: 700,
                      fontSize: '0.9375rem',
                      letterSpacing: '0.75px',
                      textTransform: 'uppercase',
                      fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
                      lineHeight: 1.2,
                    }}
                  >
                    {t('footer.company_name')}
                  </Typography>
                </Box>

                {/* Email */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Box
                    sx={{
                      width: '32px',
                      height: '32px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Email
                      sx={{
                        fontSize: '1.125rem',
                        color: 'rgba(255, 255, 255, 0.5)',
                      }}
                    />
                  </Box>
                  <Link
                    href={`mailto:${t('footer.contact_email')}`}
                    sx={{
                      color: 'rgba(255, 255, 255, 0.65)',
                      textDecoration: 'none',
                      fontSize: '0.8125rem',
                      fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
                      lineHeight: 1.6,
                      transition: 'color 0.2s ease',
                      wordBreak: 'break-word',
                      '&:hover': {
                        color: '#ffffff',
                      },
                    }}
                  >
                    {t('footer.contact_email')}
                  </Link>
                </Box>

                {/* LinkedIn - Fully Clickable */}
                <Link
                  href="https://www.linkedin.com/company/spiritbe-technology"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    textDecoration: 'none',
                    color: 'rgba(255, 255, 255, 0.65)',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      color: '#0077B5',
                      '& .linkedin-icon': {
                        transform: 'scale(1.1)',
                      },
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: '32px',
                      height: '32px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <LinkedIn 
                      className="linkedin-icon"
                      sx={{ 
                        fontSize: '1.25rem',
                        transition: 'transform 0.2s ease',
                      }} 
                    />
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: '0.8125rem',
                      fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
                      lineHeight: 1.6,
                    }}
                  >
                    {t('footer.follow_us_linkedin')}
                  </Typography>
                </Link>
              </Stack>
            </Grid>

            {/* Services Column - Tree Structure */}
            <Grid item xs={6} sm={3} md={4}>
              <Box>
                {/* Title */}
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 700,
                    marginBottom: 2,
                    color: '#ffffff',
                    fontSize: '0.875rem',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
                  }}
                >
                  {t('footer.services_title')}
                </Typography>
                
                {/* Tree Items */}
                <Stack spacing={1.5} sx={{ position: 'relative' }}>
                  {/* Vertical Line */}
                  <Box
                    sx={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: '1px',
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    }}
                  />
                  
                  {[
                    { label: t('footer.service_custom_software'), href: '#services' },
                    { label: t('footer.service_web_development'), href: '#services' },
                    { label: t('footer.service_mobile_apps'), href: '#services' },
                    { label: t('footer.service_cloud_solutions'), href: '#services' },
                    { label: t('footer.service_api_integration'), href: '#services' },
                  ].map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        position: 'relative',
                        paddingLeft: '20px',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          left: 0,
                          top: '50%',
                          width: '12px',
                          height: '1px',
                          backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        },
                      }}
                    >
                      <Link
                        href={item.href}
                        sx={{
                          color: 'rgba(255, 255, 255, 0.65)',
                          textDecoration: 'none',
                          fontSize: '0.8125rem',
                          fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
                          transition: 'all 0.2s ease',
                          display: 'block',
                          '&:hover': {
                            color: '#ffffff',
                          },
                        }}
                      >
                        {item.label}
                      </Link>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Grid>

            {/* Company Column - Tree Structure */}
            <Grid item xs={6} sm={3} md={4}>
              <Box>
                {/* Title */}
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 700,
                    marginBottom: 2,
                    color: '#ffffff',
                    fontSize: '0.875rem',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
                  }}
                >
                  {t('footer.company_title')}
                </Typography>
                
                {/* Tree Items */}
                <Stack spacing={1.5} sx={{ position: 'relative' }}>
                  {/* Vertical Line */}
                  <Box
                    sx={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: '1px',
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    }}
                  />
                  
                  {[
                    { label: t('footer.company_testimonials'), href: '#testimonials' },
                    { label: t('footer.company_technologies'), href: '#technology-stack' },
                    { label: t('footer.company_about_us'), href: '#about' },
                    { label: t('footer.company_contact'), href: '#contact' },
                  ].map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        position: 'relative',
                        paddingLeft: '20px',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          left: 0,
                          top: '50%',
                          width: '12px',
                          height: '1px',
                          backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        },
                      }}
                    >
                      <Link
                        href={item.href}
                        sx={{
                          color: 'rgba(255, 255, 255, 0.65)',
                          textDecoration: 'none',
                          fontSize: '0.8125rem',
                          fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
                          transition: 'all 0.2s ease',
                          display: 'block',
                          '&:hover': {
                            color: '#ffffff',
                          },
                        }}
                      >
                        {item.label}
                      </Link>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Bottom Bar - Copyright and Legal */}
        <Box
          sx={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            py: 2.5,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 1.5,
          }}
        >
          {/* Copyright */}
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.5)',
              fontSize: '0.75rem',
              fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
            }}
          >
            {t('footer.copyright_notice')}
          </Typography>

          {/* Legal Links */}
          <Stack
            direction="row"
            spacing={2.5}
            sx={{
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <Link
              href="#privacy"
              sx={{
                color: 'rgba(255, 255, 255, 0.5)',
                textDecoration: 'none',
                fontSize: '0.75rem',
                fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
                transition: 'color 0.2s ease',
                '&:hover': {
                  color: '#ffffff',
                },
              }}
            >
              {t('footer.privacy_policy')}
            </Link>
            <Link
              href="#terms"
              sx={{
                color: 'rgba(255, 255, 255, 0.5)',
                textDecoration: 'none',
                fontSize: '0.75rem',
                fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
                transition: 'color 0.2s ease',
                '&:hover': {
                  color: '#ffffff',
                },
              }}
            >
              {t('footer.terms_of_service')}
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
