// src/pages/About.js

import React, { useState, useEffect, useRef, useContext } from 'react';
import { Typography } from '@mui/material';
import aboutImage from '../assets/images/about-image.jpg';
import { TranslationContext } from '../App';

// ============================================
// 🎨 COLOR SCHEME - CUSTOMIZE HERE!
// ============================================
// Primary Background: #ffffff (White)
// Secondary Background: #f8fafc (Slate 50 - Off White)
// Card Background: #ffffff (White)
// Accent Primary: #3b82f6 (Blue 500 - Vibrant Blue)
// Accent Secondary: #60a5fa (Blue 400 - Light Blue)
// Text Primary: #0f172a (Slate 900 - Dark Navy)
// Text Secondary: #475569 (Slate 600 - Medium Gray)
// Border Color: #e2e8f0 (Slate 200 - Light Gray)
// ============================================

const About = () => {
  const { translations } = useContext(TranslationContext);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Translation helper function
  const t = (key) => translations[key] || key;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      style={{
        // 🎨 SECTION BACKGROUND: White (#ffffff)
        background: '#ffffff',
        padding: '5rem 1rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Background Elements */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          right: '-5%',
          width: '400px',
          height: '400px',
          // 🎨 DECORATIVE CIRCLE: Blue 500 (#3b82f6)
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          animation: 'float 6s ease-in-out infinite',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '15%',
          left: '-5%',
          width: '350px',
          height: '350px',
          // 🎨 DECORATIVE CIRCLE: Blue 400 (#60a5fa)
          background: 'radial-gradient(circle, rgba(96, 165, 250, 0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          animation: 'float 8s ease-in-out infinite',
        }}
      />

      {/* Content Container */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 1rem',
          }}
        >
          <div
            style={{
              // 🎨 CARD BACKGROUND: White (#ffffff)
              background: '#ffffff',
              borderRadius: '16px',
              // 🎨 CARD BORDER: Slate 200 (#e2e8f0)
              border: '1px solid #e2e8f0',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: 0,
              }}
              className="about-grid"
            >
              {/* Left: Text Content */}
              <div style={{ padding: '3rem 2.5rem' }}>
                {/* Professional Header - About Us Only */}
                <div style={{ marginBottom: '2rem' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                    }}
                  >
                    {/* Decorative Line */}
                    <div
                      style={{
                        width: '4px',
                        height: '48px',
                        borderRadius: '2px',
                        // 🎨 ACCENT LINE: Blue 500 gradient (#3b82f6 to #60a5fa)
                        background: 'linear-gradient(180deg, #3b82f6 0%, #60a5fa 100%)',
                      }}
                    />
                    {/* Header Text - Using Material-UI Typography */}
                    <Typography
                      variant="h2"
                      sx={{
                        // 🎨 HEADING TEXT: Slate 900 (#0f172a)
                        color: '#0f172a',
                        fontSize: '2.25rem',
                        fontWeight: 700,
                        lineHeight: 1.2,
                        margin: 0,
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {t('about.header_about_us')}
                    </Typography>
                  </div>
                </div>

                {/* Subheading - Reduced Font Size */}
                <Typography
                  variant="h5"
                  sx={{
                    // 🎨 SUBHEADING TEXT: Slate 900 (#0f172a)
                    color: '#0f172a',
                    fontSize: '1.35rem',
                    fontWeight: 600,
                    lineHeight: 1.4,
                    marginBottom: '1.5rem',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {t('about.subheading_transforming_ideas')}{' '}
                  <span
                    style={{
                      // 🎨 HIGHLIGHT TEXT: Blue 500 (#3b82f6)
                      color: '#3b82f6',
                    }}
                  >
                    {t('about.highlight_digital_excellence')}
                  </span>
                </Typography>

                {/* Description */}
                <Typography
                  sx={{
                    // 🎨 BODY TEXT: Slate 600 (#475569)
                    color: '#475569',
                    fontSize: '1rem',
                    lineHeight: 1.7,
                    marginBottom: '1.5rem',
                  }}
                >
                  <strong style={{ color: '#0f172a' }}>{t('about.company_name')}</strong> {t('about.description_company_overview')}
                </Typography>

                <Typography
                  sx={{
                    color: '#475569',
                    fontSize: '1rem',
                    lineHeight: 1.7,
                    marginBottom: '2rem',
                  }}
                >
                  {t('about.description_company_passion')}
                </Typography>

                {/* Divider Line */}
                <div
                  style={{
                    width: '60px',
                    height: '3px',
                    // 🎨 DIVIDER: Blue 500 gradient (#3b82f6 to #60a5fa)
                    background: 'linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%)',
                    borderRadius: '2px',
                  }}
                />
              </div>

              {/* Right: Image */}
              <div
                style={{
                  position: 'relative',
                  height: '100%',
                  minHeight: '400px',
                  overflow: 'hidden',
                }}
                className="about-image-container"
              >
                {/* Image with Zoom Effect */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={aboutImage}
                    alt={t('about.image_alt_about_spiritbe_technology')}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s ease',
                      filter: 'brightness(0.95) contrast(1.05)',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  {/* 🎨 IMAGE OVERLAY: Subtle gradient using Blue 500 */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(15, 23, 42, 0.2) 100%)',
                    }}
                  />
                </div>

                {/* Decorative Corner Accent */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '80px',
                    height: '80px',
                    // 🎨 CORNER ACCENT: Blue 500 gradient (#3b82f6)
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, transparent 100%)',
                    clipPath: 'polygon(100% 0, 100% 100%, 0 0)',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations & Responsive Styles */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(15px);
          }
        }

        /* Desktop Layout: Side-by-side */
        @media (min-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          
          .about-image-container {
            min-height: auto !important;
          }
        }

        /* Mobile Layout: Stacked */
        @media (max-width: 767px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
          
          .about-image-container {
            min-height: 350px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
