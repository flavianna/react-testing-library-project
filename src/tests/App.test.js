import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Renderiza a pokedex e...', () => {
  describe('Testa o Home e...', () => {
    test('verifica se é exibido na tela um link com o texto Home', () => {
      renderWithRouter(<App />);
      const home = screen.getByRole('link', {
        name: /home/i,
      });
      expect(home).toBeInTheDocument();
    });
  });

  describe('Testa o about e...', () => {
    test('verifica se é exibido na tela um link com o texto about', () => {
      renderWithRouter(<App />);
      const about = screen.getByRole('link', {
        name: /about/i,
      });
      expect(about).toBeInTheDocument();
    });
  });

  describe('Testa o favorite Pokemon e...', () => {
    test('verifica se é exibido na tela um link com o texto favorite Pokemon', () => {
      renderWithRouter(<App />);
      const favPokemon = screen.getByRole('link', {
        name: /favorite pokémon/i,
      });
      expect(favPokemon).toBeInTheDocument();
    });
  });
});
