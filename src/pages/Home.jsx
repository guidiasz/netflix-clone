import React from 'react';
import JumbotronContainer from '../containers/Jumbotron';
import FooterContainer from '../containers/Footer';
import FaqContainer from '../containers/Faq';
import HeaderContainer from '../containers/Header';
import OptFormContainer from '../containers/OptForm';
import { Feature } from '../components';

const Home = () => {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Filmes, séries e muito mais, sem limites</Feature.Title>
          <Feature.Subtitle>Assista onde quiser. Cancele quando quiser.</Feature.Subtitle>
          <OptFormContainer />
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqContainer />
      <FooterContainer />
    </>
  );
};

export default Home;
