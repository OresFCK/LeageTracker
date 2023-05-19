import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f2f2f2;
  padding: 20px;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const FooterText = styled.p`
  margin: 0;
  color: #666666;
`;

const Footer = () => (
  <FooterContainer>
    <FooterText>© 2023 LeagueTracker App. All rights reserved.</FooterText>
  </FooterContainer>
);

export default Footer;