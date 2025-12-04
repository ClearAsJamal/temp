// src/components/CookiesPopUp.js
import React, { useState, useEffect, useContext } from 'react';
import {
  Box,
  Button,
  Typography,
  IconButton,
  Slide,
  Fade,
  Link,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CookieIcon from '@mui/icons-material/Cookie';
import { styled, keyframes } from '@mui/material/styles';
import { TranslationContext } from '../App';

// Floating animation for the cookie icon
const float = keyframes`
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-10px) rotate(5deg);
  }
  50% {
    transform: translateY(-5px) rotate(-5deg);
  }
  75% {
    transform: translateY(-10px) rotate(3deg);
  }
`;

// Pulse animation for the accept button
const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(37, 99, 235, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(37, 99, 235, 0);
  }
`;

// Styled container for the popup
const PopupContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  width: '380px',
  maxWidth: 'calc(100vw - 40px)',
  backgroundColor: '#ffffff',
  borderRadius: '20px',
  boxShadow: '0 20px 60px rgba(37, 99, 235, 0.3), 0 0 0 1px rgba(37, 99, 235, 0.1)',
  padding: '28px',
  zIndex: 9999,
  border: '2px solid rgba(37, 99, 235, 0.2)',
  backdropFilter: 'blur(10px)',
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: '0 25px 70px rgba(37, 99, 235, 0.4), 0 0 0 1px rgba(37, 99, 235, 0.2)',
    transform: 'translateY(-2px)',
  },
  [theme.breakpoints.down('sm')]: {
    width: 'calc(100vw - 40px)',
    bottom: '10px',
    right: '10px',
    padding: '20px',
  },
}));

// Styled cookie icon with animation
const AnimatedCookieIcon = styled(CookieIcon)({
  fontSize: '48px',
  color: '#2563eb',
  animation: `${float} 3s ease-in-out infinite`,
  filter: 'drop-shadow(0 4px 8px rgba(37, 99, 235, 0.3))',
});

// Styled accept button with pulse animation
const AcceptButton = styled(Button)({
  background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
  color: '#ffffff',
  fontWeight: 600,
  padding: '12px 28px',
  borderRadius: '12px',
  textTransform: 'none',
  fontSize: '15px',
  boxShadow: '0 4px 15px rgba(37, 99, 235, 0.3)',
  transition: 'all 0.3s ease',
  animation: `${pulse} 2s infinite`,
  '&:hover': {
    background: 'linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(37, 99, 235, 0.4)',
  },
  '&:active': {
    transform: 'translateY(0px)',
  },
});

// Styled decline button
const DeclineButton = styled(Button)({
  color: '#64748b',
  fontWeight: 600,
  padding: '12px 28px',
  borderRadius: '12px',
  textTransform: 'none',
  fontSize: '15px',
  border: '2px solid #e2e8f0',
  backgroundColor: '#ffffff',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#f8fafc',
    borderColor: '#cbd5e1',
    color: '#475569',
    transform: 'translateY(-2px)',
  },
  '&:active': {
    transform: 'translateY(0px)',
  },
});

// Styled close button
const StyledCloseButton = styled(IconButton)({
  position: 'absolute',
  top: '12px',
  right: '12px',
  color: '#94a3b8',
  padding: '8px',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#f1f5f9',
    color: '#475569',
    transform: 'rotate(90deg)',
  },
});

// Styled policy link
const PolicyLink = styled(Link)({
  color: '#2563eb',
  fontWeight: 600,
  textDecoration: 'none',
  borderBottom: '2px solid transparent',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    borderBottom: '2px solid #2563eb',
    color: '#1d4ed8',
  },
});

const CookiesPopUp = () => {
  const { translations } = useContext(TranslationContext);
  const [isVisible, setIsVisible] = useState(false);
  const [slideIn, setSlideIn] = useState(false);

  // Translation helper function
  const t = (key) => translations[key] || key;

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    
    if (!cookieConsent) {
      // Show popup after a short delay for better UX
      setTimeout(() => {
        setIsVisible(true);
        setTimeout(() => setSlideIn(true), 100);
      }, 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    handleClose();
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    handleClose();
  };

  const handleClose = () => {
    setSlideIn(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  const handlePolicyClick = () => {
    // You can replace this with actual navigation to your cookies policy page
    window.open('/cookies-policy', '_blank');
  };

  if (!isVisible) return null;

  return (
    <Fade in={slideIn} timeout={500}>
      <Slide direction="left" in={slideIn} timeout={400}>
        <PopupContainer>
          <StyledCloseButton onClick={handleClose} size="small">
            <CloseIcon fontSize="small" />
          </StyledCloseButton>

          <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
            {/* Cookie Icon */}
            <AnimatedCookieIcon />

            {/* Title */}
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: '#1e293b',
                textAlign: 'center',
                fontSize: '20px',
                letterSpacing: '-0.5px',
              }}
            >
              {t('cookiespopup.title_privacy_value')}
            </Typography>

            {/* Description */}
            <Typography
              variant="body2"
              sx={{
                color: '#64748b',
                textAlign: 'center',
                lineHeight: 1.6,
                fontSize: '14px',
              }}
            >
              {t('cookiespopup.description_cookies_usage')}
            </Typography>

            {/* Buttons */}
            <Box
              display="flex"
              gap={2}
              width="100%"
              mt={1}
              flexDirection={{ xs: 'column', sm: 'row' }}
            >
              <AcceptButton
                fullWidth
                onClick={handleAccept}
                variant="contained"
              >
                {t('cookiespopup.button_accept_all')}
              </AcceptButton>
              <DeclineButton
                fullWidth
                onClick={handleDecline}
                variant="outlined"
              >
                {t('cookiespopup.button_decline')}
              </DeclineButton>
            </Box>

            {/* Additional info */}
            <Typography
              variant="caption"
              sx={{
                color: '#94a3b8',
                textAlign: 'center',
                fontSize: '11px',
                marginTop: '4px',
              }}
            >
              {t('cookiespopup.info_change_preferences')}
            </Typography>
          </Box>
        </PopupContainer>
      </Slide>
    </Fade>
  );
};

export default CookiesPopUp;
