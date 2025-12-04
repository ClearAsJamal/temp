import React, { useState, useContext } from 'react';
import { Box, Typography, Button } from '@mui/material';
import Header from './Header';
import ContactPopup from './ContactPopup';
import { TranslationContext } from '../App';

const HeroSection = () => {
  const [openContactPopup, setOpenContactPopup] = useState(false);
  
  const { translations } = useContext(TranslationContext);
  
  // Translation helper function
  const t = (key) => translations[key] || key;

  const handleOpenPopup = () => {
    setOpenContactPopup(true);
  };

  const handleClosePopup = () => {
    setOpenContactPopup(false);
  };

  // Modern gradient button matching login button style
  const buttonStyles = {
    background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
    hoverBackground: 'linear-gradient(135deg, #1D4ED8 0%, #1E40AF 100%)',
    boxShadow: '0 4px 16px rgba(37, 99, 235, 0.45)',
    hoverBoxShadow: '0 8px 24px rgba(37, 99, 235, 0.65)',
    border: '1px solid rgba(96, 165, 250, 0.4)',
  };

  return (
    <>
      {/* Header - Always Visible */}
      <Header />

      <Box
        sx={{
          display: { xs: 'none', sm: 'block' },
          position: 'relative',
          minHeight: '70vh',
          background: 'linear-gradient(135deg, #0f2847 0%, #1e3a6f 50%, #2d5a8f 100%)', // Balanced deep to medium blue gradient
          color: '#fff',
          overflow: 'hidden',
        }}
      >
        {/* Animated Neural Network SVG Background */}
        <Box
          component="svg"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            opacity: 0.9,
          }}
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Neural Network Connection Lines - Pure White, Very Thin */}
          <g stroke="#FFFFFF" fill="none" strokeWidth="0.5" opacity="0.25">
            {/* Horizontal network layers */}
            <line x1="50" y1="100" x2="200" y2="150">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3s" repeatCount="indefinite"/>
            </line>
            <line x1="50" y1="100" x2="200" y2="250">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3.5s" repeatCount="indefinite"/>
            </line>
            <line x1="50" y1="100" x2="200" y2="350">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4s" repeatCount="indefinite"/>
            </line>
            
            <line x1="50" y1="300" x2="200" y2="150">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3.2s" repeatCount="indefinite"/>
            </line>
            <line x1="50" y1="300" x2="200" y2="250">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3.8s" repeatCount="indefinite"/>
            </line>
            <line x1="50" y1="300" x2="200" y2="350">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4.2s" repeatCount="indefinite"/>
            </line>

            <line x1="50" y1="500" x2="200" y2="150">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3.3s" repeatCount="indefinite"/>
            </line>
            <line x1="50" y1="500" x2="200" y2="250">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3.7s" repeatCount="indefinite"/>
            </line>
            <line x1="50" y1="500" x2="200" y2="350">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4.5s" repeatCount="indefinite"/>
            </line>

            {/* Layer 2 to Layer 3 connections */}
            <line x1="200" y1="150" x2="400" y2="120">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3.6s" repeatCount="indefinite"/>
            </line>
            <line x1="200" y1="150" x2="400" y2="220">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4.1s" repeatCount="indefinite"/>
            </line>
            <line x1="200" y1="150" x2="400" y2="320">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3.4s" repeatCount="indefinite"/>
            </line>
            <line x1="200" y1="150" x2="400" y2="420">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4.3s" repeatCount="indefinite"/>
            </line>

            <line x1="200" y1="250" x2="400" y2="120">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3.9s" repeatCount="indefinite"/>
            </line>
            <line x1="200" y1="250" x2="400" y2="220">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3.5s" repeatCount="indefinite"/>
            </line>
            <line x1="200" y1="250" x2="400" y2="320">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4.4s" repeatCount="indefinite"/>
            </line>
            <line x1="200" y1="250" x2="400" y2="420">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3.7s" repeatCount="indefinite"/>
            </line>

            <line x1="200" y1="350" x2="400" y2="120">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4.2s" repeatCount="indefinite"/>
            </line>
            <line x1="200" y1="350" x2="400" y2="220">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3.3s" repeatCount="indefinite"/>
            </line>
            <line x1="200" y1="350" x2="400" y2="320">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3.8s" repeatCount="indefinite"/>
            </line>
            <line x1="200" y1="350" x2="400" y2="420">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4.6s" repeatCount="indefinite"/>
            </line>

            {/* Layer 3 to Layer 4 connections */}
            <line x1="400" y1="120" x2="600" y2="180">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3.5s" repeatCount="indefinite"/>
            </line>
            <line x1="400" y1="120" x2="600" y2="280">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4s" repeatCount="indefinite"/>
            </line>
            <line x1="400" y1="120" x2="600" y2="380">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3.6s" repeatCount="indefinite"/>
            </line>

            <line x1="400" y1="220" x2="600" y2="180">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4.1s" repeatCount="indefinite"/>
            </line>
            <line x1="400" y1="220" x2="600" y2="280">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3.4s" repeatCount="indefinite"/>
            </line>
            <line x1="400" y1="220" x2="600" y2="380">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4.3s" repeatCount="indefinite"/>
            </line>

            <line x1="400" y1="320" x2="600" y2="180">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3.7s" repeatCount="indefinite"/>
            </line>
            <line x1="400" y1="320" x2="600" y2="280">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4.5s" repeatCount="indefinite"/>
            </line>
            <line x1="400" y1="320" x2="600" y2="380">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3.3s" repeatCount="indefinite"/>
            </line>

            <line x1="400" y1="420" x2="600" y2="180">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4.4s" repeatCount="indefinite"/>
            </line>
            <line x1="400" y1="420" x2="600" y2="280">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3.9s" repeatCount="indefinite"/>
            </line>
            <line x1="400" y1="420" x2="600" y2="380">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3.2s" repeatCount="indefinite"/>
            </line>

            {/* Layer 4 to Layer 5 connections */}
            <line x1="600" y1="180" x2="800" y2="140">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3.8s" repeatCount="indefinite"/>
            </line>
            <line x1="600" y1="180" x2="800" y2="240">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4.2s" repeatCount="indefinite"/>
            </line>
            <line x1="600" y1="180" x2="800" y2="340">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3.5s" repeatCount="indefinite"/>
            </line>
            <line x1="600" y1="180" x2="800" y2="440">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4.6s" repeatCount="indefinite"/>
            </line>

            <line x1="600" y1="280" x2="800" y2="140">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4s" repeatCount="indefinite"/>
            </line>
            <line x1="600" y1="280" x2="800" y2="240">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3.6s" repeatCount="indefinite"/>
            </line>
            <line x1="600" y1="280" x2="800" y2="340">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4.3s" repeatCount="indefinite"/>
            </line>
            <line x1="600" y1="280" x2="800" y2="440">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3.4s" repeatCount="indefinite"/>
            </line>

            <line x1="600" y1="380" x2="800" y2="140">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3.9s" repeatCount="indefinite"/>
            </line>
            <line x1="600" y1="380" x2="800" y2="240">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4.5s" repeatCount="indefinite"/>
            </line>
            <line x1="600" y1="380" x2="800" y2="340">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3.3s" repeatCount="indefinite"/>
            </line>
            <line x1="600" y1="380" x2="800" y2="440">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4.1s" repeatCount="indefinite"/>
            </line>

            {/* Layer 5 to Layer 6 connections */}
            <line x1="800" y1="140" x2="1000" y2="200">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3.7s" repeatCount="indefinite"/>
            </line>
            <line x1="800" y1="140" x2="1000" y2="300">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4.4s" repeatCount="indefinite"/>
            </line>
            <line x1="800" y1="140" x2="1000" y2="400">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3.2s" repeatCount="indefinite"/>
            </line>

            <line x1="800" y1="240" x2="1000" y2="200">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4.3s" repeatCount="indefinite"/>
            </line>
            <line x1="800" y1="240" x2="1000" y2="300">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3.5s" repeatCount="indefinite"/>
            </line>
            <line x1="800" y1="240" x2="1000" y2="400">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4.6s" repeatCount="indefinite"/>
            </line>

            <line x1="800" y1="340" x2="1000" y2="200">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3.8s" repeatCount="indefinite"/>
            </line>
            <line x1="800" y1="340" x2="1000" y2="300">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4.2s" repeatCount="indefinite"/>
            </line>
            <line x1="800" y1="340" x2="1000" y2="400">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3.4s" repeatCount="indefinite"/>
            </line>

            <line x1="800" y1="440" x2="1000" y2="200">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4.5s" repeatCount="indefinite"/>
            </line>
            <line x1="800" y1="440" x2="1000" y2="300">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3.3s" repeatCount="indefinite"/>
            </line>
            <line x1="800" y1="440" x2="1000" y2="400">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4s" repeatCount="indefinite"/>
            </line>

            {/* Layer 6 to Output Layer connections */}
            <line x1="1000" y1="200" x2="1150" y2="250">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3.6s" repeatCount="indefinite"/>
            </line>
            <line x1="1000" y1="200" x2="1150" y2="350">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4.1s" repeatCount="indefinite"/>
            </line>

            <line x1="1000" y1="300" x2="1150" y2="250">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4.4s" repeatCount="indefinite"/>
            </line>
            <line x1="1000" y1="300" x2="1150" y2="350">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3.7s" repeatCount="indefinite"/>
            </line>

            <line x1="1000" y1="400" x2="1150" y2="250">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3.9s" repeatCount="indefinite"/>
            </line>
            <line x1="1000" y1="400" x2="1150" y2="350">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4.2s" repeatCount="indefinite"/>
            </line>
          </g>

          {/* Neural Network Nodes - Pure White (Input Layer) */}
          <g fill="#FFFFFF" opacity="0.8">
            <circle cx="50" cy="100" r="2">
              <animate attributeName="r" values="1.5;2.5;1.5" dur="3s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="50" cy="300" r="2">
              <animate attributeName="r" values="1.5;2.5;1.5" dur="3.5s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.6;1;0.6" dur="3.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="50" cy="500" r="2">
              <animate attributeName="r" values="1.5;2.5;1.5" dur="4s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.6;1;0.6" dur="4s" repeatCount="indefinite"/>
            </circle>
          </g>

          {/* Neural Network Nodes - Light Blue (Hidden Layer 1) */}
          <g fill="#ADD8E6" opacity="0.8">
            <circle cx="200" cy="150" r="2">
              <animate attributeName="r" values="1.5;2.5;1.5" dur="3.2s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.6;1;0.6" dur="3.2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="200" cy="250" r="2">
              <animate attributeName="r" values="1.5;2.5;1.5" dur="3.8s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.6;1;0.6" dur="3.8s" repeatCount="indefinite"/>
            </circle>
            <circle cx="200" cy="350" r="2">
              <animate attributeName="r" values="1.5;2.5;1.5" dur="4.2s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.6;1;0.6" dur="4.2s" repeatCount="indefinite"/>
            </circle>
          </g>

          {/* Neural Network Nodes - White (Hidden Layer 2) */}
          <g fill="#FFFFFF" opacity="0.5">
            <circle cx="400" cy="120" r="1.5">
              <animate attributeName="r" values="1;2;1" dur="3.4s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3.4s" repeatCount="indefinite"/>
            </circle>
            <circle cx="400" cy="220" r="1.5">
              <animate attributeName="r" values="1;2;1" dur="3.9s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3.9s" repeatCount="indefinite"/>
            </circle>
            <circle cx="400" cy="320" r="1.5">
              <animate attributeName="r" values="1;2;1" dur="4.3s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.3;0.6;0.3" dur="4.3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="400" cy="420" r="1.5">
              <animate attributeName="r" values="1;2;1" dur="3.6s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3.6s" repeatCount="indefinite"/>
            </circle>
          </g>

          {/* Neural Network Nodes - Light Blue (Hidden Layer 3) */}
          <g fill="#ADD8E6" opacity="0.5">
            <circle cx="600" cy="180" r="1.5">
              <animate attributeName="r" values="1;2;1" dur="3.7s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3.7s" repeatCount="indefinite"/>
            </circle>
            <circle cx="600" cy="280" r="1.5">
              <animate attributeName="r" values="1;2;1" dur="4.1s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.3;0.6;0.3" dur="4.1s" repeatCount="indefinite"/>
            </circle>
            <circle cx="600" cy="380" r="1.5">
              <animate attributeName="r" values="1;2;1" dur="3.5s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3.5s" repeatCount="indefinite"/>
            </circle>
          </g>

          {/* Neural Network Nodes - White (Hidden Layer 4) */}
          <g fill="#FFFFFF" opacity="0.8">
            <circle cx="800" cy="140" r="2">
              <animate attributeName="r" values="1.5;2.5;1.5" dur="3.3s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.6;1;0.6" dur="3.3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="800" cy="240" r="2">
              <animate attributeName="r" values="1.5;2.5;1.5" dur="3.8s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.6;1;0.6" dur="3.8s" repeatCount="indefinite"/>
            </circle>
            <circle cx="800" cy="340" r="2">
              <animate attributeName="r" values="1.5;2.5;1.5" dur="4.4s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.6;1;0.6" dur="4.4s" repeatCount="indefinite"/>
            </circle>
            <circle cx="800" cy="440" r="2">
              <animate attributeName="r" values="1.5;2.5;1.5" dur="3.6s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.6;1;0.6" dur="3.6s" repeatCount="indefinite"/>
            </circle>
          </g>

          {/* Neural Network Nodes - Light Blue (Hidden Layer 5) */}
          <g fill="#ADD8E6" opacity="0.8">
            <circle cx="1000" cy="200" r="2">
              <animate attributeName="r" values="1.5;2.5;1.5" dur="3.9s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.6;1;0.6" dur="3.9s" repeatCount="indefinite"/>
            </circle>
            <circle cx="1000" cy="300" r="2">
              <animate attributeName="r" values="1.5;2.5;1.5" dur="4.2s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.6;1;0.6" dur="4.2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="1000" cy="400" r="2">
              <animate attributeName="r" values="1.5;2.5;1.5" dur="3.7s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.6;1;0.6" dur="3.7s" repeatCount="indefinite"/>
            </circle>
          </g>

          {/* Neural Network Nodes - White (Output Layer) */}
          <g fill="#FFFFFF" opacity="0.9">
            <circle cx="1150" cy="250" r="2.5">
              <animate attributeName="r" values="2;3;2" dur="4s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.7;1;0.7" dur="4s" repeatCount="indefinite"/>
            </circle>
            <circle cx="1150" cy="350" r="2.5">
              <animate attributeName="r" values="2;3;2" dur="4.5s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.7;1;0.7" dur="4.5s" repeatCount="indefinite"/>
            </circle>
          </g>

          {/* Gradient definitions for traveling glow effects */}
          <defs>
            <linearGradient id="glowGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="30%" stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              <animate attributeName="x1" values="-100%;100%" dur="3s" repeatCount="indefinite" />
              <animate attributeName="x2" values="0%;200%" dur="3s" repeatCount="indefinite" />
            </linearGradient>
            
            <linearGradient id="glowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ADD8E6" stopOpacity="0" />
              <stop offset="30%" stopColor="#ADD8E6" stopOpacity="0" />
              <stop offset="50%" stopColor="#ADD8E6" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#ADD8E6" stopOpacity="0" />
              <stop offset="100%" stopColor="#ADD8E6" stopOpacity="0" />
              <animate attributeName="x1" values="-100%;100%" dur="3.5s" repeatCount="indefinite" />
              <animate attributeName="x2" values="0%;200%" dur="3.5s" repeatCount="indefinite" />
            </linearGradient>
            
            <linearGradient id="glowGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="30%" stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              <animate attributeName="x1" values="-100%;100%" dur="4s" repeatCount="indefinite" />
              <animate attributeName="x2" values="0%;200%" dur="4s" repeatCount="indefinite" />
            </linearGradient>
            
            <linearGradient id="glowGradient4" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ADD8E6" stopOpacity="0" />
              <stop offset="30%" stopColor="#ADD8E6" stopOpacity="0" />
              <stop offset="50%" stopColor="#ADD8E6" stopOpacity="0.85" />
              <stop offset="70%" stopColor="#ADD8E6" stopOpacity="0" />
              <stop offset="100%" stopColor="#ADD8E6" stopOpacity="0" />
              <animate attributeName="x1" values="-100%;100%" dur="4.2s" repeatCount="indefinite" />
              <animate attributeName="x2" values="0%;200%" dur="4.2s" repeatCount="indefinite" />
            </linearGradient>
            
            <linearGradient id="glowGradient5" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="30%" stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              <animate attributeName="x1" values="-100%;100%" dur="3.8s" repeatCount="indefinite" />
              <animate attributeName="x2" values="0%;200%" dur="3.8s" repeatCount="indefinite" />
            </linearGradient>
          </defs>
          
          {/* Traveling glow effects - focused on edges (left and right) */}
          <g fill="none" strokeLinecap="round" strokeLinejoin="round">
            {/* Left edge - high activity */}
            <polyline
              points="50,100 200,150"
              stroke="url(#glowGradient1)"
              strokeWidth="2.5"
              opacity="0.95"
            />
            
            <polyline
              points="50,300 200,250"
              stroke="url(#glowGradient2)"
              strokeWidth="2.5"
              opacity="0.9"
            />
            
            <polyline
              points="50,500 200,350"
              stroke="url(#glowGradient3)"
              strokeWidth="2.5"
              opacity="0.95"
            />
            
            <polyline
              points="200,150 400,120"
              stroke="url(#glowGradient4)"
              strokeWidth="2"
              opacity="0.85"
            />
            
            <polyline
              points="200,250 400,220"
              stroke="url(#glowGradient5)"
              strokeWidth="2"
              opacity="0.9"
            />
            
            <polyline
              points="200,350 400,320"
              stroke="url(#glowGradient1)"
              strokeWidth="2"
              opacity="0.85"
            />
            
            {/* Right edge - high activity */}
            <polyline
              points="800,140 1000,200 1150,250"
              stroke="url(#glowGradient2)"
              strokeWidth="2.5"
              opacity="0.95"
            />
            
            <polyline
              points="800,240 1000,300 1150,350"
              stroke="url(#glowGradient3)"
              strokeWidth="2.5"
              opacity="0.9"
            />
            
            <polyline
              points="800,340 1000,400"
              stroke="url(#glowGradient4)"
              strokeWidth="2.5"
              opacity="0.95"
            />
            
            <polyline
              points="800,440 1000,400 1150,350"
              stroke="url(#glowGradient5)"
              strokeWidth="2.5"
              opacity="0.9"
            />
            
            <polyline
              points="1000,200 1150,250"
              stroke="url(#glowGradient1)"
              strokeWidth="2"
              opacity="0.95"
            />
            
            <polyline
              points="1000,400 1150,350"
              stroke="url(#glowGradient2)"
              strokeWidth="2"
              opacity="0.9"
            />
          </g>
        </Box>

        {/* Hero Content */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            maxWidth: '1200px',
            textAlign: 'center',
            zIndex: 2,
            px: 3,
          }}
        >
          {/* Subheading */}
         <Typography
          variant="h1"
          sx={{
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
            mb: 3,
            fontSize: { xs: '4rem', md: '4rem' },
            lineHeight: 1.6,
          }}
        >
          {t('herosection.heading_heart_meets_technology')}
        </Typography>

        {/* Additional Text */}
        <Box
          sx={{
            textAlign: 'center',
            lineHeight: 1.8,
            mb: 4,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1.7rem', md: '1.7rem' },
              color: '#e0e0e0',
            }}
          >
            {t('herosection.subheading_infusing_spirit')}
          </Typography>
        </Box>

        {/* Call-to-Action Button */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 4,
          }}
        >
          <Button
            onClick={handleOpenPopup}
            variant="contained"
            sx={{
              background: buttonStyles.background,
              color: '#FFF',
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              fontWeight: 600,
              padding: { xs: '14px 40px', md: '18px 50px' },
              borderRadius: '10px',
              textTransform: 'none',
              border: buttonStyles.border,
              boxShadow: buttonStyles.boxShadow,
              letterSpacing: '0.3px',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                background: buttonStyles.hoverBackground,
                transform: 'translateY(-3px)',
                boxShadow: buttonStyles.hoverBoxShadow,
              },
              '&:active': {
                transform: 'translateY(-1px)',
              },
            }}
          >
            {t('herosection.button_get_started')}
          </Button>
        </Box>
      </Box>
    </Box>

      {/* Contact Popup */}
      <ContactPopup open={openContactPopup} onClose={handleClosePopup} />
    </>
  );
};

export default HeroSection;