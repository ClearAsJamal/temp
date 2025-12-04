// src/components/FAQ.js
import React, { useState, useContext } from 'react';
import { Box, Container, Typography, Collapse, styled } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ReplyIcon from '@mui/icons-material/Reply';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TranslationContext } from '../App'; // Import the context

// ============================================
// STYLED COMPONENTS
// ============================================

const FAQWrapper = styled(Box)(({ theme }) => ({
  /* FAQ Background Color - Dark Blue */
  background: 'linear-gradient(135deg, #0f2847 0%, #1e3a6f 50%, #2d5a8f 100%)', // Dark blue background - change this color easily
  // background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
  padding: '6rem 0',
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    padding: '4rem 0',
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 800,
  textAlign: 'center',
  marginBottom: '1rem',
  /* FAQ Title Color - White */
  color: '#ffffff', // White text - change this color easily
  letterSpacing: '-0.5px',
  '&::after': {
    content: '""',
    display: 'block',
    margin: '1rem auto 0',
    width: '80px',
    height: '4px',
    background: 'linear-gradient(90deg, #60A5FA 0%, #93C5FD 100%)',
    borderRadius: '2px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem',
  },
}));

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  textAlign: 'center',
  /* FAQ Subtitle Color - White with opacity */
  color: 'rgba(255, 255, 255, 0.85)', // White text with slight transparency
  marginBottom: '4rem',
  maxWidth: '700px',
  margin: '0 auto 4rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem',
    marginBottom: '3rem',
  },
}));

const FAQContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem', // Closer spacing between questions
  maxWidth: '900px',
  margin: '0 auto',
}));

const FAQItem = styled(Box)(({ theme, expanded }) => ({
  /* FAQ Item Background - Slightly lighter blue for contrast */
  background: 'rgba(255, 255, 255, 0.08)',
  borderRadius: '12px',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  overflow: 'hidden',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.12)',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
  },
}));

const QuestionRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  padding: '1.25rem 1.5rem',
  cursor: 'pointer',
  userSelect: 'none',
  transition: 'all 0.2s ease',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.05)',
  },
  [theme.breakpoints.down('md')]: {
    padding: '1rem 1.25rem',
  },
}));

const AnswerContainer = styled(Box)(({ theme }) => ({
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
}));

const AnswerRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '1rem',
  padding: '1.5rem',
  [theme.breakpoints.down('md')]: {
    padding: '1.25rem',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '32px',
  height: '32px',
  borderRadius: '8px',
  flexShrink: 0,
}));

const QuestionIcon = styled(IconWrapper)(({ theme }) => ({
  background: 'rgba(96, 165, 250, 0.2)',
  border: '1px solid rgba(96, 165, 250, 0.3)',
  '& svg': {
    /* Question Icon Color - White */
    color: '#ffffff', // White icon
    fontSize: '1.3rem',
  },
}));

const AnswerIcon = styled(IconWrapper)(({ theme }) => ({
  background: 'rgba(147, 197, 253, 0.2)',
  border: '1px solid rgba(147, 197, 253, 0.3)',
  marginTop: '2px',
  '& svg': {
    /* Answer Icon Color - White */
    color: '#ffffff', // White icon
    fontSize: '1.3rem',
  },
}));

const ExpandIcon = styled(ExpandMoreIcon)(({ expanded }) => ({
  /* Expand Icon Color - White */
  color: '#ffffff', // White icon
  fontSize: '1.5rem',
  transition: 'transform 0.3s ease',
  transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
  marginLeft: 'auto',
}));

const QuestionText = styled(Typography)(({ theme }) => ({
  fontSize: '1.15rem',
  fontWeight: 700,
  /* Question Text Color - White */
  color: '#ffffff', // White text
  lineHeight: 1.5,
  flex: 1,
  [theme.breakpoints.down('md')]: {
    fontSize: '1.05rem',
  },
}));

const AnswerText = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: 400,
  /* Answer Text Color - White with slight opacity */
  color: 'rgba(255, 255, 255, 0.9)', // White text with slight transparency
  lineHeight: 1.8,
  flex: 1,
  [theme.breakpoints.down('md')]: {
    fontSize: '0.95rem',
  },
}));

// ============================================
// FAQ DATA - Add your questions and answers here
// ============================================

const faqData = [
  {
    question: 'faq.question1',
    answer: 'faq.answer1',
  },
  {
    question: 'faq.question2',
    answer: 'faq.answer2',
  },
  {
    question: 'faq.question3',
    answer: 'faq.answer3',
  },
   {
    question: 'faq.question4',
    answer: 'faq.answer4',
  },
  {
    question: 'faq.question5',
    answer: 'faq.answer5',
  },
];

// ============================================
// FAQ COMPONENT
// ============================================

const FAQ = () => {
  const { translations } = useContext(TranslationContext);
  // State to track which questions are expanded (allows multiple to be open)
  const [expandedItems, setExpandedItems] = useState([]);

  const handleToggle = (index) => {
    setExpandedItems((prev) => {
      if (prev.includes(index)) {
        // If already expanded, collapse it
        return prev.filter((i) => i !== index);
      } else {
        // If collapsed, expand it (keeps others open)
        return [...prev, index];
      }
    });
  };

  // Helper function to get translated text
  const t = (key) => {
    return translations[key] || key;
  };

  return (
    <FAQWrapper id="faq">
      <Container maxWidth="lg">
        <SectionTitle variant="h2">
          {t('faq.title')}
        </SectionTitle>
        <SectionSubtitle>
          {t('faq.subtitle')}
        </SectionSubtitle>

        <FAQContainer>
          {faqData.map((faq, index) => {
            const isExpanded = expandedItems.includes(index);
            
            return (
              <FAQItem key={index} expanded={isExpanded}>
                <QuestionRow onClick={() => handleToggle(index)}>
                  <QuestionIcon>
                    <HelpOutlineIcon />
                  </QuestionIcon>
                  <QuestionText>{t(faq.question)}</QuestionText>
                  <ExpandIcon expanded={isExpanded} />
                </QuestionRow>
                
                <Collapse in={isExpanded} timeout={400}>
                  <AnswerContainer>
                    <AnswerRow>
                      <AnswerIcon>
                        <ReplyIcon />
                      </AnswerIcon>
                      <AnswerText>{t(faq.answer)}</AnswerText>
                    </AnswerRow>
                  </AnswerContainer>
                </Collapse>
              </FAQItem>
            );
          })}
        </FAQContainer>
      </Container>
    </FAQWrapper>
  );
};

export default FAQ;
