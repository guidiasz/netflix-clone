import React from 'react';
import { Footer } from '../components/';

const FooterContainer = () => {
  return (
    <>
      <Footer>
        <Footer.Title>
          Dúvidas? Ligue <Footer.Link href="#">0800 591 2876</Footer.Link>
        </Footer.Title>

        <Footer.Row>
          <Footer.Column>
            <Footer.Link href="#">Perguntas frequentes</Footer.Link>
            <Footer.Link href="#">Media Center</Footer.Link>
            <Footer.Link href="#">Resgatar cartão pré-pago</Footer.Link>
            <Footer.Link href="#">Termos de Uso</Footer.Link>
            <Footer.Link href="#">Informações corporativas</Footer.Link>
            <Footer.Link href="#">Avisos legais</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Link href="#">Central de Ajuda</Footer.Link>
            <Footer.Link href="#">Relações com investidores</Footer.Link>
            <Footer.Link href="#">Comprar cartão pré-pago</Footer.Link>
            <Footer.Link href="#">Privacidade</Footer.Link>
            <Footer.Link href="#">Entre em contato</Footer.Link>
            <Footer.Link href="#">Só na Netflix</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Link href="#">Conta</Footer.Link>
            <Footer.Link href="#">Carreiras</Footer.Link>
            <Footer.Link href="#">Formas de assistir</Footer.Link>
            <Footer.Link href="#">Preferências de cookies</Footer.Link>
            <Footer.Link href="#">Teste de velocidade</Footer.Link>
          </Footer.Column>
        </Footer.Row>
        <Footer.Break />

        <Footer.Text>Netflix Brasil</Footer.Text>
      </Footer>
    </>
  );
};

export default FooterContainer;
