import React from 'react';
import { screen } from '@testing-library/react';
import FavoritePokemon from '../pages/FavoritePokemon';
import renderWithRouter from '../renderWithRouter';

describe('Renderiza o componente Favorite Pokemon e', () => {
  test('verifica se é exibida na tela a mensagem No favorite pokemon found, caso a pessoa não tenha Pokémon favoritos', () => {
    renderWithRouter(<FavoritePokemon />);
    const noFav = screen.getByText(/no favorite pokémon found/i);
    expect(noFav).toBeInTheDocument();
  });
  test('verifica se são exibidos todos os cards de Pokémon favoritados', () => {
    renderWithRouter(<FavoritePokemon />);
    const favCard = screen.getByRole('heading', { level: 2 });
    expect(favCard).toBeInTheDocument();
  });
});
