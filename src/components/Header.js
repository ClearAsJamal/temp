// src/components/Header.js

import React, { useState, useEffect, useContext } from 'react';
import { Box, Button, Typography, ClickAwayListener } from '@mui/material';
import logo from '../assets/images/logo.png';
import ContactPopup from './ContactPopup';
import LanguageSelector from './LanguageSelector';
import { TranslationContext } from '../App';

const Header = () => {
  const { translations } = useContext(TranslationContext);

  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [contactPopupOpen, setContactPopupOpen] = useState(false);
  const [isMobilePhone, setIsMobilePhone] = useState(false); // <= 430px
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const t = (key) => translations[key] || key;

  useEffect(() => {
    const checkMobilePhone = () => {
      setIsMobilePhone(window.innerWidth <= 430);
    };

    const handleScroll = () => {
      const isScrolledNow = window.scrollY > 50;
      setScrolled((prev) => (prev !== isScrolledNow ? isScrolledNow : prev));

      const sections = ['home', 'services', 'about', 'technologies'];

      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (current) {
        setActiveSection(current);
      } else {
        const technologiesElement = document.getElementById('technologies');
        if (technologiesElement) {
          const rect = technologiesElement.getBoundingClientRect();
          if (rect.bottom < 100) {
            setActiveSection('technologies');
          }
        }
      }

      setIsMobileMenuOpen(false);
    };

    checkMobilePhone();
    handleScroll();

    window.addEventListener('resize', checkMobilePhone);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', checkMobilePhone);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: t('header.navigation_home'), href: '#home', key: 'home' },
    { name: t('header.navigation_services'), href: '#services', key: 'services' },
    { name: t('header.navigation_technologies'), href: '#technologies', key: 'technologies' },
    { name: t('header.navigation_about'), href: '#about', key: 'about' },
  ];

  const handleContactClick = (e) => {
    e.preventDefault();
    setContactPopupOpen(true);
  };

  const handleContactClose = () => {
    setContactPopupOpen(false);
  };

  const handleLogoClick = () => {
    window.location.href = '#home';
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleMobileMenuSelect = (href) => {
    setIsMobileMenuOpen(false);
    window.location.href = href;
  };

  const handleMobileMenuClickAway = () => {
    setIsMobileMenuOpen(false);
  };

  const currentMobileLabel =
    navItems.find((item) => item.key === activeSection)?.name || 'Menu';

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          boxSizing: 'border-box',
          backgroundColor: scrolled
            ? 'rgba(0, 0, 0, 0.75)'
            : 'linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 100%)',
          backdropFilter: scrolled ? 'blur(12px)' : 'blur(8px)',
          zIndex: 1000,
          padding: {
            xs: scrolled ? '0.5rem 0.6rem' : '0.7rem 0.6rem',
            sm: scrolled ? '0.7rem 1.2rem' : '0.9rem 1.2rem',
            md: scrolled ? '0.8rem 1.8rem' : '1rem 1.8rem',
            lg: scrolled ? '0.8rem 3.5rem' : '1.2rem 3.5rem',
            xl: scrolled ? '1rem 0' : '1.5rem 0',
          },
          boxShadow: scrolled ? '0 4px 24px rgba(37, 99, 235, 0.18)' : 'none',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          borderBottom: scrolled
            ? '1px solid rgba(37, 99, 235, 0.25)'
            : '1px solid transparent',
        }}
      >
        {/* ====================== DESKTOP + TABLET (≥ 431px) ====================== */}
        {!isMobilePhone && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              maxWidth: { lg: '1280px', xl: '1500px' },
              margin: '0 auto',
              width: '100%',
              boxSizing: 'border-box',
              columnGap: { xs: '0.75rem', sm: '1rem', md: '1.5rem' },
              rowGap: { xs: '0.5rem', sm: 0 },
              flexWrap: { xs: 'wrap', sm: 'nowrap' },
            }}
          >
            {/* Logo + brand text */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: { xs: '0.7rem', sm: '0.9rem', lg: '1.3rem' },
                transition: 'transform 0.3s ease',
                cursor: 'pointer',
                '&:hover': { transform: 'translateY(-2px)' },
              }}
              onClick={handleLogoClick}
            >
              <Box
                component="img"
                src={logo}
                alt={t('header.logo_alt_text')}
                sx={{
                  height: scrolled
                    ? {
                        xs: 34,
                        sm: 36,
                        md: 42,
                        lg: 48,
                        xl: 52,
                      }
                    : {
                        xs: 40,
                        sm: 42,
                        md: 48,
                        lg: 56,
                        xl: 60,
                      },
                  width: 'auto',
                  transition: 'height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  filter: 'drop-shadow(0 2px 10px rgba(37, 99, 235, 0.35))',
                }}
              />

              <Typography
                variant="h6"
                sx={{
                  color: '#FFF',
                  fontWeight: 700,
                  fontSize: scrolled
                    ? {
                        xs: '0.95rem',
                        sm: '1rem',
                        md: '1.05rem',
                        lg: '1.15rem',
                        xl: '1.2rem',
                      }
                    : {
                        xs: '1rem',
                        sm: '1.05rem',
                        md: '1.15rem',
                        lg: '1.25rem',
                        xl: '1.3rem',
                      },
                  letterSpacing: '0.5px',
                  pointerEvents: 'none',
                  userSelect: 'none',
                  transition: 'font-size 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #93C5FD 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  whiteSpace: 'nowrap',
                }}
              >
                {t('header.logo_text')}
              </Typography>
            </Box>

            {/* Nav items + CTA + language selector */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: { xs: 'flex-start', sm: 'flex-end' },
                flexGrow: 1,
                gap: {
                  xs: '0.7rem',
                  sm: '0.9rem',
                  md: '1.3rem',
                  lg: '1.8rem',
                  xl: '2.3rem',
                },
                flexWrap: { xs: 'wrap', sm: 'nowrap' },
              }}
            >
              {navItems.map((item) => {
                const isActive = activeSection === item.key;
                return (
                  <a
                    key={item.key}
                    href={item.href}
                    style={{ textDecoration: 'none' }}
                  >
                    <Typography
                      sx={{
                        color: isActive ? '#60A5FA' : '#FFF',
                        fontSize: {
                          xs: '0.82rem',
                          sm: '0.88rem',
                          md: '0.95rem',
                          lg: '1rem',
                          xl: '1.05rem',
                        },
                        fontWeight: isActive ? 600 : 500,
                        letterSpacing: '0.32px',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        position: 'relative',
                        paddingBottom: '3px',
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          width: isActive ? '100%' : '0%',
                          height: '2px',
                          background:
                            'linear-gradient(90deg, #2563EB 0%, #60A5FA 100%)',
                          transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        },
                        '&:hover': {
                          color: '#60A5FA',
                          '&::after': { width: '100%' },
                        },
                      }}
                      tabIndex={0}
                    >
                      {item.name}
                    </Typography>
                  </a>
                );
              })}

              {/* Contact button for desktop/tablet */}
              <Button
                variant="contained"
                onClick={handleContactClick}
                sx={{
                  background:
                    'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
                  color: '#FFF',
                  height: { xs: 32, sm: 34, md: 38, lg: 40 },
                  minWidth: { xs: 92, sm: 98, md: 110, lg: 118 },
                  width: { xs: 92, sm: 98, md: 110, lg: 118 },
                  padding: '0 0.85rem',
                  borderRadius: '10px',
                  fontWeight: 600,
                  fontSize: {
                    xs: '0.75rem',
                    sm: '0.8rem',
                    md: '0.9rem',
                    lg: '0.95rem',
                    xl: '1rem',
                  },
                  textTransform: 'none',
                  letterSpacing: '0.28px',
                  boxShadow: '0 4px 16px rgba(37, 99, 235, 0.45)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  border: '1px solid rgba(96, 165, 250, 0.4)',
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&:hover': {
                    background:
                      'linear-gradient(135deg, #1D4ED8 0%, #1E40AF 100%)',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 8px 24px rgba(37, 99, 235, 0.65)',
                  },
                  '&:active': {
                    transform: 'translateY(-1px)',
                  },
                }}
              >
                {t('header.contact_button_label')}
              </Button>

              {/* Language selector */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexShrink: 0,
                  transform: { xs: 'scale(0.9)', sm: 'scale(0.95)', md: 'scale(1)' },
                }}
              >
                <LanguageSelector />
              </Box>
            </Box>
          </Box>
        )}

        {/* ====================== MOBILE (≤ 430px) ====================== */}
        {isMobilePhone && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              position: 'relative',
              gap: '0.5rem',
            }}
          >
            {/* Logo small */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
              }}
              onClick={handleLogoClick}
            >
              <Box
                component="img"
                src={logo}
                alt={t('header.logo_alt_text_mobile')}
                sx={{
                  height: scrolled ? 32 : 38,
                  width: 'auto',
                }}
              />
            </Box>

            {/* Center: modern dropdown + contact button */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexGrow: 1,
                justifyContent: 'center',
                gap: '0.6rem',
              }}
            >
              {/* Modern dropdown with same style as Contact button */}
              <ClickAwayListener onClickAway={handleMobileMenuClickAway}>
                <Box
                  sx={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {/* Trigger pill */}
                  <Box
                    role="button"
                    tabIndex={0}
                    onClick={handleMobileMenuToggle}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleMobileMenuToggle();
                      }
                    }}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.4rem',
                      padding: '0 14px',
                      height: 32,
                      minWidth: 110,
                      maxWidth: '55vw',
                      borderRadius: '10px',
                      background: scrolled
                        ? '#000000'
                        : 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
                      color: '#FFFFFF',
                      boxShadow: '0 4px 16px rgba(37, 99, 235, 0.45)',
                      border: scrolled
                        ? '1px solid rgba(156, 163, 175, 0.8)'
                        : '1px solid rgba(96, 165, 250, 0.4)',
                      cursor: 'pointer',
                      transition:
                        'all 0.22s cubic-bezier(0.4, 0, 0.2, 1)',
                      transform: isMobileMenuOpen
                        ? 'translateY(-2px)'
                        : 'translateY(0)',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow:
                          '0 8px 24px rgba(37, 99, 235, 0.65)',
                      },
                    }}
                    aria-expanded={isMobileMenuOpen}
                    aria-haspopup="listbox"
                  >
                    <Typography
                      sx={{
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                      }}
                    >
                      {currentMobileLabel}
                    </Typography>
                    <Typography
                      component="span"
                      sx={{
                        fontSize: '0.9rem',
                        lineHeight: 1,
                        transform: isMobileMenuOpen
                          ? 'rotate(180deg)'
                          : 'rotate(0deg)',
                        transition:
                          'transform 0.22s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    >
                      ▾
                    </Typography>
                  </Box>

                  {/* Dropdown list */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      transform: isMobileMenuOpen
                        ? 'translate(-50%, 8px) scale(1)'
                        : 'translate(-50%, 4px) scale(0.96)',
                      opacity: isMobileMenuOpen ? 1 : 0,
                      pointerEvents: isMobileMenuOpen ? 'auto' : 'none',
                      transition:
                        'opacity 0.18s ease-out, transform 0.18s ease-out',
                      backgroundColor: '#020617', // almost black
                      borderRadius: '14px',
                      boxShadow:
                        '0 18px 40px rgba(15, 23, 42, 0.9)',
                      width: 'min(220px, 72vw)',
                      overflow: 'hidden',
                      border: '1px solid rgba(30, 64, 175, 0.9)',
                      backdropFilter: 'blur(12px)',
                      zIndex: 1300,
                    }}
                  >
                    {navItems.map((item, index) => {
                      const isActive = activeSection === item.key;
                      const isLast = index === navItems.length - 1;
                      return (
                        <Box
                          key={item.key}
                          onClick={() => handleMobileMenuSelect(item.href)}
                          sx={{
                            padding: '9px 14px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            cursor: 'pointer',
                            backgroundColor: isActive
                              ? 'rgba(37, 99, 235, 0.25)'
                              : 'transparent',
                            '&:hover': {
                              backgroundColor:
                                'rgba(37, 99, 235, 0.35)',
                            },
                            borderBottom: isLast
                              ? 'none'
                              : '1px solid rgba(30, 64, 175, 0.7)',
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: '0.8rem',
                              fontWeight: isActive ? 600 : 500,
                              color: '#E5E7EB',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {item.name}
                          </Typography>
                          {isActive && (
                            <Box
                              sx={{
                                width: 6,
                                height: 6,
                                borderRadius: '999px',
                                background:
                                  'radial-gradient(circle, #60A5FA 0%, #2563EB 60%, transparent 100%)',
                              }}
                            />
                          )}
                        </Box>
                      );
                    })}
                  </Box>
                </Box>
              </ClickAwayListener>

              {/* Contact button mobile (unchanged) */}
              <Button
                variant="contained"
                onClick={handleContactClick}
                sx={{
                  background: scrolled
                    ? 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)'
                    : '#FFFFFF',
                  color: scrolled ? '#FFFFFF' : '#000000',
                  height: 32,
                  minWidth: 90,
                  width: 90,
                  padding: '0 10px',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '0.75rem',
                  textTransform: 'none',
                  border: scrolled
                    ? '1px solid rgba(96, 165, 250, 0.5)'
                    : '1px solid #000000',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {t('header.contact_button_label')}
              </Button>
            </Box>

            {/* Language selector right */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexShrink: 0,
                marginLeft: '4px',
                transform: 'scale(0.9)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                color: scrolled ? '#FFF' : '#000',
                '& .MuiOutlinedInput-notchedOutline, & .MuiButton-outlined, & button':
                  {
                    borderColor: scrolled
                      ? 'rgba(255, 255, 255, 0.5)'
                      : 'rgba(0, 0, 0, 0.6)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  },
                '& .MuiSvgIcon-root': {
                  color: scrolled ? '#FFF' : '#000',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                },
              }}
            >
              <LanguageSelector />
            </Box>
          </Box>
        )}
      </Box>

      <ContactPopup
        open={contactPopupOpen}
        onClose={handleContactClose}
        disableScrollLock={true}
      />
    </>
  );
};

export default Header;
