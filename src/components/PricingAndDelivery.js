import React, { useContext } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { MonetizationOn, Timeline } from '@mui/icons-material';
import deliveryImage from '../assets/images/delivery-lifecycle.jpg'; // Replace with your actual image path
import { TranslationContext } from '../App';

const PricingAndDelivery = () => {
  const { translations } = useContext(TranslationContext);

  // Translation helper function
  const t = (key) => translations[key] || key;

  return (
    <Box sx={{ backgroundColor: '#f9f9f9', padding: '4rem 2rem' }}>
      <Grid container spacing={4} sx={{ marginBottom: '3rem' }}>
        {/* Pricing Section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              padding: '2rem',
              borderRadius: '12px',
              backgroundColor: '#fff',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
              height: '100%',
            }}
          >
            <MonetizationOn
              sx={{
                fontSize: '3rem',
                color: '#ff9800',
                marginBottom: '1rem',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: '1.5rem',
              }}
            >
              {t('pricinganddelivery.pricing_options')}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: '#555',
              }}
            >
              {t('pricinganddelivery.pricing_description')}
            </Typography>
          </Box>
        </Grid>

        {/* Delivery Lifecycle Section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              padding: '2rem',
              borderRadius: '12px',
              backgroundColor: '#fff',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
              height: '100%',
            }}
          >
            <Timeline
              sx={{
                fontSize: '3rem',
                color: '#2196f3',
                marginBottom: '1rem',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: '1.5rem',
              }}
            >
              {t('pricinganddelivery.image_alt_delivery_lifecycle')}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: '#555',
              }}
            >
              {t('pricinganddelivery.delivery_lifecycle_description')}
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Full-width Image with Overlay */}
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '12px',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        <img
          src={deliveryImage}
          alt={t('pricinganddelivery.image_alt_delivery_lifecycle')}
          style={{ width: '100%', height: '400px', objectFit: 'cover' }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: '#fff',
              textAlign: 'center',
              fontWeight: 'bold',
              px: 3,
            }}
          >
            {t('pricinganddelivery.digital_excellence_start')}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PricingAndDelivery;
