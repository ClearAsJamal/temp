// src/components/LanguageSelector.js

import React, { useState, useContext } from 'react';
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { keyframes } from '@mui/system'; // Import keyframes
import { TranslationContext } from '../App'; // Import the context

// 1. Define the slide-down animation
const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const LanguageSelector = () => {
  const { currentLanguage, handleLanguageChange } = useContext(TranslationContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const languages = [
    {
      code: 'en',
      name: 'English',
      flag: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="28" height="18">
          <clipPath id="s">
            <path d="M0,0 v30 h60 v-30 z"/>
          </clipPath>
          <clipPath id="t">
            <path d="M30,15 h30 v15 z v-15 h-30 z h-30 v15 z v-15 h30 z"/>
          </clipPath>
          <g clipPath="url(#s)">
            <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
            <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
            <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
            <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
          </g>
        </svg>
      ),
    },
    {
      code: 'es',
      name: 'Spanish',
      flag: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 500" width="28" height="18">
          <rect width="750" height="500" fill="#c60b1e"/>
          <rect width="750" height="250" y="125" fill="#ffc400"/>
        </svg>
      ),
    },
    {
      code: 'de',
      name: 'German',
      flag: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3" width="28" height="18">
          <rect width="5" height="3" fill="#000"/>
          <rect width="5" height="2" y="1" fill="#D00"/>
          <rect width="5" height="1" y="2" fill="#FFCE00"/>
        </svg>
      ),
    },
    {
      code: 'fr',
      name: 'French',
      flag: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" width="28" height="18">
          <rect width="1" height="2" fill="#002395"/>
          <rect width="1" height="2" x="1" fill="#FFF"/>
          <rect width="1" height="2" x="2" fill="#ED2939"/>
        </svg>
      ),
    },
    {
      code: 'tr',
      name: 'Turkish',
      flag: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="28" height="18">
          <rect width="1200" height="800" fill="#E30A17"/>
          <circle cx="425" cy="400" r="200" fill="#FFF"/>
          <circle cx="475" cy="400" r="160" fill="#E30A17"/>
          <polygon points="583.334,400 764.235,458.779 652.431,304.894 652.431,495.106 764.235,341.221" fill="#FFF"/>
        </svg>
      ),
    },
  ];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageSelect = (languageCode) => {
    handleClose();
    console.log(`Language changed to: ${languageCode}`);
    handleLanguageChange(languageCode);
  };

  const selectedLanguage = languages.find(lang => lang.code === currentLanguage);

  return (
    <>
      <IconButton
        onClick={handleClick}
        sx={{
          padding: { xs: '0.3rem', sm: '0.4rem', lg: '0.5rem' },
          borderRadius: '8px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderColor: 'rgba(96, 165, 250, 0.5)',
            transform: 'translateY(-2px)',
          },
        }}
        aria-label="Select language"
        aria-controls={open ? 'language-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: { xs: '0.3rem', sm: '0.4rem', lg: '0.5rem' },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: { xs: '20px', sm: '24px', lg: '28px' },
              height: { xs: '13px', sm: '16px', lg: '18px' },
              borderRadius: '2px',
              overflow: 'hidden',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
            }}
          >
            {selectedLanguage?.flag}
          </Box>
          
          <KeyboardArrowDownIcon
            sx={{
              color: '#FFF',
              fontSize: { xs: '1rem', sm: '1.1rem', lg: '1.2rem' },
              transition: 'transform 0.3s ease',
              transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          />
        </Box>
      </IconButton>

      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        disableScrollLock={true}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{
          '& .MuiPaper-root': {
            backgroundColor: 'rgba(15, 23, 42, 0.95)',
            backdropFilter: 'blur(12px)',
            borderRadius: '12px',
            border: '1px solid rgba(96, 165, 250, 0.3)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
            marginTop: '0.5rem',
            minWidth: '160px',
            overflow: 'hidden', // Ensures animation doesn't spill out
          },
          '& .MuiList-root': {
            padding: '0.5rem',
          },
        }}
      >
        {/* 2. Map through languages adding the animation prop */}
        {languages.map((language, index) => (
          <MenuItem
            key={language.code}
            onClick={() => handleLanguageSelect(language.code)}
            selected={language.code === currentLanguage}
            sx={{
              borderRadius: '8px',
              padding: '0.6rem 1rem',
              marginBottom: '0.25rem',
              
              // ANIMATION LOGIC HERE
              opacity: 0, // Start invisible
              animation: `${slideIn} 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
              animationDelay: `${index * 0.07}s`, // Stagger by 70ms per item
              
              '&:last-child': {
                marginBottom: 0,
              },
              '&:hover': {
                backgroundColor: 'rgba(37, 99, 235, 0.2)',
              },
              '&.Mui-selected': {
                backgroundColor: 'rgba(37, 99, 235, 0.3)',
                '&:hover': {
                  backgroundColor: 'rgba(37, 99, 235, 0.4)',
                },
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                width: '100%',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '21px',
                  borderRadius: '3px',
                  overflow: 'hidden',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
                  flexShrink: 0,
                }}
              >
                {language.flag}
              </Box>
              
              <Typography
                sx={{
                  color: '#FFF',
                  fontSize: '0.95rem',
                  fontWeight: language.code === currentLanguage ? 600 : 500,
                }}
              >
                {language.name}
              </Typography>
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LanguageSelector;
