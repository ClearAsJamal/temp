// src/components/ContactPopup.js

import React, { useState, useContext } from 'react';
import {
  Dialog,
  TextField,
  Button,
  Box,
  Typography,
  IconButton,
  Grid,
  Fade,
  Zoom,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SecurityIcon from '@mui/icons-material/Security';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { TranslationContext } from '../App';


const ContactPopup = ({ open, onClose }) => {
  const { translations } = useContext(TranslationContext);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState(null);

  // Translation helper function
  const t = (key) => translations[key] || key;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = t('contactpopup.error_name_required');
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = t('contactpopup.error_email_required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = t('contactpopup.error_email_invalid');
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = t('contactpopup.error_message_required');
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = t('contactpopup.error_message_min_length');
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', formData);
      alert(t('contactpopup.alert_thank_you'));
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      setErrors({});
      onClose();
    }
  };

  const handleClose = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
    setErrors({});
    onClose();
  };

  const benefits = [
    { icon: <AccessTimeIcon />, text: t('contactpopup.benefit_response_time') },
    { icon: <CheckCircleOutlineIcon />, text: t('contactpopup.benefit_free_consultation') },
    { icon: <SecurityIcon />, text: t('contactpopup.benefit_confidential_secure') },
    { icon: <TrendingUpIcon />, text: t('contactpopup.benefit_proven_track_record') },
  ];

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="lg"
      fullWidth
      disableScrollLock={true}
      TransitionComponent={Fade}
      transitionDuration={400}
      PaperProps={{
        sx: {
          // 🔵 MOBILE: Rounded corners visible (not edge-to-edge)
          borderRadius: { xs: '16px', sm: '24px' },
          overflow: 'hidden',
          boxShadow: '0 32px 64px rgba(0, 0, 0, 0.2)',
          background: 'transparent',
          // 🔵 MOBILE: Not full height, allows top/bottom margins to show
          maxHeight: { xs: '85vh', sm: '90vh' },
          height: { xs: 'auto', sm: 'auto' },
          // 🔵 MOBILE: Add margins so it doesn't touch screen edges
          margin: { xs: '32px 16px', sm: '32px' },
        },
      }}
      sx={{
        '& .MuiBackdrop-root': {
          // 🔵 MOBILE: Lighter backdrop
          backgroundColor: { xs: 'rgba(0, 0, 0, 0.7)', sm: 'rgba(0, 0, 0, 0.5)' },
        },
      }}
    >
      <Grid 
        container 
        sx={{ 
          // 🔵 MOBILE: Auto height, not full viewport
          minHeight: { xs: 'auto', md: '600px' },
          maxHeight: { xs: '85vh', sm: 'auto' },
          flexDirection: { xs: 'column', md: 'row' },
          flexWrap: { xs: 'nowrap', md: 'wrap' },
          overflowY: { xs: 'auto', md: 'visible' },
          overflowX: 'hidden',
        }}
      >
        {/* ========================================
            LEFT SIDE - Visual Brand Section
            ========================================
            🔵 MOBILE: COMPLETELY HIDDEN (display: none)
            🖥️ DESKTOP: VISIBLE (display: flex)
            ======================================== */}
        <Grid 
          item 
          xs={12} 
          md={5}
          sx={{
            // 🔵 MOBILE: COMPLETELY HIDDEN - Blue section removed entirely
            // 🖥️ DESKTOP: VISIBLE
            display: { xs: 'none', md: 'flex' },
            position: 'relative',
            background: 'linear-gradient(135deg, #1E3A8A 0%, #1E40AF 25%, #2563EB 50%, #3B82F6 75%, #60A5FA 100%)',
            overflow: 'hidden',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '2.5rem 2rem',
            minHeight: '600px',
          }}
        >
          {/* Animated Background Patterns */}
          <Box
            sx={{
              position: 'absolute',
              top: '-50%',
              right: '-20%',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
              animation: 'float 6s ease-in-out infinite',
              '@keyframes float': {
                '0%, 100%': { transform: 'translateY(0px) scale(1)' },
                '50%': { transform: 'translateY(-30px) scale(1.05)' },
              },
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: '-30%',
              left: '-15%',
              width: '350px',
              height: '350px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
              animation: 'float 8s ease-in-out infinite',
              animationDelay: '1s',
            }}
          />

          {/* Content */}
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Zoom in={open} timeout={600}>
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '60px',
                  height: '60px',
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  marginBottom: '1.5rem',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                }}
              >
                <RocketLaunchIcon sx={{ fontSize: '2rem', color: '#FFFFFF' }} />
              </Box>
            </Zoom>

            <Typography
              variant="h3"
              sx={{
                color: '#FFFFFF',
                fontWeight: 800,
                fontSize: '2.2rem',
                marginBottom: '0.75rem',
                lineHeight: 1.2,
              }}
            >
              {t('contactpopup.heading_ask_question')}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '1rem',
                marginBottom: '2rem',
                lineHeight: 1.6,
              }}
            >
              {t('contactpopup.subheading_expert_contact')}
            </Typography>

            {/* Benefits List */}
            <Box 
              sx={{ 
                display: 'flex',
                flexDirection: 'column', 
                gap: '1rem' 
              }}
            >
              {benefits.map((benefit, index) => (
                <Fade in={open} timeout={800 + index * 200} key={index}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.9rem',
                      padding: '0.85rem 1rem',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.15)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: 'rgba(255, 255, 255, 0.25)',
                        transform: 'translateX(10px)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '36px',
                        height: '36px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.2)',
                        color: '#FFFFFF',
                      }}
                    >
                      {benefit.icon}
                    </Box>
                    <Typography
                      sx={{
                        color: '#FFFFFF',
                        fontSize: '0.95rem',
                        fontWeight: 500,
                      }}
                    >
                      {benefit.text}
                    </Typography>
                  </Box>
                </Fade>
              ))}
            </Box>
          </Box>
        </Grid>

        {/* RIGHT SIDE - Form Section */}
        <Grid 
          item 
          xs={12} 
          md={7}
          sx={{
            background: '#FFFFFF',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            flex: { xs: '1 1 auto', md: 'initial' },
            minHeight: { xs: 'auto', md: '600px' },
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: { xs: '0.75rem', sm: '1rem', md: '1.25rem' },
              right: { xs: '0.75rem', sm: '1rem', md: '1.25rem' },
              zIndex: 10,
              width: { xs: '40px', sm: '44px', md: '44px' },
              height: { xs: '40px', sm: '44px', md: '44px' },
              backgroundColor: '#F1F5F9',
              border: '2px solid #E2E8F0',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#FEE2E2',
                borderColor: '#FCA5A5',
                transform: 'rotate(90deg)',
                '& svg': {
                  color: '#DC2626',
                },
              },
            }}
          >
            <CloseIcon sx={{ 
              color: '#64748B', 
              transition: 'color 0.3s ease',
              fontSize: { xs: '1.25rem', md: '1.4rem' },
            }} />
          </IconButton>

          {/* Form Content */}
          <Box
            sx={{
              // 🔵 MOBILE: Reduced padding
              // 🖥️ DESKTOP: Reduced padding for 100% zoom fit
              padding: { 
                xs: '1.25rem 1.25rem 1rem',   // 🔵 MOBILE: Compact
                sm: '3rem 2rem 2rem',
                md: '2.5rem 3rem 2rem'         // 🖥️ DESKTOP: Reduced from 4rem to 2.5rem
              },
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: { xs: 'flex-start', md: 'center' },
              overflowY: { xs: 'visible', md: 'visible' },
            }}
          >

            {/* 🔵 MOBILE: Smaller "Get Started" title
                🖥️ DESKTOP: Original title */}
            <Typography
              variant="h4"
              sx={{
                color: '#0F172A',
                fontWeight: 700,
                fontSize: { 
                  xs: '1.3rem',         // 🔵 MOBILE: Reduced
                  sm: '1.8rem', 
                  md: '2rem'            // 🖥️ DESKTOP: Slightly reduced from 2.2rem
                },
                marginBottom: { 
                  xs: '0.35rem',        // 🔵 MOBILE: Minimal margin
                  md: '0.4rem'          // 🖥️ DESKTOP: Reduced from 0.5rem
                },
              }}
            >
              {t('contactpopup.title_get_started')}
            </Typography>

            {/* 🔵 MOBILE: Smaller subtitle
                🖥️ DESKTOP: Original subtitle */}
            <Typography
              variant="body1"
              sx={{
                color: '#64748B',
                fontSize: { 
                  xs: '0.85rem',        // 🔵 MOBILE: Reduced
                  sm: '1rem', 
                  md: '1rem'            // 🖥️ DESKTOP: Slightly reduced from 1.05rem
                },
                marginBottom: { 
                  xs: '1.25rem',        // 🔵 MOBILE: Reduced margin
                  md: '1.5rem'          // 🖥️ DESKTOP: Reduced from 2.5rem
                },
              }}
            >
              {t('contactpopup.subtitle_fill_details')}
            </Typography>

            {/* Contact Information - Email with Icon */}
            <Box
              component="a"
              href={`mailto:${t('contactpopup.contact_email')}`}
              sx={{
                position: 'relative',
                left: '0%',
                // top positioning removed
                display: 'flex',
                alignItems: 'center',
                gap: { xs: '0.3rem', md: '0.5rem' },
                textDecoration: 'none',
                zIndex: 5,
                marginBottom: { xs: '1.5rem', md: '1.25rem' },  // Reduced from 2rem to 1.25rem
                '&:hover': {
                  '& .MuiSvgIcon-root': {
                    color: '#1E40AF',
                  },
                  '& .MuiTypography-root': {
                    color: '#1E40AF',
                  },
                },
              }}
            >
              <EmailIcon
                sx={{
                  color: '#2563EB',
                  fontSize: { xs: '0.8rem', md: '1rem' },
                  transition: 'color 0.3s ease',
                }}
              />
              <Typography
                sx={{
                  color: '#2563EB',
                  fontSize: { xs: '0.8rem', md: '0.95rem' },
                  fontWeight: 600,
                  transition: 'color 0.3s ease',
                }}
              >
                {t('contactpopup.contact_email')}
              </Typography>
            </Box>


            <Box component="form" onSubmit={handleSubmit}>
              {/* Name & Email Row */}
              <Grid container spacing={2} sx={{ 
                marginBottom: { 
                  xs: '1rem',           // 🔵 MOBILE: Reduced
                  md: '1.2rem'          // 🖥️ DESKTOP: Reduced from 1.5rem
                }
              }}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label={t('contactpopup.label_name')}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    error={!!errors.name}
                    helperText={errors.name}
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: { xs: '12px', md: '14px' },
                        backgroundColor: focusedField === 'name' ? '#F8FAFC' : '#FFFFFF',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        '& fieldset': {
                          borderColor: '#E2E8F0',
                          borderWidth: '2px',
                          transition: 'all 0.3s ease',
                        },
                        '&:hover fieldset': {
                          borderColor: '#94A3B8',
                        },
                        '&.Mui-focused': {
                          backgroundColor: '#FFFFFF',
                          transform: { xs: 'none', md: 'translateY(-2px)' },
                          boxShadow: '0 8px 24px rgba(37, 99, 235, 0.12)',
                          '& fieldset': {
                            borderColor: '#2563EB',
                            borderWidth: '2px',
                          },
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: '#64748B',
                        fontWeight: 500,
                        fontSize: { xs: '0.85rem', md: '1rem' },
                        '&.Mui-focused': {
                          color: '#2563EB',
                          fontWeight: 600,
                        },
                      },
                      '& .MuiInputBase-input': {
                        fontSize: { xs: '0.9rem', md: '1rem' },
                        padding: { xs: '12px 14px', md: '14px 14px' },  // Reduced from 16.5px to 14px
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label={t('contactpopup.label_email')}
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    error={!!errors.email}
                    helperText={errors.email}
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: { xs: '12px', md: '14px' },
                        backgroundColor: focusedField === 'email' ? '#F8FAFC' : '#FFFFFF',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        '& fieldset': {
                          borderColor: '#E2E8F0',
                          borderWidth: '2px',
                          transition: 'all 0.3s ease',
                        },
                        '&:hover fieldset': {
                          borderColor: '#94A3B8',
                        },
                        '&.Mui-focused': {
                          backgroundColor: '#FFFFFF',
                          transform: { xs: 'none', md: 'translateY(-2px)' },
                          boxShadow: '0 8px 24px rgba(37, 99, 235, 0.12)',
                          '& fieldset': {
                            borderColor: '#2563EB',
                            borderWidth: '2px',
                          },
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: '#64748B',
                        fontWeight: 500,
                        fontSize: { xs: '0.85rem', md: '1rem' },
                        '&.Mui-focused': {
                          color: '#2563EB',
                          fontWeight: 600,
                        },
                      },
                      '& .MuiInputBase-input': {
                        fontSize: { xs: '0.9rem', md: '1rem' },
                        padding: { xs: '12px 14px', md: '14px 14px' },  // Reduced from 16.5px to 14px
                      },
                    }}
                  />
                </Grid>
              </Grid>

              {/* Phone Field */}
              <TextField
                fullWidth
                label={t('contactpopup.label_phone_optional')}
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => setFocusedField('phone')}
                onBlur={() => setFocusedField(null)}
                sx={{
                  marginBottom: { xs: '1rem', md: '1.2rem' },  // Reduced from 1.5rem
                  '& .MuiOutlinedInput-root': {
                    borderRadius: { xs: '12px', md: '14px' },
                    backgroundColor: focusedField === 'phone' ? '#F8FAFC' : '#FFFFFF',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '& fieldset': {
                      borderColor: '#E2E8F0',
                      borderWidth: '2px',
                      transition: 'all 0.3s ease',
                    },
                    '&:hover fieldset': {
                      borderColor: '#94A3B8',
                    },
                    '&.Mui-focused': {
                      backgroundColor: '#FFFFFF',
                      transform: { xs: 'none', md: 'translateY(-2px)' },
                      boxShadow: '0 8px 24px rgba(37, 99, 235, 0.12)',
                      '& fieldset': {
                        borderColor: '#2563EB',
                        borderWidth: '2px',
                      },
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: '#64748B',
                    fontWeight: 500,
                    fontSize: { xs: '0.85rem', md: '1rem' },
                    '&.Mui-focused': {
                      color: '#2563EB',
                      fontWeight: 600,
                    },
                  },
                  '& .MuiInputBase-input': {
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    padding: { xs: '12px 14px', md: '14px 14px' },  // Reduced from 16.5px to 14px
                  },
                }}
              />

              {/* Message Field */}
              <TextField
                fullWidth
                label={t('contactpopup.label_message')}
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                error={!!errors.message}
                helperText={errors.message}
                required
                multiline
                rows={window.innerWidth < 900 ? 3 : 4}  // Reduced from 5 to 4 rows
                sx={{
                  marginBottom: { xs: '1.25rem', md: '1.5rem' },  // Reduced from 2rem
                  '& .MuiOutlinedInput-root': {
                    borderRadius: { xs: '12px', md: '14px' },
                    backgroundColor: focusedField === 'message' ? '#F8FAFC' : '#FFFFFF',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '& fieldset': {
                      borderColor: '#E2E8F0',
                      borderWidth: '2px',
                      transition: 'all 0.3s ease',
                    },
                    '&:hover fieldset': {
                      borderColor: '#94A3B8',
                    },
                    '&.Mui-focused': {
                      backgroundColor: '#FFFFFF',
                      transform: { xs: 'none', md: 'translateY(-2px)' },
                      boxShadow: '0 8px 24px rgba(37, 99, 235, 0.12)',
                      '& fieldset': {
                        borderColor: '#2563EB',
                        borderWidth: '2px',
                      },
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: '#64748B',
                    fontWeight: 500,
                    fontSize: { xs: '0.85rem', md: '1rem' },
                    '&.Mui-focused': {
                      color: '#2563EB',
                      fontWeight: 600,
                    },
                  },
                  '& .MuiInputBase-input': {
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    padding: { xs: '12px 14px', md: '14px 14px' },  // Reduced from 16.5px to 14px
                  },
                }}
              />

              {/* Submit Button */}
              <Button
                fullWidth
                variant="contained"
                onClick={handleSubmit}
                sx={{
                  background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
                  color: '#FFFFFF',
                  padding: { xs: '0.8rem 1.25rem', md: '0.9rem 2rem' },  // Reduced from 1rem
                  borderRadius: { xs: '12px', md: '14px' },
                  fontSize: { xs: '0.95rem', md: '1.05rem' },  // Reduced from 1.1rem
                  fontWeight: 700,
                  textTransform: 'none',
                  boxShadow: '0 10px 30px rgba(37, 99, 235, 0.35)',
                  border: '2px solid transparent',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #1D4ED8 0%, #1E40AF 100%)',
                    transform: { xs: 'none', md: 'translateY(-4px)' },
                    boxShadow: '0 16px 40px rgba(37, 99, 235, 0.5)',
                  },
                  '&:active': {
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                {t('contactpopup.button_send_message')}
              </Button>

              <Typography
                variant="caption"
                sx={{
                  display: 'block',
                  textAlign: 'center',
                  marginTop: { xs: '0.75rem', md: '1rem' },  // Reduced from 1.5rem
                  color: '#94A3B8',
                  // 🔵 MOBILE: Smaller text (0.65rem) so entire line fits
                  fontSize: { xs: '0.65rem', md: '0.8rem' },  // Reduced from 0.85rem
                  paddingBottom: { xs: '0.5rem', md: '0' },
                  lineHeight: 1.4,
                }}
              >
                {t('contactpopup.caption_privacy_policy')}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default ContactPopup;
