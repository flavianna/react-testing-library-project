import React from 'react';
import { screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';
import renderWithRouter from '../renderWithRouter';

describe('testa o componente <Not Found.js /> e', () => {
  test('verifica se é exibido na tela um h2 com o texto Page requested not found', () => {
    renderWithRouter(<NotFound />);
    const tagH2 = screen.getByRole('heading', {
      name: /page requested not found/i,
    });
    expect(tagH2).toBeInTheDocument();
  });

  test('verifica se existe uma imagem com o src https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
    renderWithRouter(<NotFound />);
    const imgUrl = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    const image = screen.getByRole('img', {
      name: /pikachu crying because the page requested was not found/i,
    });
    expect(image.src).toBe(imgUrl);
  });
});
