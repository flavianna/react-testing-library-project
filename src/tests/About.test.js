import React from 'react';
import { screen } from '@testing-library/react';
import About from '../pages/About';
import renderWithRouter from '../renderWithRouter';

describe('Testa se a página contém as informações sobre a Pokédex e...', () => {
  describe('Testa o about...', () => {
    test('verifica se é exibido na tela um h2 com texto About Pokédex', () => {
      renderWithRouter(<About />);
      const aboutPokedex = screen.getByRole('heading', {
        name: /about pokédex/i,
      });
      expect(aboutPokedex).toBeInTheDocument();
    });
  });

  describe('Testa o about...', () => {
    test('verifica se a página contém dois parágrafos com texto sobre a Pokédex', () => {
      renderWithRouter(<About />);
      const paragraph1 = screen.getByText(
        /one can filter pokémon by type, and see more details for each one of them/i,
      );
      expect(paragraph1).toBeInTheDocument();

      const paragraph2 = screen.getByText(
        /this application simulates a pokédex, a digital encyclopedia containing all pokémon/i,
      );
      expect(paragraph2).toBeInTheDocument();
    });
  });

  describe('Testa o about e...', () => {
    test('verifica se o atributo src da imagem é https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png', () => {
      renderWithRouter(<About />);
      const image = screen.getByRole('img', {
        name: /pokédex/i,
      });
      expect(image).toBeInTheDocument();
    });
  });
});
