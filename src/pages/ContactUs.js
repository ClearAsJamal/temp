// src/pages/ContactUs.js
import React, { useState, useContext } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import ContactPopup from '../components/ContactPopup';
import { TranslationContext } from '../App';

const ContactUs = () => {
  const { translations } = useContext(TranslationContext);
  const [openContactPopup, setOpenContactPopup] = useState(false);

  // Translation helper function
  const t = (key) => translations[key] || key;

  const handleOpenPopup = () => {
    setOpenContactPopup(true);
  };

  const handleClosePopup = () => {
    setOpenContactPopup(false);
  };

  return (
    <>
      <Container
        id="contact"
        sx={{
          paddingTop: '4rem',
          paddingBottom: '4rem',
          maxWidth: 'md',
          backgroundColor: '#f9f9f9',
          borderRadius: '8px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            marginBottom: '1rem',
          }}
        >
          {t('contactus.get_in_touch')}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            color: '#555',
            marginBottom: '2rem',
          }}
        >
          {t('contactus.project_in_mind_message')}
        </Typography>
        
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '2rem',
          }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleOpenPopup}
            sx={{
              padding: '0.8rem 2rem',
              fontSize: '1rem',
              borderRadius: '8px',
              backgroundColor: '#3b82f6',
              '&:hover': {
                backgroundColor: '#0a2540',
              },
            }}
          >
            {t('contactus.contact_us_button')}
          </Button>
        </Box>

        <Typography
          variant="body2"
          sx={{
            textAlign: 'center',
            marginTop: '2rem',
            color: '#888',
          }}
        >
          {t('contactus.or_reach_us_at')} <strong>info@spiritbetechnology.co.uk</strong>
        </Typography>
      </Container>

      {/* Contact Popup */}
      <ContactPopup open={openContactPopup} onClose={handleClosePopup} />
    </>
  );
};

export default ContactUs;
